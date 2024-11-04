import { Container,Row,Col } from "react-bootstrap";


function ApplyProcess(){
    return(
        <>
            <Container fluid className="border mt-1" style={{height:"auto",backgroundColor:"#2042e3"}}>
                <Container>
                    <Row className="my-5 text-white text-sm-start text-md-center text-lg-start">
                        <Col sm={12} md={4} className="pt-2 d-flex d-md-block d-lg-flex ">
                            <div className="pt-4 applyprocess-logodiv"> 
                                <svg className=" p-2 applyprocesslogo  rounded-circle" fill="white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 32 32">
                                    <path d="M 16 4 C 12.144531 4 9 7.144531 9 11 C 9 13.394531 10.21875 15.519531 12.0625 16.78125 C 8.484375 18.304688 6 21.859375 6 26 L 8 26 C 8 21.535156 11.535156 18 16 18 C 20.464844 18 24 21.535156 24 26 L 26 26 C 26 21.859375 23.515625 18.304688 19.9375 16.78125 C 21.78125 15.519531 23 13.394531 23 11 C 23 7.144531 19.855469 4 16 4 Z M 16 6 C 18.773438 6 21 8.226563 21 11 C 21 13.773438 18.773438 16 16 16 C 13.226563 16 11 13.773438 11 11 C 11 8.226563 13.226563 6 16 6 Z"></path>
                                </svg>
                            </div>
                            <div className="mt-2 ms-4 ms-md-0 ms-lg-4">
                                <h4 className="applyprocesstitle d-flex py-3 mb-3">Register Your Account</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Col>


                        <Col sm={12} md={4} className="pt-2 d-flex d-md-block d-lg-flex ">
                            <div className="pt-4 applyprocess-logodiv">
                                <svg className=" p-2 applyprocesslogo  rounded-circle" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-journal-richtext" viewBox="0 0 16 16">
                                    <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                                </svg>
                            </div>
                            <div className="mt-2 ms-4 ms-md-0 ms-lg-4">
                                <h4 className="applyprocesstitle d-flex py-3 mb-3">Upload Your Resume</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Col>


                        <Col sm={12} md={4} className="pt-2 d-flex d-md-block d-lg-flex">
                            <div className="pt-4 applyprocess-logodiv">
                                <svg className=" p-3 applyprocesslogo rounded-circle" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </div>
                            <div className="mt-2 ms-4 ms-md-0 ms-lg-4">
                                <h4 className=" applyprocesstitle py-3 mb-3">Apply for Dream Job</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default ApplyProcess;