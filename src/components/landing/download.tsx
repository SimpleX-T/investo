import { motion } from "motion/react";

const DownloadSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative font-manrope">
      <div className="bg-primary-100 w-full h-96 absolute bottom-0 left-0" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="md:h-[483px] flex items-center justify-center p-8 md:p-12 rounded-3xl border border-[#282D45] relative overflow-hidden bg-[#171717]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute w-full h-full z-0 pointer-events-none bg-[url('/images/rows.svg')] bg-cover bg-no-repeat opacity-50" />

          <motion.div
            className="text-center relative max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#F6F6F7] mb-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Download Our App Free and Enjoy Exclusive Features!
            </motion.h2>

            <motion.p
              className="text-primary-100 mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Enjoy seamless navigation, exclusive content, and personalized
              experiences right at your fingertips. Don't miss out on this
              opportunity to enhance your daily routine with our user-friendly,
              free mobile app.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row gap-4 mx-auto max-w-md justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.5,
                  },
                },
              }}
            >
              <motion.a
                href="#"
                className="flex items-center bg-white text-black rounded-xl px-5 py-3 w-[240px] md:w-[220px] mx-auto md:mx-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src="/icons/google_.svg"
                  alt="Google Play"
                  className="w-6 h-6 mr-3"
                />
                <div className="text-left">
                  <p className="text-xs leading-none">GET IT ON</p>
                  <p className="text-base font-semibold leading-tight">
                    Google Play
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="#"
                className="flex items-center bg-white text-black rounded-xl px-5 py-3 w-[240px] md:w-[220px] mx-auto md:mx-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <img
                  src="/icons/apple.svg"
                  alt="App Store"
                  className="w-6 h-6 mr-3"
                />
                <div className="text-left">
                  <p className="text-xs leading-none">Download on the</p>
                  <p className="text-base font-semibold leading-tight">
                    App Store
                  </p>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
