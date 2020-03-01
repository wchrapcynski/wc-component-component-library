import React from "react";
import "./App.scss";
import "./styles/common.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SectionCard from "./components/cards/sectioncard";
import SocialMedia from "./components/icons/socialmedia";

function App() {
  const websiteData = require("./data/data.json");
  const navbarItems = websiteData.tabs;
  const images = websiteData.images;
  const text = websiteData.text;
  const displaySocialMediaIcons = websiteData.socialMediaIcons.map(
    (data, key) => {
      return <SocialMedia key={key} type={data.type} link={data.link} />;
    }
  );
  return (
    <div className="App radius5">
      <div className="header">
        <Header navbarItems={navbarItems} title="Title" />
      </div>
      <div className="body">
        <div className="top-section">
          <SectionCard
            cardColorType="backgroundWhite1"
            description="Home Section"
            margin="margin30">
            <div className="headshot radius15">
              <img
                className="radius15"
                src={require(`./images/${images.bioimage}`)}
                alt="headshot"
              />
            </div>
            <div className="description">{text.paragraph}</div>
            <div className="social-media-icons">{displaySocialMediaIcons}</div>
          </SectionCard>
        </div>
        <div className="mid-section">
          <SectionCard
            cardColorType="backgroundWhite1"
            description="About Section"
            margin="margin30"
            padding="pad20"
            id={navbarItems[0]}
            toTop
          />
        </div>
        <div className="bottom-section">
          <SectionCard
            cardColorType="backgroundWhite1"
            description="Contact Section"
            margin="margin30"
            padding="pad20"
            id={navbarItems[1]}
            toTop
          />
        </div>
      </div>
      <div className="footer">
        <Footer footerText="This is the footer" />
      </div>
    </div>
  );
}

export default App;
