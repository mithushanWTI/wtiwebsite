import React, { useState } from 'react';
import heroImage from '/assets/career.png';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import {
  FaGlobe, FaRocket, FaLightbulb, FaHandsHelping, FaAward, FaLeaf,
  FaBriefcase, FaPlane, FaPassport, FaBullhorn, FaUsers, FaUserTie, FaTools
} from 'react-icons/fa';

const Career = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    role: '',
  });
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);


  const benefits = [
    { icon: <FaGlobe className="text-red-500 text-2xl" />, title: 'Global Exposure', description: 'Work with international partners, global brands, and diverse customers across multiple countries.' },
    { icon: <FaRocket className="text-red-500 text-2xl" />, title: 'Career Growth', description: 'We invest in our people with structured learning programs, mentorship, and internal career progression opportunities.' },
    { icon: <FaLightbulb className="text-red-500 text-2xl" />, title: 'Innovation Culture', description: 'At WTI, we embrace new ideas, encourage creativity, and drive innovation at every level of the organization.' },
    { icon: <FaHandsHelping className="text-red-500 text-2xl" />, title: 'Empowering Environment', description: 'Our teams are built on collaboration, trust, and respect — empowering every employee to excel.' },
    { icon: <FaAward className="text-red-500 text-2xl" />, title: 'Recognition and Rewards', description: 'We celebrate your achievements and ensure your contributions are recognized, rewarded, and celebrated.' },
    { icon: <FaLeaf className="text-red-500 text-2xl" />, title: 'Sustainability and Responsibility', description: 'Be part of a company that cares about its community, environment, and making a positive difference.' },
  ];

  const opportunities = [
    { icon: <FaBriefcase className="text-red-500 text-2xl" />, title: 'Sales & Business Development' },
    { icon: <FaPlane className="text-red-500 text-2xl" />, title: 'Travel Consultants (Air Tickets & Holidays)' },
    { icon: <FaPassport className="text-red-500 text-2xl" />, title: 'Visa and Documentation Specialists' },
    { icon: <FaBullhorn className="text-red-500 text-2xl" />, title: 'Digital Marketing and Communications' },
    { icon: <FaUsers className="text-red-500 text-2xl" />, title: 'MICE Event Planners (Meetings, Incentives, Conferences, Exhibitions)' },
    { icon: <FaUserTie className="text-red-500 text-2xl" />, title: 'Corporate Travel Account Managers' },
    { icon: <FaTools className="text-red-500 text-2xl" />, title: 'Operations and Support Staff' },
  ];

  const jobs = [
    {
      title: "Technical Support Engineer",
      type: "",
      company: "WTI",
      details: "Full-time, Temporary or Contract",
    },
  ];

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // Start loading
  setSubmitStatus(null); // Clear previous status

  const formData = new FormData();
  formData.append('name', formValues.name);
  formData.append('email', formValues.email);
  formData.append('city', formValues.city);
  formData.append('phone', formValues.phone);
  formData.append('role', formValues.role);
  formData.append('resume', resume);
  if (coverLetter) formData.append('coverLetter', coverLetter);

  try {
    const response = await axios.post('https://api.wti.lk/career-application', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    setSubmitStatus({ success: true, message: response.data.message });
    setFormValues({ name: '', email: '', city: '', phone: '', role: '' });
    setResume(null);
    setCoverLetter(null);
  } catch (error) {
    setSubmitStatus({ success: false, message: 'Submission failed. Please try again.' });
  } finally {
    setLoading(false); // Stop loading
  }
};


  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[85vh] flex items-center justify-center bg-cover bg-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center zoom-animation" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative p-6 text-center rounded-lg">
          <h2 className="text-2xl md:text-3xl font-light font-montez">Your Journey Starts Here</h2>
          <h1 className="text-4xl md:text-8xl font-bold mt-2">CAREER</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-100 px-4 lg:px-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex flex-col justify-start">
            <h2 className="text-3xl font-semibold mb-4">Your Journey Starts <span className="text-red-500">Here</span></h2>
            <p className="text-gray-600 mb-4">At WTI, we believe a career is more than just a job...</p>
            <p className="text-gray-600 mb-6">Whether you're beginning your career or seeking the next big opportunity...</p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300 w-fit">Learn More</button>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl shadow-sm">
                <div>{item.icon}</div>
                <h3 className="font-semibold mt-3 text-md">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-16 bg-gray-50 px-4 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <img src="/assets/employee.png" alt="Careers at WTI" className="w-full rounded-xl object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-6">Who <span className="text-red-500">We Are Looking For</span></h2>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Passionate professionals in travel, tourism, marketing, etc.</li>
              <li>Creative thinkers who love solving challenges</li>
              <li>Customer-focused individuals with a can-do attitude</li>
              <li>Team players who bring energy, positivity, and dedication</li>
              <li>Visionaries who are ready to build the future of travel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 bg-gray-200 px-4 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Opportunities at <span className="text-red-500">WTI</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition">
                <div>{item.icon}</div>
                <h3 className="text-md font-medium text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-[#f4f7fe] px-4 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Current <span className="text-red-600">Openings</span></h2>
          <div className="flex flex-col gap-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white flex justify-between items-center px-6 py-5 rounded-xl shadow-sm hover:shadow-md transition">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {job.title}{" "}
                    {job.type && <span className="text-gray-400 font-normal">({job.type})</span>}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{job.company} | {job.details}</p>
                </div>
                <button className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white px-4 lg:px-24">
        <div className="max-w-3xl mx-auto rounded-xl shadow-sm py-8 px-8">
          <h2 className="text-3xl font-semibold text-center mb-10">Submit Your <span className="text-red-600">Application</span></h2>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full border border-gray-300 p-3 rounded-md" required value={formValues.name} onChange={(e) => setFormValues({ ...formValues, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 p-3 rounded-md" required value={formValues.email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input type="text" className="w-full border border-gray-300 p-3 rounded-md" required value={formValues.city} onChange={(e) => setFormValues({ ...formValues, city: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full border border-gray-300 p-3 rounded-md" required value={formValues.phone} onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Role</label>
              <input type="text" className="w-full border border-gray-300 p-3 rounded-md" required value={formValues.role} onChange={(e) => setFormValues({ ...formValues, role: e.target.value })} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
              <input type="file" className="w-full border border-gray-300 p-3 rounded-md" required onChange={(e) => setResume(e.target.files[0])} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Cover Letter (Optional)</label>
              <input type="file" className="w-full border border-gray-300 p-3 rounded-md" onChange={(e) => setCoverLetter(e.target.files[0])} />
            </div>

           <button
  type="submit"
  disabled={loading}
  className={`flex items-center justify-center gap-2 bg-red-600 text-white py-3 px-6 rounded-md transition w-fit mx-auto ${
    loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-red-700'
  }`}
>
  {loading ? (
    <>
      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
      Submitting...
    </>
  ) : (
    'Submit Application'
  )}
</button>


            {submitStatus && (
              <p className={`text-center mt-4 ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                {submitStatus.message}
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
