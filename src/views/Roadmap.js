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
          title: 'Q4 2022',
          textStyle: {
            color: '#f8bd45'
          },
          year: 1
        },
        {
          title: 'V3 Launch',
          textStyle: {
            color: '#ffffff'
          },
          year: 1
        },
        {
          title: 'Q4 2022',
          textStyle: {
            color: '#f8bd45'
          },
          year: 2
        },
        {
          title: 'Chainlink Feeds',
          textStyle: {
            color: '#fff'
          },
          year: 2
        },
        {
          title: 'Q4 2022',
          textStyle: {
            color: '#f8bd45'
          },
          year: 3
        },
        {
          title: 'Multichain Contracts',
          textStyle: {
            color: '#fff'
          },
          year: 3
        },
        {
          title: 'Q1 2023',
          textStyle: {
            color: '#f8bd45'
          },
          year: 4
        },
        {
          title: 'Polygon Launch',
          textStyle: {
            color: '#fff'
          },
          year: 4
        },
        {
          title: 'Q1 2023',
          textStyle: {
            color: '#f8bd45'
          },
          year: 5
        },
        {
          title: 'Expansion',
          textStyle: {
            color: '#fff'
          },
          year: 5
        }
      ]}
      mapping={{
        text: 'title',
        timestamp: 'year'
      }}
      parseTime="%Y"
      optimize
    />
  </Container>
;

export default Roadmap;