import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Pages/ContactPage/Contact.css";
import { toast } from "react-toastify";
const Form = () => {
  const form = useRef();
  const [isDisabled, setIsDisabled] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
setIsDisabled(true);
    emailjs
      .sendForm(
        "service_mnfd1t6",
        "template_k9vnchu",
        form.current,
        "BjJ0foUQVuyZWqMKg"
  
      )
      .then(
        () => {
          
          toast.success( "Message sent successfully");
          form.current.reset();
          
        },
        (error) => {
          toast.error(error);
        }
    )
      .finally(() => {
        setIsDisabled(false);
      });
  };
  const handleBtn = () => {
    setIsDisabled(true);
 }
  return (
    <form ref={form} onSubmit={sendEmail} autoComplete="true">
      <div className="name">
        <label htmlFor="name">Name</label>
        <input type="text" name="user_name" id="name" required />
      </div>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input type="email" name="user_email" id="email" required />
      </div>
      <div className="phone">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="user_phone"
          id="phone"
          pattern="[0-9]{10}"
          required
        />
      </div>
      <div className="event">
        <label htmlFor="event">Service of interest</label>
        <input
          type="text"
          name="service"
          id="event"
          placeholder="e.g. a conference meeting"
        />
      </div>
      <div className="message">
        <label htmlFor="msg">More service details</label>
        <textarea name="message" id="msg" placeholder="e.g size of guests" />
      </div>
      <button
        disabled={isDisabled}
        className="btn formBtn"
        type="submit"
        value="Send"
      >
        {isDisabled? "Sending...":"Send"}
      </button>
    </form>
  );
};
export default Form;
