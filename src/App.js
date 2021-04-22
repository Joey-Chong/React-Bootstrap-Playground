import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// css file order matters big time

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <div className="navbar"></div>
      <Container fluid className="grid-container">
        <Row className="rowDiv">
          <Col className="colDiv2">R2C1</Col>
          <Col sm={6} className="colDiv1">R2C2</Col>
          <Col className="colDiv2">R2C3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
