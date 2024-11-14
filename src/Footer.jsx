
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import jobportal_logo from './jobportal_logo.svg';


function Footer(){
    return(
        <>
            <Container fluid>
                <Container className="mt-5 mb-5 pt-5">
                    <Row>
                        <Col sm={12} lg={4}>
                            <div>
                                <div> <Link to=""> <img src={jobportal_logo} alt="Job Portal Logo" className="jobportallogo" />  </Link>  </div>
                                <p className="mt-4 lightcolorline">Start building your creative website with our awesome template Massive.</p>
                                <ul className="contact-address ps-0">
                                    <li className="lightcolorline">
                                        <span style={{color:"#081828",fontWeight:"500"}}>Address:</span>  555 Wall Street, USA, NY
                                    </li>
                                    <li className="lightcolorline mt-1">
                                        <span style={{color:"#081828",fontWeight:"500"}}>Email:</span>  example@apus.com
                                    </li>
                                    <li className="lightcolorline mt-1">
                                        <span style={{color:"#081828",fontWeight:"500"}}>Call:</span>  555-555-1234
                                    </li>
                                </ul>
                                <div className="footer-social mt-4">
                                    <ul className="ps-0">
                                        <li className="me-2"><Link to=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg></Link></li>
                                        <li className="me-2"><Link to=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/></svg></Link></li>
                                        <li className="me-2"><Link to=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg></Link></li>
                                        <li ><Link to=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16"><path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/></svg></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} lg={8}>
                            <Row>
                                <Col md={6} lg={4} >
                                    <div>
                                        <h3 style={{fontSize:"20px"}}>For Candidates</h3>
                                        <ul className="for-candidates-employers ps-0 mt-4">
                                            <li className="mt-2"><Link to="" className="lightcolorline">User Dashboard</Link></li>
                                            <li className="mt-2"><Link to="" className="lightcolorline">CV Packages</Link></li>
                                            <li className="mt-2"><Link to="" className="lightcolorline">Jobs Featured</Link></li>
                                            <li className="mt-2"><Link to="" className="lightcolorline">Jobs Urgent</Link></li>
                                            <li className="mt-2"><Link to="" className="lightcolorline">Candidate List</Link></li>
                                            <li className="mt-2"><Link to="" className="lightcolorline">Candidates Grid</Link></li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={6} lg={4} >
                                    <div>
                                        <h3 style={{fontSize:"20px"}}>For Employers</h3>
                                        <ul className="for-candidates-employers ps-0 mt-4">
                                            <li className="mt-2"><Link to="" className="lightcolorline">Post New</Link></li>
                                            <li className="mt-2"><Link to="" className="lightcolorline">Employer List</Link></li>
                                            <li className="mt-2"><Link to="" className="lightcolorline">Employers Grid</Link></li>
                                            <li className="mt-2"><Link to="" className="lightcolorline">Job Packages</Link></li>
                                            <li className="mt-2"><Link to="" className="lightcolorline">Jobs Listing</Link></li>
                                            <li className="mt-2"><Link to="" className="lightcolorline">Jobs Featured</Link></li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={6} lg={4} >
                                    <div>
                                        <h3 style={{fontSize:"20px"}}>Join Our Newsletter</h3>
                                        <p className="lightcolorline mt-4">Subscribe to get the latest jobs posted, candidates...</p>
                                        <form action="">
                                            <input type="email" placeholder="Your email address" style={{padding:"0px 25px",border:"1px solid #eee",height:"50px",width:"100%",borderRadius:"4px"}}/>
                                        </form>
                                        <div className="footer-button mt-3">
                                            <button className="btn" style={{width:"100%"}}>Subscribe Now! </button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

               
            </Container>

            <Container fluid style={{borderTop:"1px solid #eee"}}>
            <Container className="mt-4 mb-3">
                    <Row>
                        <Col sm={12} md={5}>
                            <div className="left text-center text-md-start">
                                <p className="lightcolorline">Designed and Developed by <Link to="" className="lightcolorline">GrayGrids</Link></p>
                            </div>
                        </Col>
                        <Col  sm={12} md={7}>
                            <div className="right text-center text-md-end">
                                <ul>
                                    <li><Link to="" className="lightcolorline me-3">Terms of use</Link></li>
                                    <li><Link to="" className="lightcolorline me-3"> Privacy Policy</Link></li>
                                    <li><Link to="" className="lightcolorline me-3">Faq</Link></li>
                                    <li><Link to="" className="lightcolorline">Contact</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Footer;