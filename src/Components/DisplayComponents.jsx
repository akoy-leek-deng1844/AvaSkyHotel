import { displays } from "./Data"
import { NavLink } from "react-router-dom";
const DisplayComponents = () => {
  return (
      <div className="displayContainer">
          {displays.map((display) => {
              const { hd1, image, id, text1, text2, text3, text4, button, hd3,url } = display;
              return (
                <section className="hotel2" key={id}>
                  <h1>{hd1}</h1>
                  <article>
                    <p>{text1}</p>
                    <p>{text2}</p>
                  </article>
                  <div className="display dinning">
                    <div className="hotel-pictures three-hotel-pictures">
                      <figure>
                        <img src={image} alt="restaurant" />
                      </figure>
                    </div>
                    <div className="hotel-desc">
                      <h3>{hd3}</h3>
                      <p>{text3} </p>
                      <p>{text4}</p>
                      <NavLink to ={url}> {button}</NavLink>
                    </div>
                  </div>
                </section>
              );
        })}  
    </div>
  )
}
export default DisplayComponents