import { Link } from "react-router-dom";
import { FAQs } from "../../lib/constants";
import FAQCard from "../ui/FAQCard";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FAQSection() {
  const [isOpen, setIsOpen] = useState<number>(-1);

  const handleOpen = (id: number) => {
    setIsOpen(isOpen === id ? -1 : id);
  };

  return (
    <section className="py-12 w-full font-manrope">
      <motion.div
        className="flex w-full max-w-7xl mx-auto justify-between flex-col md:flex-row mb-32"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full md:w-[30%] px-6 md:px-0 mb-12 md:mb-0"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-text-gray mb-4 text-md text-center md:text-left bg-primary-100/50 py-1 px-4 rounded-full w-fit mx-auto md:mx-0 border border-secondary/20">
            FAQ's
          </p>
          <h2 className="font-bold text-3xl md:text-5xl mb-4 text-center md:text-left">
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
        </motion.div>

        <motion.div
          className="w-full md:w-[65%] px-6 border-t border-primary-100"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
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
        </motion.div>
      </motion.div>

      <motion.div
        className="flex w-full max-w-7xl mx-auto items-end justify-between space-y-24 md:space-y-0 flex-col md:flex-row"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-full md:w-[50%]">
          <div className="px-6 md:p-0 mb-6">
            <h2 className="font-bold text-3xl md:text-5xl mb-4 text-center md:text-left">
              Smooth and Easy International Transfers.
            </h2>
            <p className="text-[14px] md:text-md text-center md:text-left px-3 md:px-0 md:pr-40">
              With user-friendly features, competitive exchange rates, and
              robust security measures, our platform simplifies international
              transactions.
            </p>
          </div>

          <div className="px-6 md:p-0">
            <div className="mb-12 space-y-4">
              {[
                "Seamless international money transfers.",
                "Competitive exchange rates offered daily.",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="bg-gray-100 p-2 rounded-full flex items-center justify-center">
                    <FaCheck />
                  </span>
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>

            <div>
              <button className="bg-secondary rounded-full text-primary py-3 px-6 cursor-pointer hover:bg-secondary/80 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className="w-full md:w-[50%] flex items-end justify-start"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src="/images/world_map.svg" alt="world map" />
        </motion.div>
      </motion.div>
    </section>
  );
}
