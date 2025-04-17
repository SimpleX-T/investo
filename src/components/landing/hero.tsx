export default function HeroSection() {
  return (
    <section
      className="pt-32 px-4 md:px-8 relative overflow-hidden h-screen md:min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px,transparent 0)",
        WebkitBackgroundSize: "4rem 4rem",
        backgroundSize: "4rem 4rem",
        backgroundPosition: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        <div className="text-center mb-12 py-12">
          <div className="rounded-full bg-gray flex items-center gap-2 w-fit pr-3 p-1 mx-auto text-secondary font-manrope">
            <span className="rounded-full bg-white p-1">
              <img src="/icons/hero_shield.svg" alt="shield" />
            </span>
            <span className="text-sm md:text-md font-medium">
              Smart Finance, Smart Living
            </span>
          </div>

          <div className="mt-6 max-w-4xl mx-auto">
            <h1 className="text-[32px] md:text-[54px] font-bold mb-4 leading-10 md:leading-15 font-manrope text-center">
              Revolutionizing Finance for a Better Tomorrow, Today
            </h1>
            <div className="w-full max-w-md mx-auto font-inter">
              <p className="text-[14px] px-2 md:p-0 md:text-md">
                Fintech services leverage technology to enhance financial
                processes, offering innovative solutions for banking
              </p>
            </div>
          </div>

          <div className="flex items-center md:p-4 w-full max-w-sm mx-auto md:justify-between justify-center mt-6 font-manrope font-medium gap-4 md:gap-0">
            <button className="cursor-pointer hover:bg-yellow/60 transition-colors duration-300 bg-yellow px-6 md:px-8 py-[14px] text-md text-text-dark rounded-full shadow">
              Get Started
            </button>
            <button className="cursor-pointer hover:bg-blue/60 transition-colors duration-300 bg-blue px-8 py-[14px] text-md text-text-light rounded-full shadow">
              Request a demo
            </button>
          </div>
        </div>

        <div className="w-full max-w-4xl flex items-end justify-center mx-auto relative mt-auto">
          <img
            src="/images/desktop_hero-phone.svg"
            alt="iphone"
            className="hidden md:block"
          />
          <img
            src="/images/mobile_hero-phone.svg"
            alt="iphone"
            className="md:hidden"
          />
          <img
            src="/images/hero_chat.svg"
            alt="iphone"
            className="absolute min-w-[600px] -top-2 left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
}
