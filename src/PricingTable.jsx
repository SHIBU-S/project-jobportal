import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";


function PricingTable(){
    return(
        <>
            <Container fluid className="border pb-5" style={{backgroundColor:"#f6f9fc"}}>
                <Container className="mt-3 mt-lg-5 pt-5" style={{height:"auto"}}>
                    <Row className="text-center">
                        <Col>
                            <span style={{backgroundColor:"#2042e3",fontSize:"12px",padding:"5px 18px",borderRadius:"4px",lineHeight:"22px",color:"#fff",textTransform:"uppercase"}}>
                                Pricing Table
                            </span>
                            <h2 className="PricingTable-title mt-2" style={{animationDelay:"0.4s",fontSize:"35px",fontWeight:"700",paddingBottom:"14px",lineHeight:"45px"}}>
                                Our Pricing Plan
                            </h2>
                            <p className="PricingTable-para lightcolorline" style={{animationDelay:"0.6s"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br className="d-lg-block"/> alteration in some form.</p>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-3 mt-lg-5 pt-2 pb-5" style={{height:"auto"}}>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <div className="PricingTable-head" style={{animationDelay:"0.2s",padding:"55px 50px",backgroundColor:"#fff",boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                    <h4 style={{fontSize:"18px",fontWeight:"500"}}>BASIC PACK</h4>
                                    <p className="amount pb-4" style={{fontSize:"40px",fontWeight:"700"}} >$30  <span className="lightcolorline" style={{fontSize:"14px",fontWeight:"400"}}>per month</span></p>
                                    <ul className="PricingTable-lists ps-0 pt-3">
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>  
                                            5+ Listings</li>
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>
                                            Contact With Agent</li>
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>
                                            Contact With Agent</li>
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>
                                            7×24 Fully Support</li>
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>
                                            50GB Space</li>
                                    </ul>
                                    <div className="PricingTable-RegisterButton mt-5">
                                        <Link to="">Register Now</Link>
                                    </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="PricingTable-head mt-4 mt-md-0" style={{animationDelay:"0.4s",padding:"55px 50px",backgroundColor:"#fff",boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                    <h4 style={{fontSize:"18px",fontWeight:"500"}}>STANDARD PACK</h4>
                                    <p className="amount pb-4" style={{fontSize:"40px",fontWeight:"700"}} >$40  <span className="lightcolorline" style={{fontSize:"14px",fontWeight:"400"}}>per month</span></p>
                                    <ul className="PricingTable-lists ps-0 pt-3">
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>  
                                            5+ Listings</li>
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>
                                            Contact With Agent</li>
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>
                                            Contact With Agent</li>
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>
                                            7×24 Fully Support</li>
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>
                                            50GB Space</li>
                                    </ul>
                                    <div className="PricingTable-RegisterButton mt-5">
                                        <Link to="">Register Now</Link>
                                    </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="PricingTable-head mt-4 mt-lg-0" style={{animationDelay:"0.6s",padding:"55px 50px",backgroundColor:"#fff",boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                    <h4 style={{fontSize:"18px",fontWeight:"500"}}>PREMIUM PACK</h4>
                                    <p className="amount pb-4" style={{fontSize:"40px",fontWeight:"700"}} >$60  <span className="lightcolorline" style={{fontSize:"14px",fontWeight:"400"}}>per month</span></p>
                                    <ul className="PricingTable-lists ps-0 pt-3">
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>  
                                            5+ Listings</li>
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>
                                            Contact With Agent</li>
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>
                                            Contact With Agent</li>
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>
                                            7×24 Fully Support</li>
                                        <li className=" mb-3"><svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" x="0px" y="0px" width="17" height="17" viewBox="0 0 40 40"><path fill="blue" d="M4.769,37.5c-1.251,0-2.269-1.018-2.269-2.269V4.769C2.5,3.518,3.518,2.5,4.769,2.5h30.462 c1.251,0,2.269,1.018,2.269,2.269v30.462c0,1.251-1.018,2.269-2.269,2.269H4.769z"></path><path fill="#4e7ab5" d="M35.231,3C36.206,3,37,3.794,37,4.769v30.462C37,36.206,36.206,37,35.231,37H4.769 C3.794,37,3,36.206,3,35.231V4.769C3,3.794,3.794,3,4.769,3H35.231 M35.231,2H4.769C3.24,2,2,3.24,2,4.769v30.462 C2,36.76,3.24,38,4.769,38h30.462C36.76,38,38,36.76,38,35.231V4.769C38,3.24,36.76,2,35.231,2L35.231,2z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11 20.053L16.964 26.018 30.385 12.598"></path></svg>
                                            50GB Space</li>
                                    </ul>
                                    <div className="PricingTable-RegisterButton mt-5">
                                        <Link to="">Register Now</Link>
                                    </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    )
}

export default PricingTable;