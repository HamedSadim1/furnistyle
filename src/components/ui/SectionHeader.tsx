interface SectionHeaderProps {
  /** Text displayed in the tag badge */
  tag: string;
  /** Main section title */
  title: string;
  /** Optional description paragraph */
  desc?: string;
  /** Optional additional styles for the container */
  style?: React.CSSProperties;
  /** Optional className for the container */
  className?: string;
}

const SectionHeader = ({ tag, title, desc, style, className }: SectionHeaderProps) => {
  return (
    <div className={`section-header${className ? ` ${className}` : ""}`} style={style}>
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
};

export default SectionHeader;
