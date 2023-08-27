import Form from "../../Components/Form";
import { contacts, social } from "../../Components/Data";
const Contact = () => {
  return (
    <div className="conferencePage">
      <div className="heroConference contactConference">
        <h1>
          <span>R</span>each out to us..
        </h1>
      </div>
      <div className="our-desc hotel-desc">
        <h4>Contact us directly for any enquiries </h4>
        <p>
          Our contact page serves as a direct line of communication between you
          and our team. Whether you have a question, need assistance, want to
          make a reservation, or simply want to share your thoughts, we're ready
          to listen and respond promptly.
        </p>
        <div className="contact-socialLinks" id="contactForm">
          {social.map((link) => {
            const { url, icon, id } = link;
            return (
              <a key={id} href={url}>
                {icon}
              </a>
            );
          })}
        </div>
      </div>
      <div className="conferenceContainer">
        <Form />
      </div>
      <div className="contact-info" id="contactPhone">
        <article className="card ">
          {contacts.map((item) => {
            const { id, icon, hd4, text1, text2 } = item;
            return (
              <div key={id} className="card-child">
                <span>{icon}</span>
                <div className="call-info">
                  <h4>{hd4}</h4>
                  <p>{text1}</p>
                  <p>{text2}</p>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </div>
  );
}
export default Contact