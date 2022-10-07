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
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function FAQ() {
  const [collapse, setCollapse] = React.useState(1);
  const openCollapse = (collapse) => {
    setCollapse(collapse);
  };

  return (
    <>
      <div className="cd-section" id="accordion">
        <div className="accordion-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title mb-4 mt-5">Frequently asked questions</h2>
                <div className="section-space" />
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="12">
                <div className="accordion">
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left "
                          color="link"
                          aria-expanded={collapse === 2}
                          onClick={() => openCollapse(2)}
                        >
                          What is DeFi?{" "}
                          <i className="oikos-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 2}>
                      <CardBody>
                          DeFi (or “decentralized finance”) is an umbrella term for financial services on public blockchains, such as Binance Smart Chain (BSC). With DeFi, you can do most of the things that banks support — earn interest, borrow, lend, trade derivatives, trade assets, buy insurance, and more — but it’s faster and doesn’t require paperwork or a third party. As with crypto generally, DeFi is global, peer-to-peer (meaning directly between two people, not routed through a centralized system), pseudonymous, and open to all. 
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left "
                          color="link"
                          aria-expanded={collapse === 3}
                          onClick={() => openCollapse(3)}
                        >
                          What is a derivative?{" "}
                          <i className="oikos-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 3}>
                      <CardBody>
                          The term derivative refers to a type of financial contract whose value is dependent on an underlying asset, group of assets, or benchmark. Prices for derivatives derive from fluctuations in the underlying asset. In the traditional financial world, derivatives are representations of stocks or bonds that a trader does not own but wants to buy or sell. In essence, if you want to profit from the price fluctuations of a stock that you don’t own, you can do this through a derivative.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left"
                          color="link"
                          aria-expanded={collapse === 4}
                          onClick={() => openCollapse(4)}
                        >
                          What are synthetic assets?{" "}
                          <i className="oikos-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 4}>
                      <CardBody>
                          Synthetic assets, sometimes referred to as synths, are a combination of cryptocurrencies and traditional derivative assets. In other words, synths are tokenized derivatives. With this popularity, new forms of assets emerge, which cater to the needs of a wider group of users. Among these new assets are synthetic assets. Synthetic assets are essentially tokenized derivatives.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left"
                          color="link"
                          aria-expanded={collapse === 5}
                          onClick={() => openCollapse(5)}
                        >
                          How do synthetic assets differ from traditional derivatives?{" "}
                          <i className="oikos-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 5}>
                      <CardBody>
                      Instead of using contracts to create the chain between an underlying asset, the derivative product, synthetic assets tokenize the relationship. This means that synthetic assets can impart exposure to any asset in the world — all from within the crypto ecosystem. Synthetic assets, or tokenized derivatives, take this process one step further by adding the record for the derivative on the blockchain and essentially creating a cryptocurrency token for it.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left"
                          color="link"
                          aria-expanded={collapse === 1}
                          onClick={() => openCollapse(1)}
                        >
                          What are the advantages of crypto synthetic assets vs. traditional derivatives?{" "}
                          <i className="oikos-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 1}>
                      <CardBody>
                      Traditional derivatives were once groundbreaking in their ability to unlock additional value from assets such as commodities. However, crypto synthetic assets are taking liquidity access to a whole new level. Here are just a few advantages synthetic assets have over traditional derivatives:
                      - Anyone can issue them: Blockchain-based synthetic assets can be minted by anyone using open-source protocols like Oikos.
                      - Worldwide liquidity: Synthetics can be traded on any crypto exchange in the world, including unstoppable decentralized exchanges like Oikos.Exchange.
                      - Borderless transfers: Synthetic assets are blockchain assets like BEP-20 tokens; you can send and receive them between standard cryptocurrency wallets such as MetaMask or TrustWallet.
                      - Frictionless movement: Switch between indices, synthetic commodities such as oil/gold, and other assets without having to hold the underlying asset.
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
