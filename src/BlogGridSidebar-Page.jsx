import Header from "./Header";
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewsBlogImg1 from './Newsblog-Img1.jpg';
import NewsBlogImg2 from './Newsblog-Img2.jpg';
import NewsBlogImg3 from './Newsblog-Img3.jpg';
import Footer from "./Footer";
import { IoSearch } from "react-icons/io5";


function BlogGridSidebarPage(){
    return(
        <>
            <Header/>

            <Container fluid className="border AboutUsPage pb-5" style={{height:"auto"}}>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <div className="text-white">
                                <h1 className="SubPageTitle pb-4">Blog Grid Sidebar</h1>
                                <p className="mt-3">Business plan draws on a wide range of knowledge from different business <br />
                                                    disciplines.Business draws on a wide range of different business .</p>
                                <ul className="breadcrumb-nav d-flex ps-0 mt-5">
                                    <li className="pe-3" style={{borderRight:"3px solid white"}}><Link to="/" style={{color:"#fff"}}>Home</Link></li>
                                    <li className="ps-3 pe-3" style={{borderRight:"3px solid white"}}><Link to="/" style={{color:"#fff"}}>Blog</Link></li>
                                    <li className="ps-3">Blog Grid Sidebar</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className="border pb-5" style={{backgroundColor:"#f6f9fc"}}>
                <Container className="mt-5 pt-5">
                    <Row>
                        <Col sm={12} md={6} lg={8}>
                            <Row>
                                <Col lg={6}>
                                <div className="LatestNews-Box" style={{boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)",animationDelay:"0.3s"}}>
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

                                <Col lg={6}>
                                <div className="LatestNews-Box" style={{boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)",animationDelay:"0.5s"}}>
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

                                <Col lg={6} className="mt-5">
                                <div className="LatestNews-Box" style={{boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)",animationDelay:"0.7s"}}>
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

                                <Col lg={6} className="mt-5">
                                <div className="LatestNews-Box" style={{boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)",animationDelay:"0.3s"}}>
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

                                <Col lg={6} className="mt-5">
                                <div className="LatestNews-Box" style={{boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)",animationDelay:"0.5s"}}>
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

                                <Col lg={6} className="mt-5">
                                <div className="LatestNews-Box" style={{boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)",animationDelay:"0.7s"}}>
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
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className=" p-5 bg-white">
                                <Row><Col><h5>Search This Site</h5></Col><Col className="ps-0"><hr /></Col></Row>
                                <form action="" className="position-relative mt-4">
                                    <input type="text" placeholder="Search Here..." className="p-3" style={{width:"100%"}}/>
                                    <button type="button" style={{position:"absolute",right:"7px",top:"6px",height:"42px",width:"55px",backgroundColor:"#2042e3"}}>
                                        <IoSearch fill="white"/>
                                    </button>
                                </form>
                            </div>

                            <div className="bg-white p-4 mt-4">
                                <Row className="p-4"><Col><h5 >Popular Feeds</h5></Col><Col className="ps-0"><hr /></Col></Row>

                                <div className="p-4">   
                                    <h6><Link to="" className="text-decoration-none text-dark">Tips to write an impressive resume online for beginner</Link></h6>
                                    <span> 5th Nov 2023</span>
                                </div>

                                <div className="p-4">
                                    <h6><Link to="" className="text-decoration-none text-dark">10 most important SEO focus areas for colleges and universities</Link></h6>
                                    <span>24th March 2023</span>
                                </div>

                                <div className="p-4">
                                    <h6><Link to="" className="text-decoration-none text-dark">7 things you should never say to your boss in your joblife</Link></h6>
                                    <span>30th Jan 2023</span>
                                </div>
                            </div>

                            <div className="p-4 bg-white mt-4">
                                <Row className="p-4"><Col md={5}><h5 >Categories</h5></Col><Col className="ps-0"><hr /></Col></Row>
                                <ul className="BlogGridCategorieslists" style={{listStyleType:"none"}}>
                                    <li className="mt-3"><Link className=" d-block text-decoration-none text-dark" to="">Announcement <span className="d-flex align-items-center justify-content-center">26</span></Link></li>
                                    <li className="mt-3"><Link className=" d-block text-decoration-none text-dark" to="">Indeed Events <span className="d-flex align-items-center justify-content-center">26</span></Link></li>
                                    <li className="mt-3"><Link className=" d-block text-decoration-none text-dark" to="">Tips & Tricks<span className="d-flex align-items-center justify-content-center">26</span></Link></li>
                                    <li className="mt-3"><Link className=" d-block text-decoration-none text-dark" to="">Experiences <span className="d-flex align-items-center justify-content-center">26</span></Link></li>
                                    <li className="mt-3"><Link className=" d-block text-decoration-none text-dark" to="">Case Studies <span className="d-flex align-items-center justify-content-center">26</span></Link></li>
                                    <li className="mt-3"><Link className=" d-block text-decoration-none text-dark" to="">Labor Market News <span className="d-flex align-items-center justify-content-center">26</span></Link></li>
                                    <li className="mt-3"><Link className=" d-block text-decoration-none text-dark" to="">HR Best Practices <span className="d-flex align-items-center justify-content-center">26</span></Link></li>
                                </ul>
                            </div>

                            <div className="p-4 bg-white mt-4">
                                <Row className="p-4"><Col><h5 >Popular Tags</h5></Col><Col className="ps-0"><hr /></Col></Row>
                                <div className="populartags">
                                    <Row>
                                        <Col xs={4} sm={4}><div className="ms-3"><Link to="" className="p-1 text-center">Jobpress</Link></div></Col>
                                        <Col xs={4} sm={4}><div><Link to="" className="p-1 text-center">Design</Link></div></Col>
                                        <Col xs={4} sm={4}><div className="me-5"><Link to="" className="p-1 text-center">HR</Link></div></Col>

                                        <Col xs={4} sm={4}><div className="mt-2 ms-3"><Link to="" className="p-1 text-center">Recruiter</Link></div></Col>
                                        <Col xs={4} sm={4}><div className="mt-2"><Link to="" className="p-1 text-center">Interview</Link></div></Col>
                                        <Col xs={4} sm={4}><div className="mt-2 me-2"><Link to="" className="p-1 text-center">Employee</Link></div></Col>
                                    </Row>

                                    <Row>
                                        <Col xs={4} sm={4}><div className="mt-2 ms-3"><Link to="" className="p-1 text-center">Jobpress</Link></div></Col>
                                        <Col xs={4} sm={4}><div className="mt-2"><Link to="" className="p-1 text-center">Jobpress</Link></div></Col>
                                        <Col xs={4} sm={4}><div className="mt-2 me-4"><Link to="" className="p-1 text-center">Jobpress</Link></div></Col>

                                        <Col xs={4} sm={4}><div className="mt-2 ms-3"><Link to="" className="p-1 text-center">Jobpress</Link></div></Col>
                                        <Col xs={4} sm={4}><div className="mt-2"><Link to="" className="p-1 text-center">Jobpress</Link></div></Col>
                                        <Col xs={4} sm={4}><div className="mt-2 me-5"><Link to="" className="p-1 text-center">Jobpress</Link></div></Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Footer/>
        </>
    )
}

export default BlogGridSidebarPage;