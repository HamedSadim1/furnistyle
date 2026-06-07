import { FaHeart, FaUsers, FaAward, FaLeaf } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";
import { VALUES } from "../../constants";

const valueIcons: Record<string, React.ReactNode> = {
  heart: <FaHeart />,
  users: <FaUsers />,
  award: <FaAward />,
  leaf: <FaLeaf />,
};

const ValuesSection = () => {
  return (
    <section className="section">
      <SectionHeader
        tag="Our Values"
        title="What Drives Us Forward"
        desc="Every decision we make is guided by these core principles."
      />
      <div className="about-values-grid">
        {VALUES.map((v) => (
          <div
            key={v.title}
            className="about-value-card glass-card"
            style={{ "--accent": v.color } as React.CSSProperties}
          >
            <div
              className="about-value-icon"
              style={{ background: `${v.color}15`, color: v.color }}
            >
              {valueIcons[v.iconType]}
            </div>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
