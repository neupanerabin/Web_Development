import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import AddProduct from "./components/AddProduct";
import DisplayProduct from "./components/DisplayProduct";

function App() {
  return (
    <Container>
      <Row>
        
        <Col lg={6}>
          <h2>Product Manager</h2>
      <AddProduct />
        </Col>

        <Col lg={6}>
          <h2>Product Display</h2>
      <DisplayProduct></DisplayProduct>
        </Col>

      </Row>
    </Container>
  );
}

export default App;
