import React from 'react';
import '../App.css';
import MenuComponent from '../components/MenuItems';


const AboutPage: React.FC = () => {
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
            <h1 style={{ fontFamily: "Comfortaa" }} className="small">About</h1>
            <h2>Donghyeok Tak</h2>
          </div>
          <h4>
            I'm a 16-year-old student<br />And I love what I do<span className="dot-highlight">.</span>
          </h4>
        </section>
      </header>

      <section id="intro">
        <h4 style={{ textAlign: "center" }}>I have done work with<br></br></h4>
        <h5 style={{ textAlign: "center", fontSize: 32}}>arduino, flutter, react, unity, unreal engine, visual studio, pycharm.</h5>
        <div className="grid-container">
          <div className="grid-item">
            <h4><span style={{ color: "#cccccc" }}>01.</span> <b>Mobile</b></h4>
            <p>I can make elegant Android and iOS application with Kotlin or flutter, which is cross-platform!</p>
          </div>
          <div className="grid-item">
            <h4><span style={{ color: "#cccccc" }}>02.</span> <b>Desktop</b></h4>
            <p>
              Python is my favorite and most used language.<br />
              And I can make anything I want with Go, C, C#, C++, Kotlin, Typescript and more!
            </p>
          </div>
          <div className="grid-item">
            <h4><span style={{ color: "#cccccc" }}>03.</span> <b>Embedded</b></h4>
            <p>
              I have used some microcontroller units, such as Arduino, BBC micro:bit and Raspberry Pi.
            </p>
          </div>
        </div>
      </section>

      <footer itemScope itemType="http://schema.org/WPFooter">
        <div className="wrap-social">
          <MenuComponent></MenuComponent>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
