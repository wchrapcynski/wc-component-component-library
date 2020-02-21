import React from "react";
import './footer.scss'

function Footer(props) {
  return (
  <div className="footer radius5-bottom">{props.text}</div>
  )
}

export default Footer;
