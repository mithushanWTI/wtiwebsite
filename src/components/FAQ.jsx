import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import faq1 from '../assets/faq (1).png'
import faq2 from '../assets/faq (2).png'
import faq3 from '../assets/faq (3).png'

const faqs = [
  {
    question: "How do I make a reservation on your website",
    answer:
      "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodations, and completing the booking process.",
  },
  {
    question: "What documents do I need for my trip, and how do I obtain them?",
    answer: "Information about travel documents, visas, and requirements."
  },
  {
    question: "In the event that I need to modify or cancel my reservation, what are the policies in place?",
    answer: "Explain the cancellation and modification policies."
  },
  {
    question: "Can you specify the types of credit/debit cards, digital wallets, or other online payment methods accepted?",
    answer: "List the accepted payment methods."
  },
  {
    question: "What are the working hours, and what can I expect in terms of response times?",
    answer: "Provide customer service availability details."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white p-10 flex flex-col lg:flex-row gap-10  xl:px-30">
     <div className="w-full md:w-full lg:w-1/2 lg:flex-1">
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
