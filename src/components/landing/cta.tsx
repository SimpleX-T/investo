import { FaCheck } from "react-icons/fa6";
import { companyCard, CTASteps } from "../../lib/constants";

export default function CTASection() {
  return (
    <section className="py-10 w-full font-manrope">
      <div className="flex w-full max-w-7xl mx-auto items-end justify-between space-y-32 md:space-y-0 flex-col md:flex-row mb-32">
        <div className="w-full md:w-1/2">
          <div className="text-center px-4 md:p-0 mb-12 md:text-left">
            <h2 className="font-bold text-[32px] leading-16 md:text-5xl mb-4">
              Let’s Start Sending Your Money
            </h2>
            <p className="text-[14px] md:text-md md:w-[48ch] px-4 md:p-0">
              y integrating advanced technologies, fintech reshapes the
              financial landscape, making it more user-friendly and adaptive to
              modern needs.
            </p>
          </div>

          <div className="px-2 space-y-10">
            {CTASteps.map((step, key) => (
              <div
                className="grid grid-cols-[44px_1fr] md:grid-cols-[52px_1fr] gap-2 md:gap-4"
                key={key}
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
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-end justify-center">
          <div className="w-[327px] h-[271px] md:w-[576px] md:h-[478px] rounded-xl bg-primary-100 flex items-end justify-center">
            <img
              src="/images/cta_phone.svg"
              alt="iphone"
              className="h-[130%]"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-7xl mx-auto items-end justify-between space-y-24 md:space-y-0 flex-col md:flex-row">
        <div className="w-full md:w-[60%] flex items-end justify-start">
          <div className="w-full md:w-[568px] md:h-[400px] rounded-xl bg-primary-100 flex flex-col py-8 px-4 space-y-3 justify-center">
            {companyCard.map((company, key) => (
              <div
                key={key}
                className="flex items-center bg-white rounded-3xl p-2 pl-4 gap-4 w-full h-24"
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
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[40%]">
          <div className="px-4 md:p-0 mb-6 text-left">
            <h2 className="font-bold text-[32px] md:text-5xl mb-4">
              Transforming Transactions, One Click at a Time.
            </h2>
            <p className="text-[14px] md:text-md md:w-[50ch] px-4 md:p-0">
              Our service is designed to connect the world, offering reliable
              and accessible financial solutions to everyone, everywhere.
            </p>
          </div>

          <div className="px-4 md:p-0">
            <div className="mb-12 space-y-4">
              <div className="flex items-center gap-4">
                <span className="bg-gray-100 p-2 rounded-full flex items-center justify-center">
                  <FaCheck />
                </span>
                <p className="text-sm">
                  Track transfers with real-time notifications.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-gray-100 p-2 rounded-full flex items-center justify-center">
                  <FaCheck />
                </span>
                <p className="text-sm">
                  Instant transactions, real-time updates.
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
      </div>
    </section>
  );
}
