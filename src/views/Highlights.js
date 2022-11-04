import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

export default function Highlights() {
  return (
    <>
      <div className="cd-section" id="features">
        <div className="features-3">
          <Container>
            <Row>
              <Col className="mr-auto ml-auto" md="6">
                <h1 className="title">Highlights</h1>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-success">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={
                        require("assets/img/features_1.svg").default
                      }
                    />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Price Oracle</h3>
                    <p>
                    Price data is obtained via multiple trusted sources and aggregated to create a robust price oracle mechanism
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={
                        require("assets/img/features_4.svg").default
                      }
                    />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Developer Tools</h3>
                    <p>
                    Developer tools make it easy to create applications leveraging Oikos services
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={
                        require("assets/img/features_2.svg").default
                      }
                    />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Synthetic Assets</h3>
                    <p>
                    Trade multiple Synths from various categories
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/features_5.svg").default}
                    />
                  </div>
                  <div className="description">
                    <h3 className="info-title">
                      Documentation{" "}
                    </h3>
                    <p>
                    Join liquidity pools to collect fees and trade BNB for any BEP20 without wrapping. <br/> Liquidity-sensitive automated pricing using constant product formula.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>{" "}
    </>
  );
}
