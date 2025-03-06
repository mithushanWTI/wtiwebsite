import { useState } from "react";
const overlayImage = '/assets/tour1.png';

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <div
      className="relative bg-red-700 text-white py-12 px-4 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${overlayImage})` }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-red-700 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold">Subscribe For Updates.</h2>
        <p className="text-sm mt-2">
          Be First To Know About Promotions, Discounts And Many More.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex justify-center items-center gap-2"
        >
          <input
            type="email"
            placeholder="your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 w-64 rounded-md text-black border border-blue-950 bg-white"
            required
          />
          <button
            type="submit"
            className="bg-blue-950 text-white px-4 py-2 rounded-md font-semibold border border-blue-950 hover:bg-transparent hover:border-1"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
