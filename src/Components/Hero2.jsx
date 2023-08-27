import { services } from "./Data"
const Hero2 = () => {
  return (
    <section className="leeks">
      <div className="engineer">
        <h1>
          Welcome to Ava <br /> Sky Hotel
        </h1>
        <article>
          <p>
            Experience true hospitality and make lasting memories at our hotel.
            Book your stay with us today and let us be your home away from home
            in Kisii. We look forward to welcoming you and providing you
            with a memorable stay.
          </p>
        </article>
      </div>
      <div className="service-centre">
        <h1>Our services</h1>
        <div className="our-services">
          {services.map((service) => {
            const { icon, text, id } = service;
            return (
              <div className="service" key={id}>
                {icon}
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Hero2