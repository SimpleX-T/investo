import { FaStar, FaBullseye } from "react-icons/fa"; // Importing Font Awesome icons

export default function ReviewsSection() {
  return (
    <section className="py-12 w-full font-manrope text-text-dark">
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto items-center gap-8 md:gap-12 px-4">
        <div>
          <div className="flex flex-col md:flex-row items-center text-center">
            <div className="flex -space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary-100 border-2 border-white overflow-hidden">
                <img
                  src="/images/profile1.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary-100 border-2 border-white overflow-hidden">
                <img
                  src="/images/profile2.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary-100 border-2 border-white overflow-hidden">
                <img
                  src="/images/profile3.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-3xl font-bold">120K+</h3>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            Our platform is the trusted choice for money transfers.
          </p>
        </div>

        <div>
          <div className="flex flex-col md:flex-row gap-4 items-center text-center">
            <FaStar className="text-orange-400 text-4xl" />
            <h3 className="text-3xl font-bold">4.9</h3>
          </div>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Our high rating proves our platform's quality and positive global
            user impact.
          </p>
        </div>

        <div>
          <div className="flex flex-col md:flex-row gap-4 items-center text-center">
            <FaBullseye className="text-green-500 text-4xl" />
            <h3 className="text-3xl font-bold">89+</h3>
          </div>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Our presence ensures reliable, efficient financial solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
