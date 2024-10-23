

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import jobportal_logo from './jobportal_logo.svg';

function Header() {
  return (
    <Navbar expand="lg">
      <Container className="bg-body-tertiary d-flex align-items-center">
        {/* <Navbar.Brand href="#">Navbar Scroll</Navbar.Brand> */}
        <img src={jobportal_logo} alt="Job Portal Logo" className="me-3 jobportallogo" />
        <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />

        <Navbar.Collapse id="navbarScroll" className='border d-flex justify-content-center'>
          <Nav className="me-auto ">
            <li className='navli p-3 me-4'><Link to="/Home" className='navlist'>Home</Link></li>
            <li className='navli p-3 me-4'><Link to="/Pages" className='navlist'>Pages</Link></li>
            <li className='navli p-3 me-4'><Link to="/Candidates" className='navlist'>Candidates</Link></li>
            <li className='navli p-3 me-4'><Link to="/Employers" className='navlist'>Employers</Link></li>
            <li className='navli p-3 me-4'><Link to="/Blog" className='navlist'>Blog</Link></li>
            <li className='navli p-3 me-4'><Link to="/Contact" className='navlist'>Contact</Link></li>
          </Nav>
        </Navbar.Collapse>

        <div className=' p-3 d-flex align-items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
          </svg>
          <span className="ms-1">Login</span>
        </div>

        <div>
            <button type="button" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
