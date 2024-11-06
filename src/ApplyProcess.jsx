import { Container,Row,Col } from "react-bootstrap";


function ApplyProcess(){
    return(
        <>
            <Container fluid className="border mt-1" style={{height:"auto",backgroundColor:"#2042e3"}}>
                <Container>
                    <Row className="my-5 text-white text-sm-start text-md-center text-lg-start">
                        <Col sm={12} md={4} className="pt-2 d-flex d-md-block d-lg-flex applyprocess-logodiv">
                            <div className="pt-4 "> 
                                <svg className=" p-2 applyprocesslogo  rounded-circle" fill="white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 32 32">
                                    <path d="M 16 4 C 12.144531 4 9 7.144531 9 11 C 9 13.394531 10.21875 15.519531 12.0625 16.78125 C 8.484375 18.304688 6 21.859375 6 26 L 8 26 C 8 21.535156 11.535156 18 16 18 C 20.464844 18 24 21.535156 24 26 L 26 26 C 26 21.859375 23.515625 18.304688 19.9375 16.78125 C 21.78125 15.519531 23 13.394531 23 11 C 23 7.144531 19.855469 4 16 4 Z M 16 6 C 18.773438 6 21 8.226563 21 11 C 21 13.773438 18.773438 16 16 16 C 13.226563 16 11 13.773438 11 11 C 11 8.226563 13.226563 6 16 6 Z"></path>
                                </svg>
                            </div>
                            <div className="mt-2 ms-4 ms-md-0 ms-lg-4">
                                <h4 className="applyprocesstitle d-flex py-3 mb-3">Register Your Account</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Col>


                        <Col sm={12} md={4} className="pt-2 d-flex d-md-block d-lg-flex applyprocess-logodiv">
                            <div className="pt-4">
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


                        <Col sm={12} md={4} className="pt-2 d-flex d-md-block d-lg-flex applyprocess-logodiv">
                            <div className="pt-4">
                                <svg className=" p-2 applyprocesslogo  rounded-circle" xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="60" height="60" viewBox="0 0 64 64">
                                    <path d="M 29 7 C 25.686 7 23 9.686 23 13 L 15 13 C 11.686 13 9 15.686 9 19 L 9 45 C 9 48.314 11.686 51 15 51 L 49 51 C 52.314 51 55 48.314 55 45 L 55 19 C 55 15.686 52.314 13 49 13 L 41 13 C 41 9.686 38.314 7 35 7 L 29 7 z M 29 11 L 35 11 C 36.104 11 37 11.895 37 13 L 27 13 C 27 11.895 27.896 11 29 11 z M 15 17 L 49 17 C 50.105 17 51 17.895 51 19 L 51 27.328125 C 47.860304 27.865386 40.276945 29 32 29 C 23.725715 29 16.142076 27.866066 13 27.328125 L 13 19 C 13 17.895 13.895 17 15 17 z M 13 31.384766 C 15.851521 31.855688 20.994182 32.574326 27 32.865234 L 27 33 C 27 34.105 27.895 35 29 35 L 34 35 C 35.105 35 36 34.105 36 33 L 36 32.917969 C 42.43805 32.665598 47.988855 31.881828 51 31.384766 L 51 45 C 51 46.105 50.105 47 49 47 L 15 47 C 13.895 47 13 46.105 13 45 L 13 31.384766 z"></path>
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