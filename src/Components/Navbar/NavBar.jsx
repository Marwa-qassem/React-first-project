import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './NavBar.css';

function NavBar() {
  return (
    <Navbar className='navbar w-100 py-4' expand="lg">
      <Container >
        <Link to="home" className='text-white nav-logo text-decoration-none'>START REACT</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

            <Link to="portfolio" className='text-white nav-item pe-4 text-decoration-none'>PORTFOLIO </Link>
            <Link to="about" className='text-white nav-item pe-4 text-decoration-none'>ABOUT</Link>
            <Link to="contact" className='text-white nav-item pe-4 text-decoration-none'>CONTACT</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;