
//react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//react-route-dom
import { NavLink } from 'react-router-dom';

function NavbarCom() {
  return (
    <>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark" className='mb-3'>
        <Container>
          <Navbar.Brand href="#home" > 🎓Student-Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" as={NavLink} to={"/"}>Home</Nav.Link>
              <Nav.Link href="#link" as={NavLink} to={"/Add"}>Add Student</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCom;