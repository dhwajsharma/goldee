import React from "react";
import "./Announcement.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="announcement__contents">
        <EmailIcon />
        <span> ritishjaiswal20@gmail.com </span>
        <PhoneIcon /> <span>+91 9307997953</span>
        <FacebookIcon /> <span>facebook</span>
        <InstagramIcon /> <span>instagram</span>
        <YouTubeIcon /> <span>youtube</span>
      </div>
    </div>
  );
};

export default Announcement;
