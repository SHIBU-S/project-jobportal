
import { Container, Row, Col, Modal } from "react-bootstrap";
import bodyimage from './hero-image.png';
import React, { useState } from 'react';
import Button from "react-bootstrap/Button";

function Body() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container fluid className="border border-light" style={{ height: "auto", backgroundColor: "#f6f9fc" }}>
                <Container className="mt-0 mt-lg-4">
                    <Row className="pt-0 pt-lg-5 pb-lg-5 pb-xxl-0  mb-5 mb-xxl-0">
                        <Col sm={12} lg={6} className="mt-0 mt-lg-4 pt-4 pt-md-5 p-0 p-md-3">
                            <h1 className="bodypage-title" style={{animationDuration:"0.3s"}}>Find Your Career <br /> to Make a Better Life</h1>
                            <p className="body-animation mt-4 lightcolorline" style={{animationDuration:"0.5s"}}>
                                Creating a beautiful job website is not easy <br />
                                always. To make your life easier, we are <br />
                                introducing Jobcamp template.
                            </p>

                            <div className="job-search body-animation position-relative mt-5" style={{animationDuration:"0.7s"}}>
                                <form action="" className="d-flex position-relative" style={{ padding: "10px 10px 10px 0" }}>
                                    <div style={{ padding: "0 30px" }} className="whatjobs-div position-relative">
                                        <label htmlFor="whatjobs" className="form-label"> What</label>
                                        <input type="text" id="whatjobs" placeholder="What jobs you want?" style={{padding:"0",border:"0",outline:"0",width:"100%"}} />
                                    </div>
                                    <div style={{ padding: "0 30px" }}>
                                        <label htmlFor="locationname" className="form-label"> Where</label>
                                        <input type="text" id="locationname" placeholder="Location" style={{padding:"0",border:"0",outline:"0",width:"100%"}}  />
                                    </div>
                                    <div className="jobsearch-button d-flex align-items-center justify-content-center px-5" style={{ width: "28%" }}>
                                        <button type="submit" className="btn">Search</button>
                                    </div>

                                </form>
                            </div>

                            <div className="mt-4 body-animation" style={{animationDuration:"0.7s"}}>
                                <div className="d-block d-md-flex keywords">
                                    <span style={{ color: "#2042e3" }}>Popular Keywords: </span>
                                    <ul className="d-flex p-0 ms-0 ms-md-3 ms-lg-2 ms-xxl-3">
                                        <li className=" px-2"><a href="#">Administrative</a></li>
                                        <li className=" px-2"><a href="#">Android</a></li>
                                        <li className=" px-2"><a href="#">app</a></li>
                                        <li className=" px-2"><a href="#">ASP.NET</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} lg={6} className="body-img d-none d-lg-block position-relative">
                            <img src={bodyimage} className="img-fluid" alt="..." />
                            <a href="#" onClick={handleShow} className="video p-5 rounded-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="30" height="30" viewBox="0 0 48 48">
                                    <path d="M 11.396484 4.1113281 C 9.1042001 4.2020187 7 6.0721788 7 8.5917969 L 7 39.408203 C 7 42.767694 10.742758 44.971891 13.681641 43.34375 L 41.490234 27.935547 C 44.513674 26.260259 44.513674 21.739741 41.490234 20.064453 L 13.681641 4.65625 C 12.94692 4.2492148 12.160579 4.0810979 11.396484 4.1113281 z M 11.431641 7.0664062 C 11.690234 7.0652962 11.961284 7.1323321 12.226562 7.2792969 L 40.037109 22.6875 C 41.13567 23.296212 41.13567 24.703788 40.037109 25.3125 L 12.226562 40.720703 C 11.165446 41.308562 10 40.620712 10 39.408203 L 10 8.5917969 C 10 7.9855423 10.290709 7.5116121 10.714844 7.2617188 C 10.926911 7.136772 11.173048 7.0675163 11.431641 7.0664062 z"></path>
                                </svg>
                            </a>
                        </Col>

                        <Modal show={show} onHide={handleClose} dialogClassName="modal-fullscreen" >
                            <Modal.Body className="videopage">
                            <Button variant="close" onClick={handleClose} className='position-absolute top-0 end-0 m-2 px-5 py-3 closeit' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                                </svg>
                            </Button>
                                <div className="embed-responsive embed-responsive-16by9 videobox">
                                    <div className=" mt-5 d-flex align-items-center justify-content-center" style={{height:"600px"}}><iframe
                                        className="embed-responsive-item"
                                        src="https://www.youtube.com/embed/cz4z8CyvDas"
                                        title="Video"
                                        allowFullScreen
                                        style={{width:"60%",height:"450px"}}
                                        >
                                    </iframe></div>
                                </div>
                            </Modal.Body>
                        </Modal>

                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Body;
