
import { Container, Row, Col } from "react-bootstrap";
import AdminPageImg from './AdminPage-Img.png';
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Categories from "./Categories";
import { useState } from "react";

function SideNavigation(){

    const [display,setdisplay] = useState("");

    return(
        <>
            <Container fluid style={{ boxShadow: "0px 0px 3px #ccc" }}>
                <Row>
                    <div style={{ border: "1px solid #eee", width: "235px", padding: "14px 15px" }}>
                        <Link to=""><img src={AdminPageImg} className="img-fluid" alt="..." /></Link>
                    </div>
                </Row>
            </Container>

            <Container fluid className="border border-dark">
                <Row style={{height:"500px"}}>
                    <Col sm={2} className="border border-dark px-0" >
                        <div className="p-2" style={{backgroundColor:"#19222E"}}>
                            <span className="text-white p-2"> NAVIGATION</span>
                        </div>

                        <ul className="sidenav_lists" style={{paddingLeft:"0"}}>
                            <li className="p-2" onClick={Dashboard}><Link to="/Dashboard">Dashboard</Link></li>
                            <li className="p-2"><Link to="/Categories">Categories</Link></li>
                            <li className="p-2"><Link to=""></Link> Service</li>
                            <li className="p-2"><Link to=""></Link> Bannar</li>
                            <li className="p-2"><Link to=""></Link> Blog</li>
                            <li className="p-2"><Link to=""></Link> Users</li>
                            <li className="p-2"><Link to=""></Link> Orders</li>
                        </ul>
                    </Col>

                    <Col className="border border-dark" >
                        <Dashboard/>
                    </Col> 
                </Row>
            </Container>
        </>
    )
}

export default SideNavigation;


