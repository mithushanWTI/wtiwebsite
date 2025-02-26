import { useState } from "react";
import overlayImage from '../assets/wtiworld.png';
import { BsWhatsapp } from "react-icons/bs";

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
    vacationType: "",
    packageType: "Inbound",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
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
          <input
            type="text"
            name="destination"
            placeholder="Travel Destination *"
            required
            className="w-full max-w-sm mx-auto border border-gray-400 rounded-md p-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City of Residence *"
            required
            className="w-full max-w-sm mx-auto border border-gray-400 rounded-md p-2"
            onChange={handleChange}
          />
          <input
            type="date"
            name="travelDate"
            required
            className="w-full max-w-sm mx-auto border border-gray-400 rounded-md p-2"
            min={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
          />
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
            <span className="absolute left-3 top-3 text-green-500 "><BsWhatsapp/></span>
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp"
              className="w-full border border-gray-400 rounded-md p-2 pl-10"
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            name="vacationType"
            placeholder="Vacation Type *"
            required
            className="w-full max-w-sm mx-auto border border-gray-400 rounded-md p-2"
            onChange={handleChange}
          />
          <select
            name="packageType"
            className="w-full max-w-sm mx-auto border border-gray-400 rounded-md p-2 mr-2"
            required
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Select Package Type
            </option>
            <option value="Inbound">Inbound</option>
            <option value="Outbound">Outbound</option>
          </select>
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
