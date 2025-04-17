import { Link } from "react-router-dom";
import { FAQs } from "../../lib/constants";
import FAQCard from "../ui/FAQCard";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function FAQSection() {
  const [isOpen, setIsOpen] = useState<number>(-1);

  const handleOpen = (id: number) => {
    if (isOpen === id) {
      setIsOpen(-1);
    } else {
      setIsOpen(id);
    }
  };

  return (
    <section className="py-12 w-full font-manrope">
      <div className="flex w-full max-w-7xl mx-auto justify-between flex-col md:flex-row mb-32">
        <div className="w-full md:w-[30%] px-4 md:px-0 mb-12 md:mb-0">
          <p className="text-text-gray mb-4 text-md">FAQ's</p>
          <h2 className="font-bold text-[32px] md:text-5xl leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base mb-6 text-gray-600">
            Have questions? We’ve got answers. Still curious? Contact us:
          </p>
          <Link
            to="mailto:info@investo.com"
            className="text-blue-600 hover:underline text-3xl font-semibold"
          >
            info@investo.com
          </Link>
        </div>

        <div className="w-full md:w-[65%] px-4 border-t border-primary-100">
          {FAQs.map((faq, idx) => (
            <FAQCard
              key={idx}
              id={idx}
              isOpen={isOpen}
              onclick={handleOpen}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="flex w-full max-w-7xl mx-auto items-end justify-between space-y-24 md:space-y-0 flex-col md:flex-row">
          <div className="w-full md:w-[50%]">
            <div className="text-center w-full px-4 md:p-0 mb-6 md:text-left border">
              <h2 className="font-bold text-[32px] md:text-5xl mb-4 w-[15ch] mx-auto">
                Smooth and Easy International Transfers.
              </h2>
              <p className="text-[14px] md:text-md md:w-[50ch] px-4 md:p-0">
                With user-friendly features, competitive exchange rates, and
                robust security measures, our platform simplifies international
                transactions.
              </p>
            </div>

            <div className="px-4 md:p-0">
              <div className="mb-12 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="bg-gray-100 p-2 rounded-full flex items-center justify-center">
                    <FaCheck />
                  </span>
                  <p className="text-sm">
                    Seamless international money transfers.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-gray-100 p-2 rounded-full flex items-center justify-center">
                    <FaCheck />
                  </span>
                  <p className="text-sm">
                    Competitive exchange rates offered daily.
                  </p>
                </div>
              </div>

              <div>
                <button className="bg-secondary rounded-full text-primary py-2 px-4 cursor-pointer hover:bg-secondary/80 transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%] flex items-end justify-start">
            {/* <div className="w-full md:w-[568px] md:h-[400px] rounded-xl bg-primary-100 flex flex-col py-8 px-4 space-y-3 justify-center"> */}
            <img src="/images/world_map.svg" alt="world map" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
