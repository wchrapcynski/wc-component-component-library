import React, { useState } from "react";
import "./App.scss";
import "./styles/common.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SectionCard from "./components/cards/sectioncard";
import FlipCardGallery from "./components/content/flipcardgallery";
import SocialMedia from "./components/icons/socialmedia";
import Intro from "./components/content/intro";
import EmailForm from "./components/forms/emailform";

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formSent, setFormSent] = useState(false);

  const onChangeHandler = event => {
    event.persist();
    const formValue = event.target.value;
    setFormData(previousState => {
      return { ...previousState, [event.target.name]: formValue };
    });
  };

  const onClickHandlerSend = () => {
    if (formSent === true) {
      setFormSent(false);
      setFormData('');
    } else {
      setFormSent(true);
    }
  };

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
            <div className="form-contact">
              <div className="form-component">
                <EmailForm
                  onChangeHandle={onChangeHandler}
                  onClickHandle={onClickHandlerSend}
                />
              </div>
              <div
                className={formSent ? "form-message" : "form-message hidden"}>
                <p>
                  <strong>Response Message:</strong>
                </p>
                <p>This is only test data. Click 'Submit' again to reset.</p>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Message: {formData.message}</p>
              </div>
            </div>
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
