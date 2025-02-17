import { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <div className="bg-red-600 text-white py-10 px-6 text-center">
      <h2 className="text-2xl font-bold">Subscribe For Updates.</h2>
      <p className="text-sm mt-2">Be First To Know About Promotions, Discounts And Many More.</p>
      
      <form onSubmit={handleSubmit} className="mt-4 flex justify-center">
        <input
          type="email"
          placeholder="your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 w-72 rounded-l-md text-gray-800 outline-none"
        />
        <button type="submit" className="bg-red-700 px-6 py-2 rounded-r-md font-semibold hover:bg-red-800">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeSection;
