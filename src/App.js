import React from "react";
import "./App.scss";
import "./styles/common.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SectionCard from "./components/cards/sectioncard";

function App() {
  const websiteData = require("./data/data.json");

  const navbarItems = websiteData.pages;

  function navbarOnClickHandle(event) {}

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
        <SectionCard
          backgroundColorType="backgroundWhite1"
          cardColorType="backgroundWhite2"
          boxSize="boxSizeFullScreenMargin100"
          description="Home Section"
          sectionLocation="sectionTop"
        />
        <SectionCard
          backgroundColorType="backgroundWhite2"
          cardColorType="backgroundWhite1"
          boxSize="boxSizeFullScreenMargin100"
          description="About Section"
          sectionLocation="sectionFull"
          id="About"
        />
        <SectionCard
          backgroundColorType="backgroundWhite1"
          cardColorType="backgroundWhite2"
          boxSize="boxSizeFullScreenMargin100"
          description="Contact Section"
          sectionLocation="sectionFull"
          id="Contact"
        />
      </div>
      <div className="bottom">
        <Footer footerText="This is the footer" />
      </div>
    </div>
  );
}

export default App;
