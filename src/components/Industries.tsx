import villaImage from "@/assets/industry-villa.jpg";
import facadeImage from "@/assets/industry-facade.jpg";
import solarImage from "@/assets/industry-solar.jpg";
import advertisingImage from "@/assets/industry-advertising.jpg";
import shoppingImage from "@/assets/industry-shopping.jpg";
import windImage from "@/assets/industry-wind.jpg";

const industries = [
  {
    title: "High-Rise Buildings",
    description: "Commercial facade cleaning without scaffolding or swing stages",
    image: facadeImage,
    alt: "High-rise commercial building facade cleaning"
  },
  {
    title: "Solar Installations",
    description: "Panel maintenance without surface contact or efficiency loss",
    image: solarImage,
    alt: "Solar panel farm maintenance"
  },
  {
    title: "Residential Properties",
    description: "Premium villa exterior cleaning with zero accessibility issues",
    image: villaImage,
    alt: "Luxury residential exterior cleaning"
  },
  {
    title: "Outdoor Advertising",
    description: "Billboard maintenance without traffic disruption or crane rental",
    image: advertisingImage,
    alt: "Billboard and signage cleaning"
  },
  {
    title: "Retail Complexes",
    description: "Shopping center facade maintenance during operating hours",
    image: shoppingImage,
    alt: "Retail complex exterior cleaning"
  },
  {
    title: "Wind Energy",
    description: "Turbine blade cleaning without shutdown downtime",
    image: windImage,
    alt: "Wind turbine maintenance"
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4">APPLICATIONS</div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Commercial Cleaning Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Deployed across multiple industries for professional cleaning operations requiring precision, safety, and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div key={industry.title} className="group relative overflow-hidden bg-muted rounded-sm border border-border hover:border-foreground/20 transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{industry.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
