import React from "react";
import "./App.css";
import Header from "./components/header/header";

function App() {
  const navbarItems = ["Home", "About", "Contact"];

  function navbarOnClickHandle(event) {
    let navbarTabs = document.querySelectorAll(".navbarTab");
    for(let i = 0; i < navbarTabs.length; i++) {
      navbarTabs[i].classList.remove("secondary-tab");
      navbarTabs[i].classList.add("primary-tab");
    }
    event.target.classList.remove("primary-tab")
    event.target.classList.add("secondary-tab")
  }

  return (
    <div className="App">
      <Header navbarItems={navbarItems} onClickHandle={navbarOnClickHandle} />
    </div>
  );
}

export default App;
