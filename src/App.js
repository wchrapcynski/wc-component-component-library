import React from "react";
import "./App.css";
import Header from "./components/header/header";

function App() {
  const navbarItems = ["Home", "About", "Contact"];

  function navbarOnClickHandle(event) {
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
