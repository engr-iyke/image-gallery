import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Search = ({ word, setword, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={9}>
                <form.control
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                placeholder="Search for image..."
                />
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
