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

export default function HeaderTerms() {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="cd-section" id="headers">
        <div className="header header-1">
          <div className="mt-5 header-filter">
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
                  Terms & Conditions
                  </h1>
                  <br />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
