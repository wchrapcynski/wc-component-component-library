import React from "react";
import "./App.scss";
import "./styles/common.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SectionCard from "./components/cards/sectioncard";

function App() {
  const websiteData = require("./data/data.json");
  const navbarItems = websiteData.tabs;
  const displaySections = websiteData.sections.map((data, key) => {
    return (
      <SectionCard
        key={key}
        backgroundColorType="backgroundWhite2"
        cardColorType="backgroundWhite1"
        boxSize="boxSizeFullScreenMargin100"
        description={data.description}
        id={data.id}
        sectionLocation={key ? "sectionFull" : "sectionTop"}
        toTop={key}
      />
    );
  });

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
        {displaySections}
      </div>
      <div className="bottom">
        <Footer footerText="This is the footer" />
      </div>
    </div>
  );
}

export default App;
