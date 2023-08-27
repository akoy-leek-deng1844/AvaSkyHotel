import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { foodSamples } from "./Data";
import { nanoid } from "nanoid";
const FoodSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="FoodSlide">
      <Slider {...settings}>
        {foodSamples.map((item) => {
          return <img key={nanoid()} src={item} alt="food-sample" />;
        })}
      </Slider>
    </div>
  );
};
export default FoodSlider;
