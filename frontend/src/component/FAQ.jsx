import React, { useState } from "react";

function FAQ() {

  const faqs = [
    {
      question: "How do I book a train ticket?",
      answer: "Enter your route, choose a train, and complete payment."
    },
    {
      question: "Can I cancel my ticket?",
      answer: "Yes, tickets can be cancelled depending on policy."
    },
    {
      question: "Do I get instant confirmation?",
      answer: "Yes, you will receive confirmation instantly."
    }
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="py-14  ">

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-[#257DDC]">Frequently Asked</span> <span className="text-red-500">Questions</span>
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-700 py-4"
          >

            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left font-semibold"
            >
              {faq.question}
            </button>

            {open === index && (
              <p className="text-gray-400 mt-2">
                {faq.answer}
              </p>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;