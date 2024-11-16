import { Container,Row,Col } from "react-bootstrap";
import AboutUsPic1 from './AboutUsPic1.jpg';
import AboutUsPic2 from './AboutUsPic2.jpg';
import AboutUsPic3 from './AboutUsPic3.jpg';



function AboutUsSection(){
    return(
        <>
             <Container fluid  className="pb-5">
                <Container className="pt-2 pt-lg-5 pb-2 pb-lg-5 mt-5" style={{height:"auto"}}>
                    <Row className="d-flex justify-content-center">
                        <Col sm={12} md={10} lg={5} className="aboutUs-animation" style={{animationDelay:"0.3s"}}>
                            <div className="aboutus-box">
                            <Row>
                                <Col xs={6} sm={6} lg={6} className=" ps-0"><img src={AboutUsPic1} class="img-fluid" alt="..." style={{width:"100%",borderRadius:"5px"}}/></Col>
                                <Col xs={6} sm={6} lg={6} className=" pe-0"><img src={AboutUsPic2} class="img-fluid mt-5" alt="..." style={{width:"100%",borderRadius:"5px"}}/></Col>
                                <Col xs={6} sm={6} lg={6} className=" ps-0"><img src={AboutUsPic3} class="img-fluid AboutUsPic3" alt="..." style={{width:"100%",borderRadius:"5px"}}/></Col>
                                <Col xs={6} sm={6} lg={6} className=" pe-0">
                                    <div className="text-white mt-4 p-3 p-md-5 p-lg-4" style={{backgroundColor:"#2042e3",borderRadius:"5px"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{backgroundColor:"#ffffff45",borderRadius:"5px",marginBottom:"20px"}} className=" p-2" fill="white" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24"><path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"></path></svg>
                                        <h6 style={{fontSize:"22px"}}>Job alert!</h6>
                                        <p>104 new jobs are available in this week!</p>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                        </Col>

                        <Col sm={12} md={10} lg={7} className="aboutUs2-animation pt-5 pt-lg-0 pt-xxl-5 ps-0 ps-lg-5">
                            <h2 className="mb-5 pt-lg-0 pt-xxl-5 ms-lg-5" style={{fontWeight:"700"}}>Help You To Get The  <br /> Best Job That Fits You</h2>
                            <Row className="ps-lg-5">
                                <Col xs={1} sm={1} className="d-flex justify-content-start ">
                                    <div className="p-3 d-flex align-items-center" style={{height:"50px",backgroundColor:"#2042e31c",borderRadius:"4px"}}><svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="blue" class="bi bi-grid" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/></svg></div>
                                </Col>
                                <Col xs={11} sm={11} className=" ps-5 ps-lg-5 ps-xxl-4">
                                    <h5>#1 Jobs site in UK</h5>
                                    <p className="lightcolorline">Leverage agile frameworks to provide a robust synopsis for high <br /> level overviews. Iterative</p>
                                </Col>
                            </Row>

                            <Row className="ps-lg-5 mt-4">
                                <Col xs={1} sm={1} className="d-flex justify-content-start ">
                                    <div className="p-3 d-flex align-items-center" style={{height:"50px",backgroundColor:"#2042e31c",borderRadius:"4px"}}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="blue" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg></div>
                                </Col>
                                <Col xs={11} sm={11} className=" ps-5 ps-lg-5 ps-xxl-4">
                                    <h5>Seamless searching</h5>
                                    <p className="lightcolorline">Capitalize on low hanging fruit to identify a ballpark value added <br /> activity to beta test.</p>
                                </Col>
                            </Row>

                            <Row className="ps-lg-5 mt-4">
                                <Col xs={1} sm={1} className="d-flex justify-content-start ">
                                    <div className="p-3 d-flex align-items-center" style={{height:"50px",backgroundColor:"#2042e31c",borderRadius:"4px"}}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="blue" class="bi bi-graph-up-arrow" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/></svg></div>
                                </Col>
                                <Col xs={11} sm={11} className=" ps-5 ps-lg-5 ps-xxl-4">
                                    <h5>Hired in top companies</h5>
                                    <p className="lightcolorline">Podcasting operational change management inside of workflows to <br /> establish.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row> 
                     
                </Container>   
            </Container>
        </>
    )
}

export default AboutUsSection;