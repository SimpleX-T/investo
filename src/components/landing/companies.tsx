import { companyLogos } from "../../lib/constants";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function CompaniesSection() {
  return (
    <section className="pt-24 pb-12 w-full font-manrope">
      <motion.div
        className="text-center text-2xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h3>Trusted by Over 5,500+ Industry Leaders</h3>
      </motion.div>

      <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
        <motion.div
          className="flex items-center justify-around w-full"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companyLogos[0].map((company, key) => (
            <motion.img
              key={key}
              src={company.logo}
              alt={company.name}
              className="h-12 md:h-32"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={key}
            />
          ))}
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-12 -translate-y-1/2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companyLogos[1].map((company, key) => (
            <motion.img
              key={key}
              src={company.logo}
              alt={company.name}
              className="h-12 md:h-32"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={key} // Apply delay based on the index
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
