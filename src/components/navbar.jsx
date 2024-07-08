import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {

    return(
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={ Link } to='/'>Jesse George</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={ Link } to='/'>Home</Nav.Link>
            <Nav.Link as={ Link } to='/projects'>Projects</Nav.Link>
            <Nav.Link as={ Link } to='/contact'>Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Navigation