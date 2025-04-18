import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa6";
import { companyCard, CTASteps } from "../../lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CTASection() {
  return (
    <section className="py-10 w-full font-manrope">
      <motion.div
        className="flex w-full max-w-7xl mx-auto items-end justify-between space-y-32 md:space-y-0 flex-col md:flex-row mb-32"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-full md:w-1/2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center px-6 md:p-0 mb-12 md:text-left">
            <h2 className="font-bold text-3xl md:text-5xl mb-4 text-center md:text-left md:pr-40">
              Let&apos;s Start Sending Your Money
            </h2>
            <p className="text-[14px] md:text-md text-center md:text-left px-3 md:px-0 md:pr-40">
              By integrating advanced technologies, fintech reshapes the
              financial landscape, making it more user-friendly and adaptive to
              modern needs.
            </p>
          </div>

          <div className="pl-6 md:px-2 space-y-10">
            {CTASteps.map((step, key) => (
              <motion.div
                className="grid grid-cols-[44px_1fr] md:grid-cols-[52px_1fr] gap-2 md:gap-4"
                key={key}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.2, delay: key * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-100 p-2 rounded-md flex items-center justify-center w-full h-11 md:h-13 flex-1/2">
                  <img src={step.icon} alt={step.title} />
                </div>
                <div className="w-full">
                  <h3 className="font-semibold text-xl md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-[14px] md:text-md text-text-gray w-[31ch]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex items-end justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-[327px] h-[271px] md:w-[576px] md:h-[478px] rounded-xl bg-primary-100 flex items-end justify-center">
            <img
              src="/images/cta_phone.svg"
              alt="iphone"
              className="h-[130%]"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex w-full max-w-7xl mx-auto items-end justify-between space-y-24 md:space-y-0 flex-col md:flex-row"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-full md:w-[60%] flex items-end justify-start">
          <div className="w-full md:w-[568px] md:h-[400px] rounded-xl bg-primary-100 flex flex-col py-8 px-6 space-y-3 justify-center">
            {companyCard.map((company, key) => (
              <motion.div
                key={key}
                className="flex items-center bg-white rounded-3xl p-2 pl-4 gap-4 w-full h-24"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="p-2 h-10 w-10 rounded-xl flex items-center justify-center bg-primary-100">
                  <img
                    src={company.icon}
                    alt={company.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="mr-auto">
                  <h3 className="font-semibold text-xl md:text-2xl">
                    {company.title}
                  </h3>
                  <p className="text-[14px] md:text-md text-text-gray">
                    {company.details}
                  </p>
                </div>
                <div className="mr-2">
                  <p className="font-semibold text-xs">{company.amount}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="w-full md:w-[40%]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="px-6 md:p-0 mb-6 text-left">
            <h2 className="font-bold text-3xl md:text-5xl mb-4 text-center md:text-left">
              Transforming Transactions, One Click at a Time.
            </h2>
            <p className="text-sm md:text-md text-center md:text-left px-3 md:px-0 md:pr-40">
              Our service is designed to connect the world, offering reliable
              and accessible financial solutions to everyone, everywhere.
            </p>
          </div>

          <div className="px-6 md:p-0">
            <div className="mb-12 space-y-2">
              {[
                "Track transfers with real-time notifications.",
                "Instant transactions, real-time updates.",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="bg-gray-100 p-2 rounded-full flex items-center justify-center">
                    <FaCheck />
                  </span>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <button className="bg-secondary rounded-full text-primary py-3 px-6 cursor-pointer hover:bg-secondary/80 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
