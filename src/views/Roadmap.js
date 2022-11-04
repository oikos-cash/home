import React from "react";
import { Milestones } from 'react-milestones-vis';
import { Container, Row, Col } from "reactstrap";

export const Roadmap = () => 
  <Container>
    <Row>
      <Col className="mr-auto ml-auto mt-5" md="6">
        <h1 className="title text-center">Roadmap</h1>
      </Col>
    </Row>
    <Milestones
      aggregateBy="year"
      data={[
        {
          title: 'V3 Launch',
          year: 1
        },
        {
          title: 'Chainlink Feeds',
          year: 2
        },
        {
          title: 'Multichain Contracts',
          year: 3
        },
        {
          title: 'Polygon Launch',
          year: 4
        },
        {
          title: 'Expansion',
          year: 5
        }
      ]}
      mapping={{
        text: 'title',
        timestamp: 'year'
      }}
      parseTime="%Y"
      optimize
      // orientation="vertical"
    />
  </Container>
;

export default Roadmap;