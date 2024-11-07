import { Container,Row,Col } from "react-bootstrap";
import AboutUsPic1 from './AboutUsPic1.jpg';
import AboutUsPic2 from './AboutUsPic2.jpg';
import AboutUsPic3 from './AboutUsPic3.jpg';



function AboutUsSection(){
    return(
        <>
             <Container fluid className="border border-dark" >
                <Container className="border border-dark mt-5" style={{height:"auto"}}>
                    <Row className="d-flex justify-content-center">
                        <Col sm={12} md={10} lg={5} className="border border-dark">
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

                        <Col sm={12} md={10} lg={7} className="border border-dark pt-5 ps-5">
                            <h2 className="mb-5 pt-5 ms-5" style={{fontSize:"32px",fontWeight:"700"}}>Help you to get the  <br /> best job that fits you</h2>
                            <Row className="ps-5">
                                <Col sm={1} className="d-flex justify-content-start ">
                                    <div className="p-2" style={{height:"50px",backgroundColor:"#2042e31c",borderRadius:"4px"}}><svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="blue" class="bi bi-grid" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/></svg></div>
                                </Col>
                                <Col sm={11} className=" ps-4">
                                    <h5>#1 Jobs site in UK</h5>
                                    <p className="lightcolorline">Leverage agile frameworks to provide a robust synopsis for high <br /> level overviews. Iterative</p>
                                </Col>
                            </Row>

                            <Row className="ps-5 mt-4">
                                <Col sm={1} className="d-flex justify-content-start ">
                                    <div className="p-2" style={{height:"50px",backgroundColor:"#2042e31c",borderRadius:"4px"}}><svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="blue" class="bi bi-grid" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/></svg></div>
                                </Col>
                                <Col sm={11} className=" ps-4">
                                    <h5>Seamless searching</h5>
                                    <p className="lightcolorline">Capitalize on low hanging fruit to identify a ballpark value added <br /> activity to beta test.</p>
                                </Col>
                            </Row>

                            <Row className="ps-5 mt-4">
                                <Col sm={1} className="d-flex justify-content-start ">
                                    <div className="p-2" style={{height:"50px",backgroundColor:"#2042e31c",borderRadius:"4px"}}><svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="blue" class="bi bi-grid" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/></svg></div>
                                </Col>
                                <Col sm={11} className=" ps-4">
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