import "./App.css";
import Product from "./Product";
import Data from "./Data.json";
import "./Header";
// Boootstrp import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <Container className="py-5">
        <Row>
          {Data.products.map((item, index) => {
            return (
              <Col lg={3} md={4} xs={6}>
                <Card>
                  <Card.Img variant="top" className="image_styling" src={item.thumbnail} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary">{item.price}</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
