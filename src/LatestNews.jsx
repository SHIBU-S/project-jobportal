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
                        <Col>
                            <div style={{boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                <div><img src={NewsBlogImg1} class="img-fluid" alt="..." style={{width:"100%"}}/></div>
                                <div className="p-4">
                                    <h4 className="BrowseFeaturedJobname mt-4 mt-md-0"><Link to="">The Internet Is A Job Seeker Most Crucial Success</Link></h4>
                                    <ul className="ps-0 mt-3 jobcontent-lists">
                                        <li>
                                            Job Skills
                                        </li>
                                        <li>
                                            12-09-2023
                                        </li>
                                        <li>
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

                        <Col>
                            <div style={{boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                <div><img src={NewsBlogImg2} class="img-fluid" alt="..." style={{width:"100%"}}/></div>
                                <div className="p-4">
                                    <h4 className="BrowseFeaturedJobname mt-4 mt-md-0"><Link to="">Today From Connecting With Potential Employers</Link></h4>
                                    <ul className="ps-0 mt-3 jobcontent-lists">
                                        <li>
                                            Career Advice
                                        </li>
                                        <li>
                                            10-10-2023
                                        </li>
                                        <li>
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

                        <Col>
                            <div style={{boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                <div><img src={NewsBlogImg3} class="img-fluid" alt="..." style={{width:"100%"}}/></div>
                                <div className="p-4">
                                    <h4 className="BrowseFeaturedJobname mt-4 mt-md-0"><Link to="">We’ve Weeded Through Hundreds Of Job Hunting</Link></h4>
                                    <ul className="ps-0 mt-3 jobcontent-lists">
                                        <li>
                                            Future Plan
                                        </li>
                                        <li>
                                            09-05-2023
                                        </li>
                                        <li>
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