import { Component } from "react";
import React from "react";

class MenuComponent extends Component {
    render() {
      return <ul>
        <li><a href="./about" target="_blank" rel="noopener noreferrer">About Me</a></li>
        <li><a href="https://github.com/tdh8316" target="_blank" rel="noopener noreferrer">Github</a></li>
        <li><a href="mailto:tdh8316@naver.com">Mail</a></li>
        <li><a href="./projects" target="_blank" rel="noopener noreferrer">Projects</a></li>
        <li><a href="./" target="_blank" rel="noopener noreferrer">Home</a></li>
      </ul>
    }
  }

  export default MenuComponent