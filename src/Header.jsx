
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import jobportal_logo from './jobportal_logo.svg';
import Login from './Login';
import SignUp from './SignUp';

function Header() {
  return (
    <Navbar expand="lg bg-body-tertiary">
      <Container className=" d-flex align-items-center">
        <img src={jobportal_logo} alt="Job Portal Logo" className="me-3 jobportallogo" />
        
        <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto bg-primary" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <li className=' p-3 '><Link to="/Home" className='navlist p-3 navli'>Home</Link></li>

            <li className=' p-3 navline'>
              <Link to="/Pages" className='navlist  p-3 navli'>Pages</Link>
              <ul className='sub-menus border pe-4 mt-3'>
                <li className='mt-2'> <Link to="/About">About</Link>                    </li>
                <li className='mt-2'> <Link to="/JobList">Job List</Link>               </li>
                <li className='mt-2'> <Link to="/JobDetails">Job Details</Link>         </li>
                <li className='mt-2'> <Link to="/ResumePage">Resume Page</Link>         </li>
                <li className='mt-2'> <Link to="/PrivacyPolicy">Privacy Policy</Link>   </li>
                <li className='mt-2'> <Link to="/Faq">Faq</Link>                        </li>
                <li className='mt-2'> <Link to="/OurPricing">Our Pricing</Link>         </li>
                <li className='mt-2'> <Link to="/404Error">404 Error</Link>             </li>
                <li className='mt-2 mb-2'> <Link to="/MailSuccess">Mail Success</Link>  </li>
              </ul>
            </li>

            <li className=' p-3 navline'>
              <Link to="/Candidates" className='navlist p-3 navli'>Candidates</Link>
              <ul className='sub-menus border pe-4 mt-3'>
                  <li className='mt-2'> <Link to="/BrowseJobs">Browse Jobs</Link>             </li>
                  <li className='mt-2'> <Link to="/BrowseCategories">Browse Categories</Link> </li>
                  <li className='mt-2'> <Link to="/AddResume">Add Resume</Link>               </li>
                  <li className='mt-2 mb-2'> <Link to="/JobAlerts">Job Alerts</Link>          </li>
              </ul>
            </li>

            <li className=' p-3 navline'>
              <Link to="/Employers" className='navlist p-3 navli'>Employers</Link>
              <ul className='sub-menus border pe-4 mt-3'>
                  <li className='mt-2'> <Link to="/AddJob">Add Job</Link>                         </li>
                  <li className='mt-2'> <Link to="/ManageJobs">Manage Jobs</Link>                 </li>
                  <li className='mt-2'> <Link to="/ManageApplication">Manage Applications</Link>  </li>
                  <li className='mt-2'> <Link to="/ManageResume">Manage Resume</Link>             </li>
                  <li className='mt-2 mb-2'> <Link to="/BrowseResumes">Browse Resumes</Link>      </li>
              </ul>
            </li>

            <li className=' p-3 navline'>
              <Link to="/Blog" className='navlist p-3 navli'>Blog</Link>
              <ul className='sub-menus border pe-4 mt-3'>
                  <li className='mt-2'> <Link to="/BlogGridSidebar">Blog Grid Sidebar</Link>        </li>
                  <li className='mt-2'> <Link to="/BlogSingle">Blog Single</Link>                   </li>
                  <li className='mt-2 mb-2'> <Link to="/BlogSingleSidebar">Blog Single Sidebar</Link>    </li>
              </ul>
            </li>

            <li className=' p-3 me-4 '><Link to="/Contact" className='navlist p-3 navli'>Contact</Link></li>
          </Nav>
        </Navbar.Collapse>

        <div className='d-flex align-items-center'>
          <div className='me-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-lock" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
            </svg>
            <Login />
          </div>
          <button type="button" className="btn btn-primary btn-lg">
            <SignUp />
          </button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
