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
      <div className="section-signup-form">
        <div id="pre-footer-areas">
          <br />
          <div className="subscribe-line">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" lg="6" sm="10">
                  <div className="text-center">
                    <h4 className="title">Subscribe to our Newsletter</h4>
                  </div>
                  <Card className="card-raised card-form-horizontal">
                    <CardBody>
                      <Form action="" method="">
                        <Row>
                          <Col sm="8">
                            <InputGroup
                              className={classnames({
                                "input-group-focus": emailFocus2,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="oikos-icons icon-email-85" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Your Email..."
                                type="email"
                                onFocus={(e) => setEmailFocus2(true)}
                                onBlur={(e) => setEmailFocus2(false)}
                              />
                            </InputGroup>
                          </Col>
                          <Col sm="4">
                            <Button
                              block
                              className="btn-round"
                              color="info"
                              type="button"
                            >
                              Sign up
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
