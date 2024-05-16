import './Footer.css';
import { RiFacebookBoxLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

export const Footer = () => {
  return (
    <div className="footer">
      <img src="./images/logo.png"></img>
      <h1>Hasia Restaurant</h1>
      <h5>Vietnam Restaurant & Sushi Bar</h5>
      <div className="row">
        <div className="col1">
          <h3>ADDRESS</h3>
          <p>Alfred-Arndt-Straße 1
            80807 Munich
            089 32988605</p>
        </div>
        <div className="col2">
          <h3>OPENING HOURS</h3>
          <p>open daily
          11.30 am - 2.30 pm
          5:30 p.m. -10:30 p.m.</p>
        </div>
      </div>
      <div className="icons">
        <RiFacebookBoxLine id="i1"></RiFacebookBoxLine>
        <IoLogoInstagram id="i1"></IoLogoInstagram>
        <FaXTwitter id="i1"></FaXTwitter>
        <CiLinkedin id="i1"></CiLinkedin>
      </div>
    </div>
  )
}
