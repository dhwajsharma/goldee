import React from "react";
import Header from "../Header/Header";
import "./ContactUs.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <Header />
      <div className="contactUs__container">
        <div className="contactUs__details">
          <PhoneIcon />
          <a href="tel:+91 9307997953" rel="noreferrer" target="_blank">
            +91 9307997953
          </a>
        </div>
        <div className="contactUs__details">
          <EmailIcon />
          <a
            href="mailto:ritishjaiswal20@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            ritishjaiswal20@gmail.com
          </a>
        </div>
        <div className="contactUs__details">
          <FacebookIcon />
          <a
            href="https://www.facebook.com/goldee.travels.9"
            rel="noreferrer"
            target="_blank"
          >
            facebook
          </a>
        </div>
        <div className="contactUs__details">
          <InstagramIcon />
          <a
            href="https://www.instagram.com/ritishjaiswal20/"
            rel="noreferrer"
            target="_blank"
          >
            instagram
          </a>
        </div>
        <div className="contactUs__details">
          <YouTubeIcon />
          <a
            href="https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw"
            rel="noreferrer"
            target="_blank"
          >
            youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
