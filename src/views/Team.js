/*!

=========================================================
* BLK Design System PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
const items = [
];

export default function Team() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  return (
    <>
      <div className="cd-section" id="teams">
        <div className="team-5">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h1 className="title">Team</h1>
                <h4 className="description">
                Blockchain engineers, mad scientists and marketing ninjas. <a href="#" style={{color:"lightgreen",}}>We're hiring!</a>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile profile-bg">
                  <CardHeader
                    // style={{
                    //   backgroundImage:
                    //   "linear-gradient(135deg, #3c3c3c, #1a1a1a",
                    // }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/manuel_corona.jpg").default}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Manuel Corona</CardTitle>
                    <h4 className="text-info">Co-Founder & Marketing Expert</h4>
                    <p className="card-description">
                      Manuel had an early fascination with technology that led him to work with many talented people and co-found several technology projects. He is a skilled marketer, IT expert and his interests span from programming to distributed system design and of course, cryptocurrencies. His early vision for Oikos was determinant and he led the project from the idea phase to deployment.
                    </p>
                  </CardBody>
                  <CardFooter>
                    <div className="d-inline float-center d-md-block">
                      <Button
                        className="btn-icon btn-round"
                        color="telegram"
                        href="https://t.me/triloger"
                        target="_blank"
                      >
                        <i className="fab fa-telegram" />
                      </Button>
                      {/* <Button
                        className="btn-icon btn-round mr-1"
                        color="github"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-github" />
                      </Button> */}
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="twitter"
                        href="https://twitter.com/oikosman1"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile profile-bg">
                  <CardHeader
                    // style={{
                    //   backgroundImage:
                    //   "linear-gradient(135deg, #3c3c3c, #1a1a1a",
                    // }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/albert_rodriguez.jpg").default}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Albert Rodriguez</CardTitle>
                    <h4 className="text-info">Co-Founder & Mad Scientist</h4>
                    <p className="card-description">
                      Albert is an early Bitcoin, Ethereum and Binance Smart Chain adopter. His fascination for DeFi lead him to come up with the idea for Oikos and everything started from there. He is also a very talented developer with experience in several programming languages. His daily routine consists in drinking a lot of coffee, writing code and thinking of new possible directions for Oikos.
                    </p>
                  </CardBody>
                  <CardFooter>
                    <div className="d-inline float-center d-md-block">
                    <Button
                        className="btn-icon btn-round"
                        color="telegram"
                        href="https://t.me/oikos1"
                        target="_blank"
                      >
                        <i className="fab fa-telegram" />
                      </Button>
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="github"
                        href="https://github.com/oikos1"
                        target="_blank"
                      >
                        <i className="fab fa-github" />
                      </Button>
                      {/* <Button
                        className="btn-icon btn-round mr-1"
                        color="twitter"
                        href="https://twitter.com/oikosman1"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                      </Button> */}
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile profile-bg">
                  <CardHeader
                    // style={{
                    //   backgroundImage:
                    //     "linear-gradient(135deg, #3c3c3c, #1a1a1a",
                    // }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/kevin_holder.jpg").default}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Kevin Holder</CardTitle>
                    <h4 className="text-info">Software Engineer</h4>
                    <p className="card-description">
                    Kevin is a talented software engineer that has been through the whole technology stack during the course of his career, from cryptography to front end web development. Before Oikos, he spent his time developing smart contracts, studying decentralized applications and contributing to open source. His programming languages of choice are, in no particular order, Solidity, JavaScript and Rust.
                    </p>
                  </CardBody>
                  <CardFooter>
                    <div className="d-inline float-center d-md-block">
                    <Button
                        className="btn-icon btn-round"
                        color="telegram"
                        href="https://t.me/kevholder"
                        target="_blank"
                      >
                        <i className="fab fa-telegram" />
                      </Button>
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="github"
                        href="https://github.com/kevholder"
                        target="_blank"
                      >
                        <i className="fab fa-github" />
                      </Button>
                      {/* <Button
                        className="btn-icon btn-round mr-1"
                        color="twitter"
                        href="https://twitter.com/oikosman1"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                      </Button> */}
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>{" "}
    </>
  );
}
