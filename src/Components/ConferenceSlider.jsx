import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { conferenceImages } from "./Data";
import { nanoid } from "nanoid";
const ConferenceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };
  return (
    <div className="conferenceSlide">
      <Slider {...settings}>
        {conferenceImages.map((item) => {
          return <img key={nanoid()} src={item} alt="conference-room" />;
        })}
      </Slider>
    </div>
  );
};
export default ConferenceSlider;
