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
import { Container, Row, Col } from "reactstrap";

export default function Content() {
  return (
    <>
      <div className="section section-content" data-background-color="black">
        <Container>
          <Row>
            <Col 
              lg="6"
              style={{
                textAlign:"center",
              }}
            >
              <div className="image-container">
                <img
                  alt="..."
                  className="img rounded hidden-xs img-comments hiddenxyz rellax"
                  src={
                    require("assets/img/features_3.svg").default
                  }
                  style={{
                    maxWidth:"70%",
                  }}
                />
              </div>
            </Col>
            <Col className="ml-auto mr-auto" lg="6">
              <div className="section-description">
                <h1 className="title">Decentralized Synthetic Assets</h1>
                <h5 className="category text-info mb-5">
                  <strong>On Binance Smart Chain (BSC)</strong>
                </h5>
                <p className="description">
                  {`Synthetic asset platform that provides on-chain exposure to fiat currencies, commodities, stocks, and indices. Synthetic assets (Synths) are backed by Oikos Network Tokens (OKS) locked into a smart contract as collateral.`}
                </p>
                <br/>
                <p className="description">
                  {`Synths track the prices of various assets, allowing crypto-native and unbanked users to trade P2C (peer-to-contract) on Oikos Exchange without liquidity limitations.`}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}
