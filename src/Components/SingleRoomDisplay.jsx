import { roomDisplays } from "./Data"
import { HashLink as NavLink } from "react-router-hash-link";
const SingleRoomDisplay = () => {
  return (
    <div className="room-types">
      {roomDisplays.map((room) => {
        const { id, image, hd3, text1, text2, hd4 } = room;
        return (
          <div className="room" key={id}>
            <div className="roomPic">
              <figure>
                <img src={image} alt="room" />
              </figure>
            </div>
            <div className="hotel-desc hrd">
              <div>
                <h3>{hd3}</h3>
                <p className="room-details">{text1}</p>
                <p>{text2}</p>
              </div>
              <div className="roomPr">
                <h4>Rate: {hd4}</h4>
                <NavLink to="/contact#contactPhone" smooth>Call for booking</NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default SingleRoomDisplay