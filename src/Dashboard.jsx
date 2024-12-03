
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import { PiCreditCard } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdSettings } from "react-icons/md";

function Dashboard(){

    return(
        <>
            <Container fluid>
                <Row className="border">
                    <Col className="d-flex align-items-center">
                        <h2 className="Dashboard_title">Dashboard</h2>
                        <ul className="d-flex pt-4 Dashboard_lists">
                            <li><Link to="" className="text-decoration-none text-dark pe-3">Home</Link></li>
                            <li><Link to=""  className="text-decoration-none">Dashboard</Link></li>    
                        </ul>    
                    </Col>

                    <Col>
                        <div className="settingslogo border ms-auto mt-3 d-flex align-items-center justify-content-center"> <MdSettings fill="white"/></div>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col md={3}>
                        <div className="border" style={{backgroundColor:"#1b80c2"}}>
                            <div className="" style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}><h6 className="d-flex p-1 text-white" style={{textTransform:"uppercase",textShadow:"0 -1px 0 rgba(0, 0, 0, .4)"}}>Total Orders <span style={{color:"whitesmoke"}} className="ms-auto">0%</span></h6></div>
                            <div className="p-2 d-flex align-items-center"><ImCart className="fs-1" style={{fill:"whitesmoke"}}/><h2 style={{fontSize:"42px",fontWeight:"400"}} className=" ms-auto text-white">757</h2></div>
                            <div className="p-1" style={{backgroundColor:"rgba(0, 0, 0, 0.1)"}}><Link className="text-decoration-none text-white" to="">View more..</Link></div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="border" style={{backgroundColor:"#1b80c2"}}>
                            <div className="" style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}><h6 className="d-flex p-1 text-white" style={{textTransform:"uppercase",textShadow:"0 -1px 0 rgba(0, 0, 0, .4)"}}>Total Sales <span style={{color:"whitesmoke"}} className="ms-auto">0%</span></h6></div>
                            <div className="p-2 d-flex align-items-center"><PiCreditCard className="fs-1" style={{fill:"whitesmoke"}}/><h2 style={{fontSize:"42px",fontWeight:"400"}} className=" ms-auto text-white">146.9K</h2></div>
                            <div className="p-1" style={{backgroundColor:"rgba(0, 0, 0, 0.1)"}}><Link className="text-decoration-none text-white" to="">View more..</Link></div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="border" style={{backgroundColor:"#1b80c2"}}>
                            <div className="" style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}><h6 className="d-flex p-1 text-white" style={{textTransform:"uppercase",textShadow:"0 -1px 0 rgba(0, 0, 0, .4)"}}>Total Customers <span style={{color:"whitesmoke"}} className="ms-auto">0%</span></h6></div>
                            <div className="p-2 d-flex align-items-center"><FaUser className="fs-1" style={{fill:"whitesmoke"}}/><h2 style={{fontSize:"42px",fontWeight:"400"}} className=" ms-auto text-white">900</h2></div>
                            <div className="p-1" style={{backgroundColor:"rgba(0, 0, 0, 0.1)"}}><Link className="text-decoration-none text-white" to="">View more..</Link></div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="border" style={{backgroundColor:"#1b80c2"}}>
                            <div className="" style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}><h6 className="d-flex p-1 text-white" style={{textTransform:"uppercase",textShadow:"0 -1px 0 rgba(0, 0, 0, .4)"}}>People Online <span style={{color:"whitesmoke"}} className="ms-auto">0%</span></h6></div>
                            <div className="p-2 d-flex align-items-center"><FaUsers className="fs-1" style={{fill:"whitesmoke"}}/><h2 style={{fontSize:"42px",fontWeight:"400"}} className=" ms-auto text-white">5</h2></div>
                            <div className="p-1" style={{backgroundColor:"rgba(0, 0, 0, 0.1)"}}><Link className="text-decoration-none text-white" to="">View more..</Link></div>
                        </div>
                    </Col>
                </Row>

                
                <Row>
                    <Col>
                        <div className="border mt-3" style={{height:"300px"}}>
                            <div className="border p-1"><h6>World Map</h6></div>
                            <div><iframe width="100%" height={250} src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"></iframe></div>
                        </div>
                    </Col>

                    <Col>
                        <div className="border mt-3" style={{height:"300px"}}>
                            <div className="border p-1"><h6>Sales Analytics</h6></div>
                            <div>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;