import { Component } from "react";
import React from "react";

class MenuComponent extends Component {
  render() {
    return <ul>
      <li><a href="./about" target="_self" rel="noopener noreferrer">
        <span style={{ color: "#3F51B5" }}>About Me</span>
      </a></li>
      <li><a href="https://github.com/tdh8316" target="_blank" rel="noopener noreferrer">
        <span style={{ color: "#3F51B5" }}>Github</span>
      </a></li>
      <li><a href="mailto:tdh8316@naver.com">
        <span style={{ color: "#3F51B5" }}>Mail</span>
      </a></li>
      <li><a href="./projects" target="_self" rel="noopener noreferrer">
        <span style={{ color: "#3F51B5" }}>Projects</span>
      </a></li>
      <li><a href="./" target="_self" rel="noopener noreferrer">
        <span style={{ color: "#3F51B5" }}>Home</span>
      </a></li>
    </ul>
  }
}

export default MenuComponent