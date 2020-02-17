import React from "react";
import "./App.css";
import Header from "./components/header/header";

function App() {
  const websiteData = require("./data/data.json");

  const navbarItems = websiteData.pages;
  let navbarTabs = [];

  function navbarOnClickHandle(event) {
    // This code changes color of button to follow which is active
    navbarTabs = document.getElementsByClassName("navbarTab");
    for (let i = 0; i < navbarTabs.length; i++) {
      navbarTabs[i].classList.remove("secondary-tab");
      navbarTabs[i].classList.add("primary-tab");
    }
    event.target.classList.remove("primary-tab");
    event.target.classList.add("secondary-tab");
  }

  return (
      <div className="App">
        <Header
          navbarItems={navbarItems}
          onClickHandle={navbarOnClickHandle}
          title="Title"
        />
      </div>
  );
}

export default App;
