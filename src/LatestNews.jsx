import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewsBlogImg1 from './Newsblog-Img1.jpg';
import NewsBlogImg2 from './Newsblog-Img2.jpg';
import NewsBlogImg3 from './Newsblog-Img3.jpg';


function LatestNews(){
    return(
        <>
            <Container fluid className="">
                <Container className="mt-5 pt-5" style={{height:"auto"}}>
                    <Row className="text-center">
                        <Col>
                            <span style={{backgroundColor:"#2042e3",fontSize:"12px",padding:"5px 18px",borderRadius:"4px",lineHeight:"22px",color:"#fff",textTransform:"uppercase"}}>
                                Latest News
                            </span>
                            <h2 className="Latestnews-title mt-2" style={{fontSize:"35px",fontWeight:"700",paddingBottom:"14px",lineHeight:"45px"}}>
                                Latest News & Blog
                            </h2>
                            <p className="lightcolorline">There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br className="d-lg-block"/> alteration in some form.</p>
                        </Col>
                    </Row>
                </Container>

                
                <Container className="mt-5 pt-5">
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <div style={{boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                <div className="LatestNews"><img src={NewsBlogImg1} class="img-fluid" alt="..." style={{width:"100%"}}/></div>
                                <div className="p-4">
                                    <h4 className="BrowseFeaturedJobname mt-4 mt-md-0"><Link to="">The Internet Is A Job Seeker Most Crucial Success</Link></h4>
                                    <ul className="ps-0 mt-3 jobcontent-lists">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-tag me-1" viewBox="0 0 16 16"><path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/><path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"/></svg>
                                            Job Skills
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="blue" class="bi bi-calendar3 mb-1 me-1" viewBox="0 0 16 16"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
                                            12-09-2023
                                        </li> <br className="d-none"/>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="blue" class="bi bi-eye mb-1 me-1" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/></svg>
                                            55
                                        </li>
                                    </ul>
                                    <p className="lightcolorline mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the standard.</p>
                                    <div className="BrowseFeaturedJob-Button pt-1 pb-2">
                                        <Link to="" className="FeaturedJob-ApplyNow me-3 text-center">Read More</Link>
                                    </div> 
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="mt-4 mt-md-0">
                            <div style={{boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                <div className="LatestNews"><img src={NewsBlogImg2} class="img-fluid" alt="..." style={{width:"100%"}}/></div>
                                <div className="p-4">
                                    <h4 className="BrowseFeaturedJobname mt-4 mt-md-0"><Link to="">Today From Connecting With Potential Employers</Link></h4>
                                    <ul className="ps-0 mt-3 jobcontent-lists">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-tag me-1" viewBox="0 0 16 16"><path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/><path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"/></svg>
                                            Career Advice
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="blue" class="bi bi-calendar3 mb-1 me-1" viewBox="0 0 16 16"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
                                            10-10-2023
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="blue" class="bi bi-eye mb-1 me-1" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/></svg>
                                            55
                                        </li>
                                    </ul>
                                    <p className="lightcolorline mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the standard.</p>
                                    <div className="BrowseFeaturedJob-Button pt-1 pb-2">
                                        <Link to="" className="FeaturedJob-ApplyNow me-3 text-center">Read More</Link>
                                    </div> 
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="mt-4 mt-lg-0">
                            <div style={{boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                <div className="LatestNews"><img src={NewsBlogImg3} class="img-fluid" alt="..." style={{width:"100%"}}/></div>
                                <div className="p-4">
                                    <h4 className="BrowseFeaturedJobname mt-4 mt-md-0"><Link to="">We’ve Weeded Through Hundreds Of Job Hunting</Link></h4>
                                    <ul className="ps-0 mt-3 jobcontent-lists">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-tag me-1" viewBox="0 0 16 16"><path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/><path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"/></svg>
                                            Future Plan
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="blue" class="bi bi-calendar3 mb-1 me-1" viewBox="0 0 16 16"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
                                            09-05-2023
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="blue" class="bi bi-eye mb-1 me-1" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/></svg>
                                            55
                                        </li>
                                    </ul>
                                    <p className="lightcolorline mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the standard.</p>
                                    <div className="BrowseFeaturedJob-Button pt-1 pb-2">
                                        <Link to="" className="FeaturedJob-ApplyNow me-3 text-center">Read More</Link>
                                    </div> 
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    )
}

export default LatestNews;