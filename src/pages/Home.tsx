import CSS from "csstype";
import React from "react";
import { Motion, spring } from "react-motion";
import { StickyContainer, Sticky } from "react-sticky";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, Form } from "react-bootstrap";
import "../index.css";
import "../App.css";

const menuStyle: CSS.Properties = {
  marginTop: "-16px"
};
const headerStyle: CSS.Properties = {
  color: "#151515",
  fontWeight: 200
};
const arrowButtonStyle: CSS.Properties = {
  backgroundColor: "transparent",
  backgroundRepeat: "no-repeat",
  border: "none",
  overflow: "hidden",
  outline: "none",
  cursor: "pointer"
};
const intro: String =
  "is a student at the day and " +
  "is a software developer at night. He is passionate about " +
  "building software that makes our life beautiful.";

class HomePage extends React.Component {
  state = {
    isIntroShow: false,
    isArrowShow: false
  };

  render() {
    setTimeout(() => {
      this.setState({ isIntroShow: true });
    }, 256);
    setTimeout(() => {
      this.setState({ isArrowShow: true });
    }, 1024);
    const isIntroShow = this.state.isIntroShow;
    const isArrowShow = this.state.isArrowShow;
    return (
      <StickyContainer className="App">
        <Sticky style={{ height: "32px" }}>
          {() => (
            <header className="App-menu" style={menuStyle}>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Donhyeok Tak</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto"></Nav>
                  <Form inline>
                    <Nav className="mr-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            </header>
          )}
        </Sticky>
        <header className="App-header" style={headerStyle}>
          <div className="App-header-intro">
            <Motion
              style={{ x: spring(0), opacity: spring(1) }}
              defaultStyle={{ x: -256, opacity: 0 }}
            >
              {({ x, opacity }) => (
                <div
                  style={{
                    WebkitTransform: `translateX(${x}px)`,
                    transform: `translateX(${x}px)`,
                    opacity: opacity
                  }}
                >
                  <h1
                    style={{
                      letterSpacing: 1.5,
                      fontSize: "2.5em",
                      fontWeight: 400
                    }}
                    className="App-header-intro-name"
                  >
                    Donghyeok Tak
                  </h1>
                </div>
              )}
            </Motion>
            <Motion
              style={{
                y: spring(isIntroShow ? 0 : -128),
                opacity: spring(isIntroShow ? 1 : 0)
              }}
              defaultStyle={{ y: -128, opacity: 0 }}
            >
              {({ y, opacity }) => (
                <div
                  style={{
                    WebkitTransform: `translate3d(0, ${-y}px, 0)`,
                    transform: `translate3d(0, ${-y}px, 0)`,
                    opacity: opacity
                  }}
                >
                  <h1
                    style={{
                      color: "#696969",
                      fontWeight: 300,
                      letterSpacing: 1.25,
                      fontSize: "2em"
                    }}
                  >
                    {intro}
                  </h1>
                </div>
              )}
            </Motion>
          </div>
        </header>
        <Motion
          style={{
            y: spring(isArrowShow ? 0 : -32),
            opacity: spring(isArrowShow ? 1 : 0)
          }}
          defaultStyle={{ y: -32, opacity: 0 }}
        >
          {({ y, opacity }) => (
            <div
              style={{
                WebkitTransform: `translate3d(0, ${-y}px, 0)`,
                transform: `translate3d(0, ${-y}px, 0)`,
                opacity: opacity
              }}
              className="App-header-arrow-div"
            >
              <button style={arrowButtonStyle} onClick={() => null}>
                <svg
                  className="App-header-arrow"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 14L12 21M12 21L5 14M12 21L12 3"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </Motion>
        <h1 style={{ textAlign: "center", padding: "32px" }}>Coming soon!</h1>
      </StickyContainer>
    );
  }
}

export default HomePage;
