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
            <h1 style={{ fontFamily: "Comfortaa" }} className="small">Hello<span className="dot-highlight">.</span></h1>
            <h2>I am<br />Donghyeok Tak</h2>
            <h4>
              Student<br />
              Full-Stack Developer<br />
              Mobile Developer<br />
              Desktop Application Developer<br />
            </h4>
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
}

export default HomePage;
