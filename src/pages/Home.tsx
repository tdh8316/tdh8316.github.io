import CSS from "csstype";
import React from "react";
import { Motion, spring } from "react-motion";
import { StickyContainer, Sticky } from "react-sticky";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, Form, Row, Col } from "react-bootstrap";
import "../index.css";
import "../App.css";
import { Button } from "react-bootstrap";

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
  "He is a student during the day and a programmer at night.";

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
                <Navbar.Brand href="#">Donghyeok Tak</Navbar.Brand>
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
          <Row>
            <Col>
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
                          fontSize: "1.5em",
                          paddingBottom: "32px"
                        }}
                      >
                        {intro}
                      </h1>
                      <img src="/assets/01.png" alt="" height="360px" className="image1" />
                    </div>
                  )}
                </Motion>
              </div>
            </Col>
            <Col style={{ paddingLeft: "32px" }}>
              <div><h3>Follow me!</h3></div>
              <div><Button variant="link" href="https://github.com/tdh8316">Github</Button></div>
              <div><Button variant="link" href="https://www.instagram.com/do_odoong_tak/">Instagram</Button></div>
              <div><Button variant="link" href="mailto://tdh8316@naver.com">Email</Button></div>
            </Col>
          </Row>
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

        <Row>
          <Col style={{ paddingTop: "5vh", paddingLeft: "15vw", paddingBottom: "25vh" }} className="image2">
            <img src="/assets/07.png" alt="" width="75%"></img>
            <h1>Nice to meet you!</h1>
            <h5 style={{ paddingRight: "64px", fontWeight: 100}}>
              I enjoy programming and playing the piano. People often think those who interested in science are not that emotional and artistic. I also did. But whenever I play the piano, I would like to break this stereotype up. I'm interested in not only computer science but musical and artistic things.
              Liberal arts and science, It would be great if we can make our life more beautiful with these!
            </h5>
          </Col>
          <Col>
            <div>
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
                    <h1 style={{ fontSize: "calc(30px + 2vmin)" }}>_CV</h1>
                  </div>
                )}
              </Motion>
            </div>
            <h1>Education</h1>
          </Col>

          <Col style={{ textAlign: "center" }}>
            <div>
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
                    <h1 style={{ fontSize: "calc(25px + 2vmin)" }}>Skills</h1>
                  </div>
                )}
              </Motion>
            </div>
            <h2>Languages</h2>
            <h5>Python</h5>
            <h5>Go</h5>
            <h5>Rust</h5>
            <h5>Kotlin</h5>
            <h5>Dart</h5>
            <h5>C/C++</h5>
            <h5>DotNet</h5>
            <h5>Typescript</h5>
            <h2>Frameworks and Libraries</h2>
            <h5>Flutter</h5>
            <h5>Qt</h5>
            <h5>LLVM</h5>
            <h5>React</h5>
            <h2>Platforms</h2>
            <h5>Mobile</h5>
            <h5>Web</h5>
            <h5>Desktop</h5>
            <h5>Arduino</h5>
          </Col>

        </Row>
      </StickyContainer>
    );
  }
}

export default HomePage;
