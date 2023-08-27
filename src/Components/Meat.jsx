import { meat } from "./Data"
import { nanoid } from "nanoid";
const Menu = () => {
  return (
      <div>
          <div className="title">
              <h2>Our menu</h2>
              <div className="underline"></div>
          </div>
          <div className="meat-menu">
              <p className="text">Grab a Fresh, dry or deep fried meat with any accompaniment of your choice at Ava Sky restaurant today.</p>
              <div className="meat-category">
                  {meat.map((item) => {
                      const { id, title, pricing } = item;
                      return (
                          <div key={id} className="single-category">
                              <h4>{title}</h4>
                              {pricing.map((item) => {
                                  const { qty, price } = item;
                                  return (
                                    <article key={nanoid()}>
                                      <p>{qty}</p>
                                      <p>{price}</p>
                                    </article>
                                  );

                              })}
                          </div>
                      )
                  })}
              </div>
          </div>
    </div>
  )
} 
export default Menu