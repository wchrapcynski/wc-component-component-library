import React from "react";
import "./App.scss";
import "./styles/common.scss"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  const websiteData = require("./data/data.json");

  const navbarItems = websiteData.pages;
  let navbarTabs = [];

  function navbarOnClickHandle(event) {
   
  }

  return (
    <div className="App radius5">
      <div className="top">
        <Header
          navbarItems={navbarItems}
          onClickHandle={navbarOnClickHandle}
          title="Title"
        />
      </div>
      <div className="middle">
        <div className="Home">
          Home Section
        </div>
        <div className="About" id="About">
          About Section
        </div>
        <div className="Contact" id="Contact">
          Contact Section
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </div>
  );
}

export default App;
