import { companyLogos } from "../../lib/constants";

export default function CompaniesSection() {
  return (
    <section className="pt-24 pb-12 w-full font-manrope">
      <div className="text-center text-2xl">
        <h3>Trusted by Over 5,500+ Industry Leaders</h3>

        <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-around w-full">
            {companyLogos[0].map((company, key) => (
              <img
                key={key}
                src={company.logo}
                alt={company.name}
                className="h-12 md:h-32"
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-12 -translate-y-1/2">
            {companyLogos[1].map((company, key) => (
              <img
                key={key}
                src={company.logo}
                alt={company.name}
                className="h-12 md:h-32"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
