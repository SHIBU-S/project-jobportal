

import { Container, Row, Col } from "react-bootstrap";
import AdminPageImg from './AdminPage-Img.png';
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Categories from "./Categories";
import { useState } from "react";

import { AiFillDashboard } from "react-icons/ai";


function SideNavigation(){

    const [activePage, setActivePage] = useState(1); 

    const pageNames = ["Dashboard","Categories","Service","Bannar","Blog","Users","Orders"];
    const pagelogos = [<AiFillDashboard />]

    const items = [];
    for (let number = 1; number <= 7; number++) {
      items.push(
        <li key={number} active={number === activePage} onClick={() => setActivePage(number)} className="text-white p-2 d-flex align-items-center">
           {pagelogos[number-1]}  {pageNames[number - 1]}
        </li>
      );
    }

    return(
        <>
            <Container fluid style={{ boxShadow: "0px 0px 3px #ccc" }}>
                <Row>
                    <div style={{ border: "1px solid #eee", width: "235px", padding: "14px 15px" }}>
                        <Link to=""><img src={AdminPageImg} className="img-fluid" alt="..." /></Link>
                    </div>
                </Row>
            </Container>

            <Container fluid className="border  ">
                <Row style={{height:"700px"}}>
                    <Col sm={2} className="border border-dark px-0" >
                        <div className="p-2" style={{backgroundColor:"#19222E"}}>
                            <span className="text-white p-2"> NAVIGATION</span>
                        </div>

                        <ul className="sidenav_lists" style={{paddingLeft:"0",height:"700px"}}>
                            {items}
                        </ul>
                    </Col>

                    <Col className="border border-dark" >
                        {activePage === 1 && (<Dashboard/>)}
                        {activePage === 2 && (<Categories/>)}
                    </Col> 
                </Row>
            </Container>
        </>
    )
}

export default SideNavigation;






