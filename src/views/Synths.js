/*!

=========================================================
* BLK Design System PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-oikos.com/product/blk-design-system-pro-react
* Copyright 2020 Creative oikos (https://www.creative-oikos.com)

* Coded by Creative oikos

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Synths() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <h1 className="title">Synthetic Assets</h1>
            </Col>
          </Row>
          <div className="">
            <a href="https://oikos.exchange/">
              <div className="icons-container on-screen mt-5">
                {/* Center */}
                <i className="icon oikos-icons icon-oBNB" />
                {/* Right 1 */}
                <i className="icon icon-sm oikos-icons icon-oXAU" />
                <i className="icon icon-sm oikos-icons icon-oETH" />
                <i className="icon icon-sm oikos-icons icon-oCAKE" />
                {/* Right 2 */}
                <i className="icon oikos-icons icon-oDOT" />
                <i className="icon oikos-icons icon-oBTC" />
                <i className="icon oikos-icons icon-oICP" />
                {/* Left 1 */}
                <i className="icon icon-sm oikos-icons icon-oUSD"/>
                <i className="icon icon-sm oikos-icons icon-oDOT" />
                <i className="icon icon-sm oikos-icons icon-oBTC" />
                {/* Left 2 */}
                <i className="icon oikos-icons icon-oETH" />
                <i className="icon oikos-icons icon-oICP" />
                <i className="icon oikos-icons icon-oCAKE" />
              </div>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
