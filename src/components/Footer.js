import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  Link,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <img
                src={require("assets/img/oikos-type.svg").default}
                style={{
                  maxWidth:"10vh",
                  margin:"5vh",
                }} 
              />
            </Col>
            <Col md="3" xs="6">
              <Nav>
                <NavItem>
                  <a href="https://medium.com/@oikoscash" target="_blank">
                    Blog
                  </a>
                </NavItem>
                <NavItem>
                  <a href="https://docs.oikos.cash/litepaper/" target="_blank">
                    Litepaper
                  </a>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3" xs="6">
              <Nav>
                <NavItem>
                  {/* <a href="/Terms">
                    Terms of Use
                  </a> */}
                <Link to={"/Terms"}>
                  Terms of Use
                </Link>
                </NavItem>
                <NavItem>
                  {/* <a href="/Privacy">
                    Privacy Policy
                  </a> */}
                  <Link to={"/Privacy"}>
                    Privacy Policy
                  </Link>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">Follow us:</h3>
              <div className="btn-wrapper profile text-left">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://twitter.com/oikos_cash"
                  id="tooltip39661217"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip39661217">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://github.com/orgs/oikos-cash/"
                  id="tooltip206037619"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip206037619">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://discord.gg/VVDu6Er"
                  id="tooltip750293512"
                  target="_blank"
                >
                  <i className="fab fa-discord" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip750293512">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://t.me/oikoscash"
                  id="tooltip750293512"
                  target="_blank"
                >
                  <i className="fab fa-telegram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip750293512">
                  Follow us
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
