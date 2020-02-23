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
    console.log(data)
    return (
      <SectionCard
        key={key}
        backgroundColorType="backgroundWhite1"
        cardColorType="backgroundWhite2"
        boxSize="boxSizeFullScreenMargin100"
        description={data[0]}
        id={data[1]}
        sectionLocation="sectionTop"
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
