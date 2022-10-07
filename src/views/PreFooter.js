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
            <div className="title">
              <h1>Partners & Sponsors</h1>
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
                      style={{
                        maxWidth:"100%"
                      }} 
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
                      style={{
                        maxWidth:"100%"
                      }} 
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
                      style={{
                        maxWidth:"100%"
                      }} 
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
                      style={{
                        maxWidth:"100%"
                      }} 
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
                      src={require("assets/img/derive-type.svg").default}
                      style={{
                        maxWidth:"100%"
                      }} 
                      alt="Chainlink"
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
                      src={require("assets/img/xt.png").default}
                      style={{
                        maxWidth:"80%",
                        marginTop:"15%"
                      }} 
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
