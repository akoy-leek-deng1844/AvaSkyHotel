import { links, social } from "./Data";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4 className="location">Location</h4>
            <li>Ava sky plaza ,</li>
            <li>Keroka Town</li>
            <li>300m on DC road</li>
          </div>
          <div className="footer-col">
            <h4>Get help</h4>
            <ul>
              <li>
                <a target="_blank" href="https://wa.me/+254726833077">Enquries</a>
              </li>
              <li>
                <HashLink to ="/contact#contactForm" smooth>Online booking</HashLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick links</h4>
            <ul>
              {links.map((link) => {
                const { url, text, id } = link;
                return (
                  <li key={id}>
                    <Link className="footerLink" to={url}>
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow us on</h4>
            <div className="footer-media-icons">
              {social.map((link) => {
                const { url, icon, id } = link;
                return (
                  <li key={id}>
                    <a target="_blank" href={url}>
                      {icon}
                    </a>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p>
        Copyright &copy; Ava Sky Hotel {new Date().getFullYear()} | All rights
        reserved.
      </p>
    </footer>
  );
};
export default Footer;
