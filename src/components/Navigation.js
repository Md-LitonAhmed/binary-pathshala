import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './asset/Styled-css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import './Navigation/Navigation.css';

function Navigation() {
  return (
    <Navbar bg="dark"  variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="#" class=" text-info text-decoration-none">Binary Pathshala</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '1200px' }}
            navbarScroll
          >
          <NavLink activeclassName="active" to="/" className="navLink" end>  Home </NavLink>
            <NavLink to="/about" className="navLink" >About</NavLink>
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/contact"   className="navLink">
             Contact
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;