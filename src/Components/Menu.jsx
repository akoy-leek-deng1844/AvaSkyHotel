import { mainMenu } from "./Data"

import { nanoid } from "nanoid";
const Menu = () => {
    return (
        <div className="menuItems">
          {mainMenu.map((item) => {
            const { title, foods } = item;
            return (
              <section key={nanoid()} className="menuSection">
                <h3>{title}</h3>
                <div>
                  {foods.map((item) => {
                    const { food, price } = item;
                    return (
                      <article key={nanoid()}>
                        <p>{food}</p>
                        <p>{price}</p>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      
    );
}
export default Menu