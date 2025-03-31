import { useState } from "react";
const overlayImage = '/assets/wtiworld.png';
import { BsWhatsapp } from "react-icons/bs";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
    whatsapp: "", // Added whatsapp field
    destination: "",
    travelDate: "",
    people: "",
    packageType: "Inbound",
    comments: "", // Added comments field
  });

  const destinations = [
    "Sri Lanka",
    "Dubai",
    "Singapore",
    "Thailand",
    "Bangkok",
    "Seychelles",
    "Malaysia",
    "Azerbaijan",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          city: "",
          email: "",
          phone: "",
          whatsapp: "",
          destination: "",
          travelDate: "",
          people: "",
          packageType: "Inbound",
          comments: "",
        });
      } else {
        alert("Failed to send form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
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
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            className="w-full max-w-sm mx-auto border border-gray-400 rounded-md p-2"
            onChange={handleChange}
          />

          {/* Destination Dropdown */}
          <select
            name="destination"
            required
            className="w-full max-w-sm mx-auto border border-gray-400 rounded-md p-2"
            onChange={handleChange}
            value={formData.destination}
          >
            <option value="" disabled>Select Travel Destination *</option>
            {destinations.map((dest, index) => (
              <option key={index} value={dest}>{dest}</option>
            ))}
          </select>

          <input
            type="text"
            name="city"
            placeholder="City of Residence *"
            required
            className="w-full max-w-sm mx-auto border border-gray-400 rounded-md p-2"
            onChange={handleChange}
          />
          <div className="w-full max-w-sm mx-auto">
            <label htmlFor="travelDate" className="block text-gray-600 mb-1">
              Date of Travel *
            </label>
            <input
              type="date"
              id="travelDate"
              name="travelDate"
              required
              className="w-full border border-gray-400 rounded-md p-2"
              min={new Date().toISOString().split("T")[0]}
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            className="w-full max-w-sm mx-auto border border-gray-400 rounded-md p-2"
            onChange={handleChange}
          />
          <input
            type="number"
            name="people"
            placeholder="No. of People *"
            required
            min="1"
            className="w-full max-w-sm mx-auto border border-gray-400 rounded-md p-2"
            onChange={handleChange}
          />
          <div className="relative w-full max-w-sm mx-auto">
            <span className="absolute left-3 top-2">📞</span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              className="w-full border border-gray-400 rounded-md p-2 pl-10"
              onChange={handleChange}
            />
          </div>
          <div className="relative w-full max-w-sm mx-auto">
            <span className="absolute left-3 top-2">📞</span>
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number"
              required
              className="w-full border border-gray-400 rounded-md p-2 pl-10"
              onChange={handleChange}
            />
          </div>

          <select
            name="packageType"
            className="w-full max-w-sm mx-auto border border-gray-400 rounded-md p-2 mr-2"
            required
            onChange={handleChange}
            value={formData.packageType}
            
          >
            <option value="" disabled>Select Service Type</option>
            <option onMouseOver={(e) => (e.target.style.backgroundColor = 'red')}
    onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
    style={{ transition: 'background-color 0.3s ease' }} value="Inbound">Inbound</option>
            <option value="Outbound">Outbound</option>
            <option value="Air Tickets">Air Tickets</option>
            <option value="Visa Services">Visa Services</option>
            <option value="MIce Tours">Mice Tours</option>
          </select>
          <textarea
            name="comments"
            placeholder="Any Comments"
            className="w-full mx-auto border border-gray-400 rounded-md p-2"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full mx-auto bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;