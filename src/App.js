import React from "react";
import "./App.scss";
import "./styles/common.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SectionCard from "./components/cards/sectioncard";

function App() {
  const websiteData = require("./data/data.json");

  const navbarItems = websiteData.tabs;
  const sectionTitles = websiteData.sections;

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
          description={sectionTitles[0][0]}
          sectionLocation="sectionTop"
        />
        <SectionCard
          backgroundColorType="backgroundWhite1"
          cardColorType="backgroundWhite2"
          boxSize="boxSizeFullScreenMargin100"
          description={sectionTitles[1][0]}
          sectionLocation="sectionFull"
          id="About"
          toTop
        />
        <SectionCard
          backgroundColorType="backgroundWhite1"
          cardColorType="backgroundWhite2"
          boxSize="boxSizeFullScreenMargin100"
          description={sectionTitles[2][0]}
          sectionLocation="sectionFull"
          id="Contact"
          toTop
        />
      </div>
      <div className="bottom">
        <Footer footerText="This is the footer" />
      </div>
    </div>
  );
}

export default App;
