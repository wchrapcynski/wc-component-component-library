import React from "react";
import "./App.scss";
import "./styles/common.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SectionCard from "./components/cards/sectioncard";

function App() {
  const websiteData = require("./data/data.json");
  const navbarItems = websiteData.tabs;
  const images = websiteData.images;
  return (
    <div className="App radius5">
      <div className="top">
        <Header navbarItems={navbarItems} title="Title" />
      </div>
      <div className="body">
        <SectionCard
          backgroundColorType="backgroundWhite2"
          cardColorType="backgroundWhite1"
          boxSize="boxSizeFullScreenMargin100"
          description="Home Section"
          sectionLocation="sectionTop">
          <img id="headshot" className="radius15" src={require(`./images/${images.bioimage}`)} alt="headshot" />
          <div id="description">

          </div>
        </SectionCard>
        <SectionCard
          backgroundColorType="backgroundWhite2"
          cardColorType="backgroundWhite1"
          boxSize="boxSizeFullScreenMargin100"
          description="About Section"
          id={navbarItems[0]}
          sectionLocation="sectionFull"
          toTop
        />
        <SectionCard
          backgroundColorType="backgroundWhite2"
          cardColorType="backgroundWhite1"
          boxSize="boxSizeFullScreenMargin100"
          description="Contact Section"
          id={navbarItems[1]}
          sectionLocation="sectionFull"
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
