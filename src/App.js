import React from "react";
import "./App.scss";
import "./styles/common.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  const websiteData = require("./data/data.json");

  const navbarItems = websiteData.pages;

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
        <div className="Home">
          <div className="bubble1 radius15">
            <div>Home Section</div>
          </div>
        </div>
        <div className="About" id="About">
          <div className="bubble2 radius15">
            <div>About Section</div>
            <div>
              <a href="#Home">To Top</a>
            </div>
          </div>
        </div>
        <div className="Contact" id="Contact">
          <div className="bubble1 radius15">
            <div>Contact Section</div>
            <div>
              <a href="#Home">To Top</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </div>
  );
}

export default App;
