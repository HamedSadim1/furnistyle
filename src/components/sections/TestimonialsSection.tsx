import { FaQuoteLeft } from "react-icons/fa";
import StarRating from "../ui/StarRating";
import SectionHeader from "../ui/SectionHeader";
import { TESTIMONIALS } from "../../constants";

const TestimonialsSection = () => {
  return (
    <section className="section testimonials-section">
      <SectionHeader
        tag="Testimonials"
        title="What Our Customers Say"
        desc="Real stories from real people who transformed their homes with us."
      />
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div key={t.author} className="testimonial-card glass-card">
            <div className="testimonial-stars">
              <StarRating starClassName="star-filled" />
            </div>
            <FaQuoteLeft className="testimonial-quote" />
            <p>"{t.quote}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.initials}</div>
              <div className="testimonial-info">
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
