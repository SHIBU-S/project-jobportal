import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function ContactUsPage(){
    return(
        <>
        <Header/>

            <Container fluid className="border AboutUsPage pb-5" style={{height:"auto"}}>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <div className="text-white">
                                <h1 className="SubPageTitle pb-4">Contact Us</h1>
                                <p className="mt-3">Business plan draws on a wide range of knowledge from different business <br />
                                                    disciplines.Business draws on a wide range of different business .</p>
                                <ul className="breadcrumb-nav d-flex ps-0 mt-5">
                                    <li className="pe-3" style={{borderRight:"3px solid white"}}><Link to="/" style={{color:"#fff"}}>Home</Link></li>
                                    <li className="ps-3">Contact Us</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className="border" style={{backgroundColor:"#f6f9fc"}}>
                <Container className="mt-5" style={{backgroundColor:"#fff",boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                    <Row>
                        <Col lg={7}>
                            <div className="mmain-form" style={{padding:"50px 35px 50px 50px"}}>
                                <form action="">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="form-group"><input type="text" name="name" placeholder="Your Name" required="required" /></div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form-group"><input type="text" name="subject" placeholder="Your Subject" required="required" /></div>
                                        </Col>

                                        <Col lg={6}>
                                            <div className="form-group mt-3"><input type="email" name="email" placeholder="Your Email" required="required" /></div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form-group mt-3"><input type="number" name="phone" placeholder="Your Phone" required="required" /></div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="form-group-message mt-3"><textarea name="message" placeholder="Your Message"></textarea></div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mt-3"><button type="submit" style={{backgroundColor:"#2042e3",padding:"15px 30px",color:"#fff",border:"none"}}>Submit message</button></div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>

                        <Col lg={5}>
                            <div  style={{padding:"50px 35px 50px 50px"}}>
                                <h4>Contact Information</h4>
                                <p>Business consulting excepteur sint occaecat cupidatat consulting non proident.</p>
                                <div className="contact-info d-flex align-items-center mt-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                    </svg> <li className="ms-3">+522 672-452-1120</li>
                                </div>

                                <div className="contact-info d-flex align-items-center mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg> <li className="ms-3">example@yourwebsite.com</li>
                                </div>

                                <div className="contact-info d-flex mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-map" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
                                    </svg> <li className="ms-3">KA-62/1, Travel Agency, 45 Grand Central Terminal, New York.</li>
                                </div>

                                <h5 className="mt-5">Follow Us on</h5>
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
                    </Row>
                </Container>

                <Container className="mt-5 p-3" style={{backgroundColor:"#fff"}}>
                    <div ><iframe width="100%" height={400} src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"></iframe></div>
                </Container>
            </Container>

            <Footer/>
        </>
    )
}

export default ContactUsPage;