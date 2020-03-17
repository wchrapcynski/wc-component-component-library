import React from "react";
import "./footer.scss";

function Footer(props) {
  let currentTime = new Date();
	let year = currentTime.getFullYear();
  return (
    <div className="footer radius5-bottom">
      <div className="footer-text">{props.footerText}</div>
      <div className="footer-copyright">©{year} - {props.author}</div>
    </div>
  );
}

export default Footer;
