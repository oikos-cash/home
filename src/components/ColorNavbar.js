import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function ColorNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("navbar-nav");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };
  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/index" tag={Link} id="tooltip6619950104">
              <img
                src={require("assets/img/oikos-type.svg").default}
                style={{
                  maxHeight:"4vh",
                }}
                className="mr-1"
              />
              • DeFi on BSC
            </NavbarBrand>
            <button className="navbar-toggler" id="navigation">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navigation">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <img
                    src={require("assets/img/oikos-type.svg").default}
                    style={{
                      maxHeight:"4vh",
                    }}
                    className="mr-1"
                  />
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button className="navbar-toggler" id="navigation">
                    <i className="oikos-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <a 
                href="https://stats.oikos.cash/"
                className="nav-link text-white ml-3"
                target="_blank"
              >
                Stats
              </a>
              <a 
                href="https://dashboard.oikos.cash/"
                className="nav-link text-white ml-3"
                target="_blank"
              >
                Dashboard
              </a>
              <a 
                href="https://bscscan.com/token/0x18aCf236eB40c0d4824Fb8f2582EBbEcD325Ef6a"
                className="nav-link text-white ml-3"
                target="_blank"
              >
                Token
              </a>
              <a 
                href="https://docs.oikos.cash/"
                className="nav-link text-white ml-3"
                target="_blank"
              >
                Docs
              </a>
              <a 
                href="https://github.com/oikos-cash/oikos-bsc/blob/master/audit/AUDIT.pdf"
                className="nav-link text-white ml-3"
                target="_blank"
              >
                Audit
              </a>
              <NavItem>
                <Button
                  className="nav-link"
                  color="info"
                  href="https://minter.oikos.cash/"
                  size="sm"
                  target="_blank"
                >
                  <p>Minter</p>
                </Button>
                <Button
                  className="nav-link"
                  color="default"
                  href="https://oikos.exchange"
                  size="sm"
                  target="_blank"
                >
                  <p>Exchange</p>
                </Button>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}
