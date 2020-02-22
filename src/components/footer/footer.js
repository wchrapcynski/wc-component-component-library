import React from "react";
import './footer.scss'

function Footer(props) {
  return (
  <div className="footer radius5-bottom">{props.footerText}</div>
  )
}

export default Footer;
