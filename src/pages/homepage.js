import React from "react";
import { Redirect } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Redirect to="/" />
      This is the Home Page
    </div>
  );
}

export default HomePage;
