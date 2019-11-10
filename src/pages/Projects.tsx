import React from 'react';
import '../App.css';
import MenuComponent from '../components/MenuItems';


const ProjectsPage: React.FC = () => {
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
            <h1 style={{ fontFamily: "Comfortaa" }} className="small">Projects</h1>
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

export default ProjectsPage;
