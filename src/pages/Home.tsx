import React from 'react';
import MenuComponent from '../components/MenuItems'
import '../App.css';


const HomePage: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <section id="intro">
          <div itemScope itemType="http://schema.org/WebPage">
            <div id="wrap-social">
              <MenuComponent></MenuComponent>
            </div>
          </div>
          <div className="wrap-content">
            <div className="wrap-description">
              <div className="cookie-banner">
                <p className="small-height">
                  <span style={{ color: "#3F51B5", fontFamily: "Source Code Pro" }}>
                    #Full-Stack and Application Developer
                  </span>
                </p>
              </div>
            </div>
            <h1 style={{ fontFamily: "Comfortaa" }} className="small">Hello<span className="dot-highlight">.</span></h1>
            <h2>I am<br />Donghyeok Tak</h2>
            <h5 style={{ fontFamily: "Source Code Pro" }}>
              I'm passionate about building software that makes our life beautiful.
            </h5>
          </div>
        </section>
      </header>
      <footer itemScope itemType="http://schema.org/WPFooter">
        <div className="wrap-social">
          <MenuComponent></MenuComponent>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
