import { Container,Row,Col } from "react-bootstrap";
import TestimonialImg from './Testimonial-Img.png';
import TestimonialPatternImg from './Testimonial-PatternImg.png';

import Carousel from 'react-bootstrap/Carousel';
import Testlogo1 from './Test-logo1.jpg';
import Testlogo2 from './Test-logo2.jpg';
import Testlogo3 from './Test-logo3.jpg';
import Testlogo4 from './Test-logo4.jpg';


function Testimonials(){
    return(
        <>
            <Container fluid className="Testimonial border border-dark pb-5 pb-md-0">
                <Container style={{height:"auto"}}>
                    <Row>
                        <Col sm={12} md={12} lg={6} className="Testimonial-leftside" style={{animationDelay:"0.3s"}}>
                            <div className="mt-5 pt-5">
                                <span style={{textTransform:"uppercase",color:"#fff",backgroundColor:"#2042e3",fontSize:"12px",padding:"5px 18px",borderRadius:"4px"}}>
                                    What saye's Our Clients
                                </span>
                                <h2 className="mt-2 pb-3 Testimonial-title" style={{color:"#fff",fontSize:"35px",fontWeight:"700"}}>
                                    Our Testimonials
                                </h2>
                            </div>
                            <div className="Testimonial-PatternImg1">
                                <img src={TestimonialPatternImg} class="img-fluid" alt="..." />
                            </div>

                            <div className="mt-0 mt-lg-4 pt-3 ">
                            <Carousel>
                                <Carousel.Item style={{height:"auto"}}>
                                    <Carousel.Caption className="text-start ">
                                        <div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-quote" viewBox="0 0 16 16"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/></svg></div>
                                        <p>" I just brought it and i love it. Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s." </p>
                                        <Row className="mt-5">
                                            <Col xs={3} md={2}><div style={{backgroundColor:"#ffffff21"}} className="rounded-circle p-1"><img src={Testlogo1} class="img-fluid rounded-circle" alt="..." /></div></Col>
                                            <Col xs={9} md={10}>
                                                <div className="mt-3 mt-md-4">
                                                    <h4 className="mt-lg-4 mb-0" style={{fontSize:"17px"}}>Musharof Chowdhury</h4>
                                                    <span style={{fontSize:"13px",color:"#888"}}>CEO - Graygrids</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item style={{height:"auto"}}>
                                    <Carousel.Caption className="text-start">
                                        <div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-quote" viewBox="0 0 16 16"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/></svg></div>
                                        <p>" I just brought it and i love it. Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s." </p>
                                        <Row className="mt-5">
                                            <Col xs={3} md={2}><div style={{backgroundColor:"#ffffff21"}} className="rounded-circle p-1"><img src={Testlogo2} class="img-fluid rounded-circle" alt="..." /></div></Col>
                                            <Col xs={9} md={10}>
                                                <div className="mt-3 mt-md-4">
                                                    <h4 className="mt-4 mb-0" style={{fontSize:"17px"}}>Goro Chala </h4>
                                                    <span style={{fontSize:"13px",color:"#888"}}>CEO - Dream App</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item style={{height:"auto"}}>
                                    <Carousel.Caption className="text-start">
                                        <div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-quote" viewBox="0 0 16 16"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/></svg></div>
                                        <p>" I just brought it and i love it. Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s." </p>
                                        <Row className="mt-5">
                                            <Col xs={3} md={2}><div style={{backgroundColor:"#ffffff21"}} className="rounded-circle p-1"><img src={Testlogo3} class="img-fluid rounded-circle" alt="..." /></div></Col>
                                            <Col xs={9} md={9}>
                                                <div className="mt-3 mt-md-4">
                                                    <h4 className="mt-4 mb-0" style={{fontSize:"17px"}}>Karmo kerin</h4>
                                                    <span style={{fontSize:"13px",color:"#888"}}>CEO - Tredex</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item style={{height:"auto"}}>
                                    <Carousel.Caption className="text-start">
                                        <div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-quote" viewBox="0 0 16 16"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/></svg></div>
                                        <p>" I just brought it and i love it. Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s." </p>
                                        <Row className="mt-5">
                                            <Col xs={3} md={2}><div style={{backgroundColor:"#ffffff21"}} className="rounded-circle p-1"><img src={Testlogo4} class="img-fluid rounded-circle" alt="..." /></div></Col>
                                            <Col xs={9} md={10}>
                                                <div className="mt-3 mt-md-4">
                                                    <h4 className="mt-4 mb-0" style={{fontSize:"17px"}}>Karmo kerin</h4>
                                                    <span style={{fontSize:"13px",color:"#888"}}>CEO - Tredex</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel> 

                            </div>
                        </Col>

                        <Col sm={12} lg={6} className="Testimonial-Rightside d-none d-lg-flex justify-content-end">
                            <div className="Testimonial-Img mt-5 pt-3">
                                <img src={TestimonialImg} class="img-fluid" alt="..." />
                            </div>
                            <div className="Testimonial-PatternImg2">
                                <img src={TestimonialPatternImg} class="img-fluid" alt="..." />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Testimonials;