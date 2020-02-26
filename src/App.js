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
  const text = websiteData.text;
  return (
    <div className="App radius5">
      <div className="top">
        <Header navbarItems={navbarItems} title="Title" />
      </div>
      <div className="body">
        <SectionCard
          cardColorType="backgroundWhite1"
          boxSize="boxSize500x1000"
          description="Home Section"
          margin="margin30">
          <img
            id="headshot"
            className="radius15"
            src={require(`./images/${images.bioimage}`)}
            alt="headshot"
          />
          <div id="description">{text.paragraph}</div>
        </SectionCard>
        <SectionCard
          cardColorType="backgroundWhite1"
          boxSize="boxSize500x1000"
          description="About Section"
          margin="margin30"
          padding="pad20"
          id={navbarItems[0]}
          toTop
        />
        <SectionCard
          cardColorType="backgroundWhite1"
          boxSize="boxSize500x1000"
          description="Contact Section"
          margin="margin30"
          padding="pad20"
          id={navbarItems[1]}
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
