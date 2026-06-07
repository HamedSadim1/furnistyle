import { BANNER_STATS } from "../../constants";

const StatsBanner = () => {
  return (
    <section className="stats-banner">
      <div className="stats-grid">
        {BANNER_STATS.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-number">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;
