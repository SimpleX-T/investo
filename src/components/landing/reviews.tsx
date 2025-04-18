import { motion } from "motion/react";
import { FaStar, FaBullseye } from "react-icons/fa";

export default function ReviewsSection() {
  return (
    <section className="py-12 w-full font-manrope text-text-dark">
      <motion.div
        className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto items-center gap-8 md:gap-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {/* Stat Block 1 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row items-center text-center">
            <div className="flex -space-x-4 mb-4">
              {["profile1", "profile2", "profile3"].map((img, idx) => (
                <div
                  key={idx}
                  className="w-12 h-12 rounded-full bg-secondary-100 border-2 border-white overflow-hidden"
                >
                  <img
                    src={`/images/${img}.png`}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <h3 className="text-3xl font-bold">120K+</h3>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            Our platform is the trusted choice for money transfers.
          </p>
        </motion.div>

        {/* Stat Block 2 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FaStar className="text-orange-400 text-4xl" />
            </motion.div>
            <h3 className="text-3xl font-bold">4.9</h3>
          </div>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Our high rating proves our platform's quality and positive global
            user impact.
          </p>
        </motion.div>

        {/* Stat Block 3 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FaBullseye className="text-green-500 text-4xl" />
            </motion.div>
            <h3 className="text-3xl font-bold">89+</h3>
          </div>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Our presence ensures reliable, efficient financial solutions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
