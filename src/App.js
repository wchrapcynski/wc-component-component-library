import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
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
    <BrowserRouter>
      <div className="App">
        <Header
          navbarItems={navbarItems}
          onClickHandle={navbarOnClickHandle}
          title="Title"
        />
        <Route path="/" exact component={HomePage} />
        <Route path="/Home" exact component={HomePage} />
        <Route path="/About" exact component={AboutPage} />
        <Route path="/Contact" exact component={ContactPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
