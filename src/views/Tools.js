import React from "react";
import stats from 'assets/img/stats.png'

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Tools() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <div className="cd-section" id="projects">
        <div className="projects-4">
          <Container>
            <Row>
              <Col className="mr-auto ml-auto text-center" md="8">
                <h2 className="category text-muted">Oikos Network</h2>
                <h1 className="title mt-0">Tools</h1>
              </Col>
            </Row>
            <div className="space-50" />
            <Row>
              {/* <Col lg="2">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                    "url(" + require("assets/img/minter.png").default + ")",
                    backgroundPosition:
                      "left",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                    </h6>
                    <a href="https://minter.oikos.cash/" target="_blank">
                      <CardTitle tag="h3">Minter</CardTitle>
                    </a>
                    <h6 className="desc">dApp</h6>
                    <Button
                      color="info"
                      href="https://minter.oikos.cash/"
                      target="_blank"
                    >
                      Visit
                    </Button>
                  </CardBody>
                </Card>
              </Col> */}
              {/* <Col lg="2">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/exchange.png").default + ")",
                    backgroundPosition:
                      "right",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                    </h6>
                    <a href="https://oikos.exchange" target="_blank">
                      <CardTitle tag="h3">Exchange</CardTitle>
                    </a>
                    <h6 className="desc">Dapp</h6>
                    <Button
                      color="info"
                      href="https://oikos.exchange/"
                      target="_blank"
                    >
                      Visit
                    </Button>
                  </CardBody>
                </Card>
              </Col> */}
              <Col lg="4">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                    "url(" + require("assets/img/stats.png").default + ")",
                    backgroundPosition:
                      "left",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                    </h6>
                    <a href="https://stats.oikos.cash/" target="_blank">
                      <CardTitle tag="h3">Stats</CardTitle>
                    </a>
                    <h6 className="desc">Analytics</h6>
                    <Button
                      color="info"
                      href="https://stats.oikos.cash/"
                      target="_blank"
                    >
                      Visit
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                    "url(" + require("assets/img/distribution.png").default + ")",
                    backgroundPosition:
                      "right",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                    </h6>
                    <a href="https://dashboard.oikos.cash/" target="_blank">
                      <CardTitle tag="h3">Dashboard</CardTitle>
                    </a>
                    <h6 className="desc">Distribution</h6>
                    <Button
                      color="info"
                      href="https://dashboard.oikos.cash/"
                      target="_blank"
                    >
                      Visit
                    </Button>
                  </CardBody>
                </Card>
              </Col>  
              <Col lg="4">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                    "url(" + require("assets/img/userGuide.png").default + ")",
                    backgroundPosition:
                      "left",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                    </h6>
                    <a href="https://learn.oikos.cash/" target="_blank">
                      <CardTitle tag="h3">User Guide</CardTitle>
                    </a>
                    <h6 className="desc">Tutorials</h6>
                    <Button
                      color="info"
                      href="https://learn.oikos.cash/"
                      target="_blank"
                    >
                      Visit
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>{" "}
    </>
  );
}
