import React from "react";
import "./App.scss";
import "./styles/common.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SectionCard from "./components/cards/sectioncard";
import FlipCardGallery from "./components/content/flipcardgallery";
import SocialMedia from "./components/icons/socialmedia";
import Intro from "./components/content/intro";
import Email from "./components/email/email";

function App() {
  const websiteData = require("./data/data.json");
  const navbarItems = websiteData.tabs;
  const images = websiteData.images;
  const text = websiteData.text;
  const flipcards = websiteData.flipCards;
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
            <Intro
              image={images.bioimage}
              text={text.paragraph}
              socialmedia={displaySocialMediaIcons}
            />
          </SectionCard>
        </div>
        <div className="mid-section">
          <SectionCard
            cardColorType="backgroundWhite1"
            description="Project Section"
            margin="margin30"
            padding="pad20"
            id={navbarItems[0]}
            toTop>
            <FlipCardGallery flipcards={flipcards} />
          </SectionCard>
        </div>
        <div className="bottom-section">
          <SectionCard
            cardColorType="backgroundWhite1"
            description="Contact Section"
            margin="margin30"
            padding="pad20"
            id={navbarItems[1]}
            toTop>
            <Email />
          </SectionCard>
        </div>
      </div>
      <div className="footer">
        <Footer footerText="This is the footer" />
      </div>
    </div>
  );
}

export default App;
