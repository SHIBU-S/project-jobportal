import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import { PiCreditCard } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdSettings } from "react-icons/md";
import { PiGreaterThanLight } from "react-icons/pi";
import { BiWorld } from "react-icons/bi";
import { FaChartBar } from "react-icons/fa";
import worldmap from "./Worldmap-img.png";

function Dashboard(){
    return(
        <>
            <Container fluid className="adminpagebg px-3">
                <Row className="border px-1">
                    <Col className="d-flex align-items-center">
                        <h2 className="Dashboard_title">Dashboard</h2>
                        <ul className="d-flex pt-4 Dashboard_lists">
                            <li><Link to="" className="text-decoration-none" style={{color:"grey"}}>Home <PiGreaterThanLight className="p-1"/></Link></li>
                            <li><Link to=""  className="text-decoration-none">Dashboard</Link></li>    
                        </ul>    
                    </Col>

                    <Col>
                        <div className="settingslogo rounded ms-auto mt-3 d-flex align-items-center justify-content-center"> <MdSettings fill="white"/></div>
                    </Col>
                </Row>

                <Row className="mt-3 px-1">
                    <Col md={3}>
                        <div className="border" style={{backgroundColor:"#1b80c2"}}>
                            <div style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}><p className="d-flex p-1 text-white ps-2" style={{textTransform:"uppercase",textShadow:"0 -1px 0 rgba(0, 0, 0, .4)"}}>Total Orders <span style={{color:"whitesmoke"}} className="ms-auto">0%</span></p></div>
                            <div className="px-2 mb-3 d-flex align-items-center dashlogo_box"><ImCart className="fs-1 dashlogo"/><h2 style={{fontSize:"42px",fontWeight:"400"}} className=" ms-auto text-white">757</h2></div>
                            <div className="p-1" style={{backgroundColor:"rgba(0, 0, 0, 0.1)"}}><Link className="text-decoration-none text-white ps-1" to="">View more..</Link></div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="border" style={{backgroundColor:"#1b80c2"}}>
                            <div style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}><p className="d-flex p-1 text-white ps-2" style={{textTransform:"uppercase",textShadow:"0 -1px 0 rgba(0, 0, 0, .4)"}}>Total Sales <span style={{color:"whitesmoke"}} className="ms-auto">0%</span></p></div>
                            <div className="px-2 mb-3 d-flex align-items-center dashlogo_box"><PiCreditCard className="fs-1 dashlogo"/><h2 style={{fontSize:"42px",fontWeight:"400"}} className=" ms-auto text-white">146.9K</h2></div>
                            <div className="p-1" style={{backgroundColor:"rgba(0, 0, 0, 0.1)"}}><Link className="text-decoration-none text-white ps-1" to="">View more..</Link></div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="border" style={{backgroundColor:"#1b80c2"}}>
                            <div style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}><p className="d-flex p-1 text-white ps-2" style={{textTransform:"uppercase",textShadow:"0 -1px 0 rgba(0, 0, 0, .4)"}}>Total Customers <span style={{color:"whitesmoke"}} className="ms-auto">0%</span></p></div>
                            <div className="px-2 mb-3 d-flex align-items-center dashlogo_box"><FaUser className="fs-1 dashlogo"/><h2 style={{fontSize:"42px",fontWeight:"400"}} className=" ms-auto text-white">900</h2></div>
                            <div className="p-1" style={{backgroundColor:"rgba(0, 0, 0, 0.1)"}}><Link className="text-decoration-none text-white ps-1" to="">View more..</Link></div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="border" style={{backgroundColor:"#1b80c2"}}>
                            <div style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}><p className="d-flex p-1 text-white ps-2" style={{textTransform:"uppercase",textShadow:"0 -1px 0 rgba(0, 0, 0, .4)"}}>People Online <span style={{color:"whitesmoke"}} className="ms-auto">0%</span></p></div>
                            <div className="px-2 mb-3 d-flex align-items-center dashlogo_box"><FaUsers className="fs-1 dashlogo"/><h2 style={{fontSize:"42px",fontWeight:"400"}} className=" ms-auto text-white">5</h2></div>
                            <div className="p-1" style={{backgroundColor:"rgba(0, 0, 0, 0.1)"}}><Link className="text-decoration-none text-white ps-1" to="">View more..</Link></div>
                        </div>
                    </Col>
                </Row>

                
                <Row className="px-1">
                    <Col>
                        <div className="border mt-3" style={{height:"auto"}}>
                            <div className="border p-2"><h6 className="d-flex align-items-center gap-1"><BiWorld/> World Map</h6></div>
                           {/* <div><iframe width="100%" height={250} src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"></iframe></div> */}
                            <div><img style={{width:"100%", height:"250px"}} src={worldmap} className="img-fluid" alt="..." /></div>
                        </div>
                    </Col>

                    <Col>
                        <div className="border mt-3" style={{height:"300px"}}>
                            <div className="border p-2"><h6 className="d-flex align-items-center gap-1"><FaChartBar/>Sales Analytics</h6></div>
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