import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Prefooter() {
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [emailFocus2, setEmailFocus2] = React.useState(false);
  return (
    <>
      <div className="section section-pre-footer">
        <div id="pre-footer-areas">
          <Container>
            <div className="title text-center">
              <h1 className="title mt-0">Partners & Sponsors</h1>
            </div>
          </Container>
          <br />
          <br />
          <div className="social-line social-line-big-icons">
            <Container>
              <Row>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="https://chain.link/"
                    target="_blank"
                  >
                    <img
                      src={require("assets/img/chainlink-logo.png").default}
                      alt="Chainlink"
                    />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="https://coingecko.com/"
                    target="_blank"
                  >
                    <img
                      src={require("assets/img/coingecko-logo.png").default}
                    />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    href="https://coinmarketcap.com/"
                    target="_blank"
                  >
                    <img
                      src={require("assets/img/coinmarketcap-logo.png").default}
                    />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="https://vulkania.io/"
                    target="_blank"
                  >
                    <img
                      src={require("assets/img/vulkania-logo.png").default}
                      alt="Vulkania"
                    />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="https://derive.fi/"
                    target="_blank"
                  >
                    <img
                      src={require("assets/img/derive-logo.png").default}
                      alt="Derive"
                    />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="https://xt.com/"
                    target="_blank"
                  >
                    <img
                      src={require("assets/img/xt-logo.png").default}
                      alt="XT.com"
                    />
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
