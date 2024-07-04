import '../../App.css';
import Fb from '../../assets/Fb';
import Twitter from '../../assets/Twitter';
import Linkedin from '../../assets/Linkedin';
import Instagram from '../../assets/Instagram';
const Footer = () => {
  return (
    <div>
      <ul className="footer_ul">
        <li>
          <h2>Logo</h2>
          <ul className="child1_ul">
            <li>Call or text:12345</li>
            <li>Email: company@gmail</li>
            <li>
              <ul className="icons">
                <li>
                  <Fb />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <Linkedin />
                </li>
                <li>
                  <Instagram />
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h2>Quick links</h2>
          <ul className="child1_ul">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
        </li>
        <li>
          <h2>Others</h2>
          <ul className="child1_ul">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
        </li>
        <li>
          <h2>Others</h2>
          <ul className="child1_ul">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
        </li>
        <li>
          <h2>Address</h2>
          <ul className="child1_ul">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
        </li>
      </ul>
      <b>© Copyright 2022 by DPI_MEDIA - All right reserved.</b>
    </div>
  );
};

export default Footer;
