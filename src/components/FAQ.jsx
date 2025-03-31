import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
const faq1 = '/assets/faq.jpg'
const faq2 = '/assets/faq2.jpg'
const faq3 = '/assets/faq3.jpg'

const faqs = [
  {
    "question": "How can I book a flight with WTI?",
    "answer": "Visit our AIR TICKETS page and fill the inquiry form, our customer service executive will reach out shortly. Alternatively, visit our office, or contact our support team via phone."
  },
  {
    "question": "What documents are required for visa applications?",
    "answer": "Documents vary by country but generally include a passport, photos, bank statements, and a travel itinerary. Please check the VISA SERVICES page for specific requirements."
  },
  {
    "question": "Do you offer group travel packages?",
    "answer": "Yes! We provide customized Inbound and Outbound holiday tour solutions for individuals, couples, friends, families & corporate groups. Please check our Holiday tour pages."
  },
  {
    "question": "How do I make a booking with WTI?",
    "answer": "You can book by calling, WhatsApp messaging, or emailing our team. Once you confirm, we’ll send you a payment link or bank details for processing."
  },
  {
    "question": "What payment methods do you accept?",
    "answer": "We accept bank transfers, credit/debit cards, and online payments. Payment options vary depending on location and service."
  },
  {
    "question": "How can my company become a WTI corporate client?",
    "answer": "Simply contact our corporate travel desk (please check our corporate page) to discuss your company’s travel needs, and we’ll provide a customized travel solution with special corporate rates."
  },
  
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white p-10 flex flex-col lg:flex-row gap-10  xl:px-30">
     <div className="w-full md:w-full lg:w-1/2 lg:flex-1 text-center sm:text-left">
        <h2 className="text-3xl font-bold"><span className="text-red-500">F</span>requently <span className="text-red-500">A</span>sked <span className="text-red-500">Q</span>uestions</h2>
        <p className="text-gray-400">You need to come at least once in your life</p>
        <div className="mt-6 bg-gray-900 rounded-lg p-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{(index + 1).toString().padStart(2, '0')} {faq.question}</span>
                {activeIndex === index ? <FaTimes /> : <FaPlus />}
              </button>
              {activeIndex === index && (
                <p className="text-gray-400 p-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:grid w-full md:w-1/2 grid-cols-2 grid-rows-2 gap-2 pt-5">
        <img src={faq1} alt="FAQ 1" className="rounded-lg col-span-1 row-span-2 w-full h-125 object-cover" />
        <img src={faq2} alt="FAQ 2" className="rounded-lg w-full h-60 object-cover" />
        <img src={faq3} alt="FAQ 3" className="rounded-lg w-full h-60 object-cover" />
      </div>
    </div>
  );
}
