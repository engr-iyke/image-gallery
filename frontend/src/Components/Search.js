import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Search = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form>
            <Form.Row>
              <Col xs={9}>
                <form.control placeholder="Search for image..." />
              </Col>
              <Col>
                <Button variant="primary" type="submit">search</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

                export default Search;
