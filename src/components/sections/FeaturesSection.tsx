import { FaStar, FaTruck, FaShieldAlt, FaCheck } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";
import { FEATURES } from "../../constants";

const featureIcons: Record<string, React.ReactNode> = {
  star: <FaStar />,
  truck: <FaTruck />,
  shield: <FaShieldAlt />,
};

const FeaturesSection = () => {
  return (
    <section className="section features-section">
      <SectionHeader
        tag="Why Choose Us"
        title="Everything You Need, Nothing You Don't"
        desc="We go the extra mile to make your shopping experience seamless and enjoyable."
      />
      <div className="features-grid-modern">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className={`feature-card-modern glass-card${f.featured ? " featured-card" : ""}`}
          >
            <div className={`feature-icon-wrapper${f.featured ? " featured-icon" : ""}`}>
              {featureIcons[f.iconType]}
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <ul className="feature-benefits">
              {f.benefits.map((b) => (
                <li key={b}>
                  <FaCheck /> {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
