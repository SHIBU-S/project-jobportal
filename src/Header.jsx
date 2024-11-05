
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import jobportal_logo from './jobportal_logo.svg';
// import Login from './Login';
// import SignUp from './SignUp';

// function Header() {
//   return (
//     <Navbar expand="lg"className=' border pb-lg-3 sticky-top ' style={{ backgroundColor: "#f6f9fc"}}>
//       <Container className=" pt-2 pb-2 pb-lg-0 navbar-container">

//         <img src={jobportal_logo} alt="Job Portal Logo" className="jobportallogo" />  

//         <Navbar.Toggle aria-controls="navbarScroll" className="bg-primary ms-5 px-1 py-0 px-md-2 py-md-1" />

//          <div className='login-signup d-flex align-items-center order-lg-2 order-md-0 ms-4 ms-lg-0'>
//           <div className='me-0 me-lg-3'>
//             <Login />
//           </div>
//           <button type="button" className="button rounded-1 ">
//             <SignUp />
//           </button>
//         </div> 


//         <Navbar.Collapse id="navbarScroll" className=' pe-md-0 pe-lg-0 pe-xxl-0 navcollapse mt-3 mt-lg-0'>
//           <Nav className="ms-auto mt-0 mt-lg-0 ps-3">
//             <li className='p-3 p-lg-0'><Link to="/Home" className='navlist p-3 navli pb-lg-4 '>Home</Link></li>

//              <li className=' p-3 p-lg-0 navline'>
//               <Link to="/Pages" className='navlist p-3 navli pb-lg-4'>Pages</Link>
//               <ul className='ms-4 ms-lg-0 ps-3 pe-2 sub-menus pt-2 pb-1 mt-3 border'>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/AboutUs" className='d-block'>About Us</Link>                    </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/JobList" className='d-block'>Job List</Link>               </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/JobDetails" className='d-block'>Job Details</Link>         </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/ResumePage" className='d-block'>Resume Page</Link>         </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/PrivacyPolicy" className='d-block'>Privacy Policy</Link>   </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/Faq" className='d-block'>Faq</Link>                        </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/OurPricing" className='d-block'>Our Pricing</Link>         </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/404Error" className='d-block'>404 Error</Link>             </li>
//                 <li className='mt-2 me-2 rounded-1 mb-3'> <Link to="/MailSuccess" className='d-block'>Mail Success</Link>  </li>
//               </ul>
//             </li>

//             <li className=' p-3 p-lg-0 navline'>
//               <Link to="/Candidates" className='navlist p-3 navli pb-lg-4'>Candidates</Link>
//               <ul className='ms-4 ms-lg-0 ps-3 pe-2 sub-menus pt-2 mt-3 border'>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/BrowseJobs" className='d-block'>Browse Jobs</Link>             </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/BrowseCategories" className='d-block'>Browse Categories</Link> </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/AddResume" className='d-block'>Add Resume</Link>               </li>
//                 <li className='mt-2 me-2 rounded-1 mb-3'> <Link to="/JobAlerts" className='d-block'>Job Alerts</Link>          </li>
//               </ul>
//             </li>

//             <li className=' p-3 p-lg-0 navline'>
//               <Link to="/Employers" className='navlist p-3 navli pb-lg-4'>Employers</Link>
//               <ul className='ms-4 ms-lg-0 ps-3 pe-2 sub-menus pt-2 mt-3 border '>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/AddJob" className='d-block'>Add Job</Link>                         </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/ManageJobs" className='d-block'>Manage Jobs</Link>                 </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/ManageApplication" className='d-block'>Manage Applications</Link>  </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/ManageResume" className='d-block'>Manage Resume</Link>             </li>
//                 <li className='mt-2 me-2 rounded-1 mb-3'> <Link to="/BrowseResumes" className='d-block'>Browse Resumes</Link>      </li>
//               </ul>
//             </li>

//             <li className=' p-3 p-lg-0 navline'>
//               <Link to="/Blog" className='navlist p-3 navli pb-lg-4'>Blog</Link>
//               <ul className='ms-4 ms-lg-0 ps-3 pe-2 sub-menus pt-2 mt-3 border '>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/BlogGridSidebar" className='d-block'>Blog Grid Sidebar</Link>             </li>
//                 <li className='mt-2 me-2 rounded-1'> <Link to="/BlogSingle" className='d-block'>Blog Single</Link>                        </li>
//                 <li className='mt-2 me-2 rounded-1 mb-3'> <Link to="/BlogSingleSidebar" className='d-block'>Blog Single Sidebar</Link>    </li>
//               </ul>
//             </li>

//             <li className=' p-3 p-lg-0 me-3 '><Link to="/Contact" className='navlist p-3 navli pb-lg-4'>Contact</Link></li>

//           </Nav>
//         </Navbar.Collapse>


//       </Container>
//     </Navbar>
//   );
// }

// export default Header;







import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import jobportal_logo from './jobportal_logo.svg';
import Login from './Login';
import SignUp from './SignUp';

function Header() {
  return (
    <Navbar expand="lg"className='border pb-lg-3 sticky-top' style={{ backgroundColor: "#f6f9fc"}}>
      <Container className=" pt-2 pb-2 pb-lg-0 navbar-container">

        <img src={jobportal_logo} alt="Job Portal Logo" className="jobportallogo" />  

        <Navbar.Toggle aria-controls="navbarScroll" className="bg-primary ms-5 px-1 py-0 px-md-2 py-md-1" />

         <div className='login-signup d-flex align-items-center order-lg-2 order-md-0 ms-4 ms-lg-0'>
          <div className='me-0 me-lg-3'>
            <Login />
          </div>
          <button type="button" className="button rounded-1 ">
            <SignUp />
          </button>
        </div> 


        <Navbar.Collapse id="navbarScroll" className=' pe-md-0 pe-lg-0 pe-xxl-0 navcollapse mt-3 mt-lg-0'>
          <Nav className=" pb-1 ms-auto mt-0 mt-lg-2 ps-3">
            <li className=' p-1 p-lg-0'><Link to="/Home" className=' navlist p-3 navli pb-lg-4 '>Home</Link></li>

             <li className='mt-3 mt-lg-0 p-1 p-lg-0 navline'>
              <Link to="/Pages" className='navlist p-3 navli pb-lg-4'>Pages</Link>
              <ul className='ms-4 ms-lg-0 ps-2 ps-lg-3 pe-lg-2 sub-menus pt-1 pt-lg-2 pb-0 pb-lg-1 mt-3 '>
                <li className='mt-2 me-2 rounded-1'> <Link to="/AboutUs" className='d-block'>About Us</Link>                    </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/JobList" className='d-block'>Job List</Link>               </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/JobDetails" className='d-block'>Job Details</Link>         </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/ResumePage" className='d-block'>Resume Page</Link>         </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/PrivacyPolicy" className='d-block'>Privacy Policy</Link>   </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/Faq" className='d-block'>Faq</Link>                        </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/OurPricing" className='d-block'>Our Pricing</Link>         </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/404Error" className='d-block'>404 Error</Link>             </li>
                <li className='mt-2 me-2 rounded-1 mb-3'> <Link to="/MailSuccess" className='d-block'>Mail Success</Link>  </li>
              </ul>
            </li>

            <li className=' p-1 p-lg-0 navline'>
              <Link to="/Candidates" className='navlist p-3 navli pb-lg-4'>Candidates</Link>
              <ul className='ms-4 ms-lg-0 ps-2 ps-lg-3 pe-lg-2 sub-menus pt-1 pt-lg-2 pb-0 pb-lg-1 mt-3'>
                <li className='mt-2 me-2 rounded-1'> <Link to="/BrowseJobs" className='d-block'>Browse Jobs</Link>             </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/BrowseCategories" className='d-block'>Browse Categories</Link> </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/AddResume" className='d-block'>Add Resume</Link>               </li>
                <li className='mt-2 me-2 rounded-1 mb-3'> <Link to="/JobAlerts" className='d-block'>Job Alerts</Link>          </li>
              </ul>
            </li>

            <li className=' p-1 p-lg-0 navline'>
              <Link to="/Employers" className='navlist p-3 navli pb-lg-4'>Employers</Link>
              <ul className='ms-4 ms-lg-0 ps-2 ps-lg-3 pe-lg-2 sub-menus pt-1 pt-lg-2 pb-0 pb-lg-1 mt-3 '>
                <li className='mt-2 me-2 rounded-1'> <Link to="/AddJob" className='d-block'>Add Job</Link>                         </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/ManageJobs" className='d-block'>Manage Jobs</Link>                 </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/ManageApplication" className='d-block'>Manage Applications</Link>  </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/ManageResume" className='d-block'>Manage Resume</Link>             </li>
                <li className='mt-2 me-2 rounded-1 mb-3'> <Link to="/BrowseResumes" className='d-block'>Browse Resumes</Link>      </li>
              </ul>
            </li>

            <li className=' p-1 p-lg-0 navline'>
              <Link to="/Blog" className='navlist p-3 navli pb-lg-4'>Blog</Link>
              <ul className='ms-4 ms-lg-0 ps-3 pe-2 sub-menus pt-2 mt-3  '>
                <li className='mt-2 me-2 rounded-1'> <Link to="/BlogGridSidebar" className='d-block'>Blog Grid Sidebar</Link>             </li>
                <li className='mt-2 me-2 rounded-1'> <Link to="/BlogSingle" className='d-block'>Blog Single</Link>                        </li>
                <li className='mt-2 me-2 rounded-1 mb-3'> <Link to="/BlogSingleSidebar" className='d-block'>Blog Single Sidebar</Link>    </li>
              </ul>
            </li>

            <li className='mb-2 mb-lg-0 p-1 p-lg-0 me-3 '><Link to="/Contact" className='navlist p-3 navli pb-lg-4'>Contact</Link></li>

          </Nav>
        </Navbar.Collapse>


      </Container>
    </Navbar>
  );
}

export default Header;




