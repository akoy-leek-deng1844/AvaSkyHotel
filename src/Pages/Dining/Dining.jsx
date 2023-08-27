import Menu from "../../Components/Menu";
import FoodSlider from "../../Components/FoodSlider";
import Meat from "../../Components/Meat";
import { HashLink as NavLink } from "react-router-hash-link";
import "../Conference/Conference.css";
import "./dining.css";
const Dining = () => {
  return (
    <div className="conferencePage">
      <div className="heroConference heroRestaurant"></div>
      <div className="our-desc hotel-desc">
        <h4>Ava Sky Restaurant</h4>
        <p>
          We take great pride in delivering exceptional service to our guests.
          Our team of highly skilled and friendly staff members is dedicated to
          ensuring that your dining experience is nothing short of
          extraordinary.
        </p>
        <NavLink to="/contact#contactPhone" smooth>
          Order a meal
        </NavLink>
      </div>
      <div className="conferenceContainer">
        <FoodSlider />
      </div>
      <div className="menu">
        <Meat />
        <Menu />
      </div>
      <div className="hotel-desc">
        <NavLink to="/contact#contactPhone" smooth>
          Order Now
        </NavLink>
      </div>
    </div>
  );
};
export default Dining;
