import ConferenceSlider from "../../Components/ConferenceSlider";
import "./conference.css"
import { HashLink as NavLink } from "react-router-hash-link";
const Conference = () => {
  return (
    <div className="conferencePage">
      <div className="heroConference">
        <h1>
          <span>O</span>rganize your event with us..
        </h1>
      </div>
      <div className="our-desc hotel-desc">
        <h4>Conferences, events & meetings</h4>
        <p>
          To enhance your event further, we offer a range of additional services
          and amenities. These may include on-site catering options, providing
          delicious meals, snacks, and beverages tailored to your preferences.
          Our pricing range from as low as kshs. 10,000 for a full day and kshs.
          5,000 half day, not including any additional services. <br />
          <span className="tilNo">Mpesa Til no. 9748413</span>
        </p>

        <NavLink to="/contact#contactForm" smooth>
          Book Appointment
        </NavLink>
      </div>
      <div className="conferenceContainer">
        <ConferenceSlider />
      </div>
    </div>
  );
}
export default Conference