import { useState } from "react";
import axios from "axios";
import { BsWhatsapp } from "react-icons/bs";

const overlayImage = '/assets/wtiworld.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
    whatsapp: "",
    destination: "",
    travelDate: "",
    people: "",
    serviceType: "Inbound",
    comments: "",
    flightType: "",
    passportNumber: "",
    eventType: "",
    companyName: "",
    flightPhase: "",
    services: "",
  });

  const [loading, setLoading] = useState(false);

  const destinations = [
    "Sri Lanka", "Dubai", "Singapore", "Thailand", "Bangkok", "Seychelles", "Malaysia", "Azerbaijan",
  ];

 

  const flightPhases = ["Preflight", "Inflight", "Postflight"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://api.wti.lk/send-email", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        alert("Form submitted successfully!");
        setFormData({
          name: "", city: "", email: "", phone: "", whatsapp: "",
          destination: "", travelDate: "", people: "",
          serviceType: "Inbound", comments: "",
          flightType: "", passportNumber: "", eventType: "", companyName: "",
          flightPhase: "", services: "",
        });
      } else {
        alert("Failed to send form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Define fields required for each service type
  const fieldConfig = {
    Inbound: ['destination','name',  'city', 'travelDate', 'email', 'people', 'phone', 'whatsapp', 'comments'],
    Outbound: ['name', 'destination', 'city', 'travelDate', 'email', 'people', 'phone', 'whatsapp', 'comments'],
    AirTickets: ['name', 'destination', 'travelDate', 'email', 'people', 'phone', 'whatsapp', 'comments', 'flightType'],
    VisaServices: ['name', 'destination', 'email','travelDate', 'phone', 'whatsapp', 'comments', 'passportNumber'],
    MiceTours: ['name', 'destination', 'city', 'travelDate', 'email', 'people', 'phone', 'whatsapp', 'comments', 'eventType'],
    CorporateTravel: ['name', 'city', 'email', 'phone','travelDate', 'whatsapp', 'comments', 'companyName'],
    Ancillaries: ['name', 'email', 'phone', 'flightPhase', 'travelDate', 'comments', 'whatsapp'],
  };

  return (
    <div
      className="flex justify-center items-center min-h-130 bg-cover bg-center p-4 pt-20 pb-20"
      style={{ backgroundImage: `url(${overlayImage})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl backdrop-blur-xl bg-transparent p-6 space-y-4 flex flex-col justify-center rounded-lg shadow-lg"
      >
        <h2 className="text-center text-xl font-bold">
          BOOK YOUR <span className="text-red-500">DREAM TOUR</span> NOW..!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Service Type - First */}
         <div className="w-full">
            <label htmlFor="serviceType" className="block text-gray-600 mb-1">Select Service Type *</label>
            <select
              id="serviceType"
              name="serviceType"
              required
              onChange={handleChange}
              value={formData.serviceType}
              className="w-full border border-gray-400 rounded-md p-2"
            >
              <option value="" disabled>Select Service Type *</option>
              <option value="Inbound">Inbound</option>
              <option value="Outbound">Outbound</option>
              <option value="AirTickets">Air Tickets</option>
              <option value="VisaServices">Visa Services</option>
              <option value="MiceTours">Mice Tours</option>
              <option value="CorporateTravel">Corporate Travel</option>
              <option value="Ancillaries">Ancillaries</option>
            </select>
          </div>

          {/* Conditionally Render Fields Based on Service Type */}

           {fieldConfig[formData.serviceType].includes('travelDate') && (
            <div className="w-full">
              <label htmlFor="travelDate" className="block text-gray-600 mb-1">
                {formData.serviceType === 'Ancillaries' ? 'Preferred Date *' : 'Date of Travel *'}
              </label>
              <input
                type="date"
                id="travelDate"
                name="travelDate"
                required
                min={new Date().toISOString().split("T")[0]}
                value={formData.travelDate}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md p-2"
              />
            </div>
          )}

           {fieldConfig[formData.serviceType].includes('destination') && (
            <select
              name="destination"
              required
              onChange={handleChange}
              value={formData.destination}
              className="w-full border border-gray-400 rounded-md p-2"
            >
              <option value="" disabled>Select Travel Destination *</option>
              {destinations.map((dest, index) => (
                <option key={index} value={dest}>{dest}</option>
              ))}
            </select>
          )}

          {fieldConfig[formData.serviceType].includes('name') && (
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md p-2"
            />
          )}

         {fieldConfig[formData.serviceType].includes('flightPhase') && (
            <select
              name="flightPhase"
              required
              onChange={handleChange}
              value={formData.flightPhase}
              className="w-full border border-gray-400 rounded-md p-2"
            >
              <option value="" disabled>Select Flight Phase *</option>
              {flightPhases.map((phase, index) => (
                <option key={index} value={phase}>{phase}</option>
              ))}
            </select>
          )}

          {fieldConfig[formData.serviceType].includes('city') && (
            <input
              type="text"
              name="city"
              placeholder="City of Residence *"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md p-2"
            />
          )}

          

          {fieldConfig[formData.serviceType].includes('email') && (
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md p-2"
            />
          )}

          {fieldConfig[formData.serviceType].includes('people') && (
            <input
              type="number"
              name="people"
              placeholder="No. of People *"
              required
              min="1"
              value={formData.people}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md p-2"
            />
          )}

          {fieldConfig[formData.serviceType].includes('phone') && (
            <div className="relative w-full">
              <span className="absolute left-3 top-2">📞</span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md p-2 pl-10"
              />
            </div>
          )}

          {fieldConfig[formData.serviceType].includes('whatsapp') && (
            <div className="relative w-full">
              <span className="absolute left-3 top-3 text-green-600"><BsWhatsapp /></span>
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp Number *"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md p-2 pl-10"
              />
            </div>
          )}

          {fieldConfig[formData.serviceType].includes('flightType') && (
            <select
              name="flightType"
              required
              onChange={handleChange}
              value={formData.flightType}
              className="w-full border border-gray-400 rounded-md p-2"
            >
              <option value="" disabled>Select Flight Type *</option>
              <option value="OneWay">One-Way</option>
              <option value="Return">Return</option>
              <option value="RoundTrip">Round-Trip</option>
            </select>
          )}

          {fieldConfig[formData.serviceType].includes('passportNumber') && (
            <input
              type="text"
              name="passportNumber"
              placeholder="Passport Number *"
              required
              value={formData.passportNumber}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md p-2"
            />
          )}

          {fieldConfig[formData.serviceType].includes('eventType') && (
            <input
              type="text"
              name="eventType"
              placeholder="Event Type (e.g., Conference, Exhibition) *"
              required
              value={formData.eventType}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md p-2"
            />
          )}

          {fieldConfig[formData.serviceType].includes('companyName') && (
            <input
              type="text"
              name="companyName"
              placeholder="Company Name *"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md p-2"
            />
          )}

          

          {fieldConfig[formData.serviceType].includes('services') && (
            <select
              name="services"
              required
              onChange={handleChange}
              value={formData.services}
              className="w-full border border-gray-400 rounded-md p-2"
            >
              <option value="" disabled>Select Service *</option>
              {ancillaryServices.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          )}

          {fieldConfig[formData.serviceType].includes('comments') && (
            <textarea
              name="comments"
              placeholder={formData.serviceType === 'Ancillaries' ? 'Additional Notes' : 'Any Comments'}
              value={formData.comments}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md p-2"
              rows="1"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg cursor-pointer font-semibold transition ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 text-white hover:bg-red-600'
          }`}
        >
          {loading ? "Submitting..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;