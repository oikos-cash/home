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
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Headers() {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="cd-section" id="headers">
        <div className="header header-1">
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              // style={{
              //   backgroundImage:
              //     "linear-gradient(-60deg, #1a3c43, #2c0a2c",
              // }}
            />
            <Container>
              <Row>
                <Col className="mr-auto text-left mt-5" lg="5" md="7">
                  <h6 className="category">Decentralized Finance on Binance Smart Chain</h6>
                  <h1 className="title">
                    Oikos is a derivative trading platform deployed on BSC
                  </h1>
                  <br />
                  <div className="buttons">
                    <Button
                      className="btn-default"
                      color="info"
                      href="https://pancakeswap.finance/swap/0x18aCf236eB40c0d4824Fb8f2582EBbEcD325Ef6a?inputCurrency=BNB"
                      size="lg"
                      target="_blank"
                    >
                      Buy OKS
                    </Button>
                    <Button
                      className="btn-default mr-3"
                      href="https://minter.oikos.cash/"
                      size="lg"
                      target="_blank"
                    >
                      <p>Enter DaPP</p>
                    </Button>
                  </div>
                </Col>
                <Col className="ml-auto mt-5" lg="7" md="12">
                  <div className="iframe-container">
                    <img
                      alt="..."
                      src={require("assets/img/header-image.png").default}
                      style={{
                        marginTop:"-2.5vh",
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
