import RoomsDisplay from "../../Components/RoomsDisplay";
import "./Accomodation.css";
const Accomdation = () => {
  return (
    <div className="conferencePage">
      <div className=" roomHero">
        <h1>
          <span>S</span>pend your night here...
        </h1>
      </div>
      <div className="our-desc hotel-desc">
        <h4>Accomodation and lodging</h4>
        <p>
          To make your stay even more enjoyable, we offer a range of services
          and facilities. Start your day with a delicious breakfast served in
          our charming dining area or enjoy the convenience of in-room dining.
          <br />
          <span className="tilNo">Mpesa Til no. 9748413</span>
        </p>
      </div>
      <RoomsDisplay />
    </div>
  );
}
export default Accomdation