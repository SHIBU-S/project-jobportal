
import { Container, Row, Col } from "react-bootstrap";
import AdminPageImg from './AdminPage-Img.png';
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillDashboard } from "react-icons/ai";
import DemoUserLogo from './DemoUserlogo.png';
import { IoLogOutOutline } from "react-icons/io5";

function SideNavbar() {
  const pageNames = ["Dashboard", "Categories", "Service", "Banner", "Blog", "Users", "Orders"];
  const pageLinks = ["/dashboard", "/categories", "/service", "/banner", "/blog", "/users", "/orders"];
  const pagelogos = [<AiFillDashboard />]; // You can extend logos if needed

  return (
    <>

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
        </Row>
    </Container>
    </>
);
}

export default SideNavbar;