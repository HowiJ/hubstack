import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <div>
      <Row>
        <Col md={12}>
          <h1>Home (Temp)</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          Since github pages doesn't natively support SPAs, refreshing will lead you to a 404. I'm using this as a temporary testing site so in the future, it will probably be deployed via other means. Thus, bear with this for now.
        </Col>
      </Row>
    </div>
  );
}