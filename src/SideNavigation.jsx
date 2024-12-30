// import { Container, Row, Col } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import { IoLogOutOutline } from "react-icons/io5";
// import { HiUserCircle } from "react-icons/hi2";
// import { FaCaretDown } from "react-icons/fa";
// import DemoUserLogo from './DemoUserlogo.png';
// import AdminPageImg from './AdminPage-Img.png';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import Dashboard from './Dashboard';
// import { RxHamburgerMenu } from "react-icons/rx";
// import { TfiAngleDoubleRight } from "react-icons/tfi";
// import { PiGreaterThan } from "react-icons/pi";
// import Categories from './Categories';
// import AddCategory from './AddCategory';


// function SideNavigation() {
//     const [activeTab, setActiveTab] = useState("Dashboard");
//     const [activesubmenus, setactivesubmenus] = useState(null);
//     const [isDisplay, setIsDisplay] = useState(false);
//     const [Catalog_submenuVisible, setCatalog_SubmenuVisible] = useState(false);

//     function displaylists() {
//         setIsDisplay(true);
//     }

//     function handleTabClick(tab){
//         setActiveTab(tab);
//     };

//     function displayCatalogmenus(){
//         setCatalog_SubmenuVisible(!Catalog_submenuVisible);
//     }

//     return (
//         <>
//             <Container fluid style={{ boxShadow: "0px 0px 3px #ccc" }}>
//                 <Row>
//                     <Col>
//                         <div className="p-2" style={{ border: "1px solid #eee", width: "235px" }}>
//                             <Link to=""><img src={AdminPageImg} className="img-fluid" alt="..." /></Link>
//                         </div>
//                     </Col>

//                     <Col className="pe-0 d-flex align-items-center">
//                         <div className="position-relative Demo_Logout d-flex p-1 px-2 border align-items-center ms-auto gap-2" onClick={displaylists}>
//                             <img src={DemoUserLogo} className="img-fluid rounded-circle" alt="..." />
//                             Demo User <FaCaretDown />
//                             <ul className={`bg-white px-4 py-2 Demo_User_lists ${isDisplay ? 'show' : ''}`}>
//                                 <li className=" d-flex align-items-center gap-1"><HiUserCircle />Your Profile</li>
//                                 <li className="mt-3"><span className="fw-light">Stores</span></li>
//                                 <li><span>My Demo Shop</span></li>
//                             </ul>
//                         </div>

//                         <div className="Demo_Logout p-3 border">
//                             <IoLogOutOutline /> Logout
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>

//             <Container fluid>
//                 <Row style={{height:"700px"}}>
//                     <Col md={2} className='px-0'>
//                         <Nav justify variant="tabs" activeKey={activeTab} className='d-block sidenav_lists' style={{paddingLeft:"0",height:"700px"}}>
//                             <div className="p-2" style={{ backgroundColor: "#19222E" }}>
//                                 <span className="text-white p-1 d-flex align-items-center"><RxHamburgerMenu /> NAVIGATION</span>
//                             </div>
//                             <Nav.Item className='text-start d-flex navitem'>
//                                 <Nav.Link className='text-white d-flex align-items-center' eventKey="dashboard" onClick={() => handleTabClick('Dashboard')}>Dashboard <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item className='text-start navitem'>
//                                 <Nav.Link eventKey="catalog" className='text-white d-flex align-items-center' onClick={displayCatalogmenus}>Catalog <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
//                                     {Catalog_submenuVisible && (
//                                         <ul className='sidenav_submenus ps-0 mb-0'>
//                                             <li className="p-1 ps-4"><Nav.Link eventKey="catagories" onClick={() => { setActiveTab('Categories'); setactivesubmenus("Categories"); }}><TfiAngleDoubleRight/> Categories</Nav.Link></li>
//                                             <li className="p-1 ps-4"><Nav.Link eventKey="Attributes"><TfiAngleDoubleRight/> Attributes</Nav.Link></li>
//                                             <li className="p-1 ps-4"><Nav.Link eventKey="Product"><TfiAngleDoubleRight/> Product</Nav.Link></li>
//                                         </ul>
//                                     )}
//                             </Nav.Item>
//                             <Nav.Item className='text-start navitem'>
//                                 <Nav.Link className='text-white d-flex align-items-center' eventKey="service" onClick={() => handleTabClick('Service')}>Service <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item className='text-start navitem'>
//                                 <Nav.Link className='text-white d-flex align-items-center' eventKey="banner" onClick={() => handleTabClick('Banner')}>Banner <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item className='text-start navitem'>
//                                 <Nav.Link className='text-white d-flex align-items-center' eventKey="blog" onClick={() => handleTabClick('Blog')}>Blog <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item className='text-start navitem'>
//                                 <Nav.Link className='text-white d-flex align-items-center' eventKey="users" onClick={() => handleTabClick('Users')}>Users <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item className='text-start navitem'>
//                                 <Nav.Link className='text-white d-flex align-items-center' eventKey="orders" onClick={() => handleTabClick('Orders')}>Orders <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                     </Col>

//                     <Col className='px-0'>
//                     {
//                          ((activeTab === "Dashboard" || activeTab === "Service" || activeTab === "Banner" || activeTab === "Blog" || activeTab === "Users" || activeTab === "Orders") && <Dashboard />) 
//                         || ( activeTab === "Categories" && <Categories setActiveTab={setActiveTab}/> )
//                         || (activeTab === "AddCategory" &&  <AddCategory setActiveTab={setActiveTab}/>)
//                     }
//                     </Col>


//                 </Row>
//             </Container>
//         </>
//     );
// }

// export default SideNavigation;





import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { IoLogOutOutline } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi2";
import { FaCaretDown } from "react-icons/fa";
import DemoUserLogo from './DemoUserlogo.png';
import AdminPageImg from './AdminPage-Img.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './Dashboard';
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { PiGreaterThan } from "react-icons/pi";
import Categories from './Categories';
import AddCategory from './AddCategory';
import Jobs from './Jobs';


function SideNavigation() {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const [activesubmenus, setactivesubmenus] = useState(null);
    const [isDisplay, setIsDisplay] = useState(false);
    const [Catalog_submenuVisible, setCatalog_SubmenuVisible] = useState(false);

    function displaylists() {
        setIsDisplay(true);
    }
    function displayCatalogmenus(){
        setCatalog_SubmenuVisible(!Catalog_submenuVisible);
    }

    return (
        <>
            <Container fluid style={{ boxShadow: "0px 0px 3px #ccc" }}>
                <Row>
                    <Col>
                        <div className="p-2" style={{ border: "1px solid #eee", width: "235px" }}>
                            <Link to=""><img src={AdminPageImg} className="img-fluid" alt="..." /></Link>
                        </div>
                    </Col>

                    <Col className="pe-0 d-flex align-items-center">
                        <div className="position-relative Demo_Logout d-flex p-1 px-2 border align-items-center ms-auto gap-2" onClick={displaylists}>
                            <img src={DemoUserLogo} className="img-fluid rounded-circle" alt="..." />
                            Demo User <FaCaretDown />
                            <ul className={`bg-white px-4 py-2 Demo_User_lists ${isDisplay ? 'show' : ''}`}>
                                <li className=" d-flex align-items-center gap-1"><HiUserCircle />Your Profile</li>
                                <li className="mt-3"><span className="fw-light">Stores</span></li>
                                <li><span>My Demo Shop</span></li>
                            </ul>
                        </div>

                        <div className="Demo_Logout p-3 border">
                            <IoLogOutOutline /> Logout
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row style={{height:"700px"}}>
                    <Col md={4} lg={2} className='px-0'>
                        <Nav justify variant="tabs" activeKey={activeTab} className='d-block sidenav_lists' style={{paddingLeft:"0",height:"700px"}}>
                            <div className="p-2" style={{ backgroundColor: "#19222E" }}>
                                <span className="text-white p-1 d-flex align-items-center"><RxHamburgerMenu /> NAVIGATION</span>
                            </div>
                            <Nav.Item className='text-start d-flex navitem'>
                                <Nav.Link className='text-white d-flex align-items-center' eventKey="dashboard" onClick={() => setActiveTab("Dashboard")}>Dashboard <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='text-start navitem'>
                                <Nav.Link eventKey="catalog" className='text-white d-flex align-items-center' onClick={displayCatalogmenus}>Catalog <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
                                    {Catalog_submenuVisible && (
                                        <ul className='sidenav_submenus ps-0 mb-0'>
                                            <li className="p-1 ps-4"><Nav.Link eventKey="categories" onClick={() => { setActiveTab('Categories'); setactivesubmenus("Categories"); }}><TfiAngleDoubleRight/> Categories</Nav.Link></li>
                                            {/* <li className="p-1 ps-4"><Nav.Link eventKey="Attributes"><TfiAngleDoubleRight/> Attributes</Nav.Link></li>
                                            <li className="p-1 ps-4"><Nav.Link eventKey="Product"><TfiAngleDoubleRight/> Product</Nav.Link></li> */}
                                        </ul>
                                    )}
                            </Nav.Item>
                            <Nav.Item className='text-start navitem'>
                                <Nav.Link className='text-white d-flex align-items-center' eventKey="jobs" onClick={() => setActiveTab("Jobs")}>Jobs <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='text-start navitem'>
                                <Nav.Link className='text-white d-flex align-items-center' eventKey="service" onClick={() => setActiveTab("Service")}>Service <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='text-start navitem'>
                                <Nav.Link className='text-white d-flex align-items-center' eventKey="banner" onClick={() => setActiveTab("Banner")}>Banner <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='text-start navitem'>
                                <Nav.Link className='text-white d-flex align-items-center' eventKey="blog" onClick={() => setActiveTab("Blog")}>Blog <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='text-start navitem'>
                                <Nav.Link className='text-white d-flex align-items-center' eventKey="users" onClick={() => setActiveTab("Users")}>Users <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='text-start navitem'>
                                <Nav.Link className='text-white d-flex align-items-center' eventKey="orders" onClick={() => setActiveTab("Service")}>Orders <PiGreaterThan className="ms-auto p-1"/></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col className='px-0'>
                    {
                         ((activeTab === "Dashboard" || activeTab === "Service" || activeTab === "Banner" || activeTab === "Blog" || activeTab === "Users" || activeTab === "Orders") && <Dashboard />) 
                        || ( activeTab === "Categories" && <Categories setActiveTab={setActiveTab}/> )
                        || ( activeTab === "Jobs" && <Jobs setActiveTab={setActiveTab}/> )
                        || (activeTab === "AddCategory" &&  <AddCategory setActiveTab={setActiveTab}/>)
                    }
                    </Col>


                </Row>
            </Container>
        </>
    );
}

export default SideNavigation;



