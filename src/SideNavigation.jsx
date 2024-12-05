
// import { Container, Row, Col } from "react-bootstrap";
// import AdminPageImg from './AdminPage-Img.png';
// import { Link } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Categories from "./Categories";
// import { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { AiFillDashboard } from "react-icons/ai";
// import DemoUserLogo from './DemoUserlogo.png';
// import { IoLogOutOutline } from "react-icons/io5";


// function SideNavigation(){

//     const [activePage, setActivePage] = useState(1); 

//     const pageNames = ["Dashboard","Categories","Service","Bannar","Blog","Users","Orders"];
//     const pagelogos = [<AiFillDashboard />]

//     const items = [];
//     for (let number = 1; number <= 7; number++) {
//       items.push(
//         <li key={number} active={number === activePage} onClick={() => setActivePage(number)} className="text-white p-2 d-flex align-items-center">
//            {pagelogos[number-1]}  {pageNames[number - 1]}
//         </li>
//       );
//     }

//     return(
//         <>
//             <Container fluid style={{ boxShadow: "0px 0px 3px #ccc" }}>
//                 <Row>
//                     <Col>
//                         <div className="p-3" style={{ border: "1px solid #eee", width: "235px"}}>
//                             <Link to=""><img src={AdminPageImg} className="img-fluid" alt="..." /></Link>
//                         </div>
//                     </Col>

//                     <Col className="d-flex align-items-center">
//                         <div className="d-flex align-items-center ms-auto"><img src={DemoUserLogo} class="me-3" className="img-fluid rounded-circle " alt="..." /> Demo User
                        
//                         </div>

//                         <div className="ms-3 border p-3">
//                             <IoLogOutOutline/> Logout
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>

//             <Container fluid>
//                 <Row style={{height:"700px"}}>
//                     <Col sm={2} className="px-0" >
//                         <div className="p-2" style={{backgroundColor:"#19222E"}}>
//                             <span className="text-white p-1 d-flex align-items-center"><RxHamburgerMenu/> NAVIGATION</span>
//                         </div>

//                         <ul className="sidenav_lists" style={{paddingLeft:"0",height:"700px"}}>
//                             {items}
//                         </ul>
//                     </Col>

//                     <Col className="border px-0"  style={{backgroundColor:"#f6f6f6"}} >
//                         {activePage === 1 && (<Dashboard/>)}
//                         {activePage === 2 && (<Categories/>)}
//                     </Col> 
//                 </Row>
//             </Container>
//         </>
//     )
// }

// export default SideNavigation;





import { Container, Row, Col } from "react-bootstrap";
import AdminPageImg from './AdminPage-Img.png';
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillDashboard } from "react-icons/ai";
import DemoUserLogo from './DemoUserlogo.png';
import { IoLogOutOutline } from "react-icons/io5";

function SideNavigation() {
  const pageNames = ["Dashboard", "Categories", "Service", "Banner", "Blog", "Users", "Orders"];
  const pageLinks = ["/dashboard", "/categories", "/service", "/banner", "/blog", "/users", "/orders"];
  const pagelogos = [<AiFillDashboard />]; // You can extend logos if needed

  return (
    <>
      <Container fluid style={{ boxShadow: "0px 0px 3px #ccc" }}>
        <Row>
          <Col>
            <div className="p-3" style={{ border: "1px solid #eee", width: "235px" }}>
              <Link to=""><img src={AdminPageImg} className="img-fluid" alt="Admin Page" /></Link>
            </div>
          </Col>

          <Col className="d-flex align-items-center">
            <div className="d-flex align-items-center ms-auto">
              <img src={DemoUserLogo} className="me-3 img-fluid rounded-circle" alt="User" />
              Demo User
            </div>

            <div className="ms-3 border p-3">
              <IoLogOutOutline /> Logout
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row style={{ height: "700px" }}>
          <Col sm={2} className="px-0">
            <div className="p-2" style={{ backgroundColor: "#19222E" }}>
              <span className="text-white p-1 d-flex align-items-center">
                <RxHamburgerMenu /> NAVIGATION
              </span>
            </div>

            <ul className="sidenav_lists" style={{ paddingLeft: "0", height: "700px" }}>
              {pageNames.map((page, index) => (
                <li key={index} className="text-white p-2 d-flex align-items-center">
                  <Link 
                    to={pageLinks[index]} 
                    className="text-white p-2 d-flex align-items-center"
                  >
                    {pagelogos[index]} {page}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col className="border px-0" style={{ backgroundColor: "#f6f6f6" }}>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SideNavigation;

