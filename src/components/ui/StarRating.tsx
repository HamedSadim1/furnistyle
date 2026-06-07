import { FaStar } from "react-icons/fa";
import { RATING_STARS } from "../../constants";

interface StarRatingProps {
  /** CSS class name for individual stars */
  starClassName?: string;
  /** Number of stars to display (default: 5) */
  count?: number;
}

const StarRating = ({ starClassName = "star-filled", count = RATING_STARS }: StarRatingProps) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <FaStar key={i} className={starClassName} />
      ))}
    </>
  );
};

export default StarRating;
