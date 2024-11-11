import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import GraphicsDesign from './Graphics-Design-Img(Fea-Jobs).jpg';
import RestaurantServices from './RestaurantServices-Img(Fea-Jobs).jpg';
import ShareMarketAnalysis from './ShareMarketAnalysis-Img(Fea-Jobs).jpg';
import MedicalServices from './MedicalServices-Img(Fea-Jobs).jpg';
import AutoMobileServices from './AutomobileServices-Img(Fea-Jobs).jpg';
import ITNetworkingServices from './IT-NetworkingServices-Img(Fea-Jobs).jpg';


function BrowseFeaturedJobs(){
    return(
        <>
            <Container fluid>
                <Container className="mt-5 pt-5" style={{height:"auto"}}>
                    <Row className="text-center">
                        <Col>
                            <span style={{backgroundColor:"#2042e3",fontSize:"12px",padding:"5px 18px",borderRadius:"4px",lineHeight:"22px",color:"#fff",textTransform:"uppercase"}}>
                                Featured Jobs
                            </span>
                            <h2 className="BrowseFeaturedJobs-title mt-2" style={{fontSize:"35px",fontWeight:"700",paddingBottom:"14px",lineHeight:"45px"}}>
                                Browse Featured Jobs
                            </h2>
                            <p className="lightcolorline">There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br className="d-lg-block"/> alteration in some form.</p>
                        </Col>
                    </Row>
                </Container>

                <Container className="pb-lg-5">
                {/* --- 1st Row --- */}
                    <Row className="pt-5 pb-5">
                        <Col sm={12} md={6} lg={4}>
                            <div className="BrowseFeaturedJob-box1 " style={{height:"auto",boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                <div className="BrowseFeaturedJob"><img src={GraphicsDesign} class="img-fluid" alt="..." style={{width:"100%"}}/></div>
                                <div className="p-4">
                                    <h4 className="BrowseFeaturedJobname mt-4 mt-md-0"><Link to="">Graphics Design</Link></h4>
                                    <ul className="ps-0 mt-3 jobcontent-lists">
                                            <li className=" me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                New York
                                            </li>
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="me-1" fill="blue" x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64"><path d="M 29 7 C 25.686 7 23 9.686 23 13 L 15 13 C 11.686 13 9 15.686 9 19 L 9 45 C 9 48.314 11.686 51 15 51 L 49 51 C 52.314 51 55 48.314 55 45 L 55 19 C 55 15.686 52.314 13 49 13 L 41 13 C 41 9.686 38.314 7 35 7 L 29 7 z M 29 11 L 35 11 C 36.104 11 37 11.895 37 13 L 27 13 C 27 11.895 27.896 11 29 11 z M 15 17 L 49 17 C 50.105 17 51 17.895 51 19 L 51 27.328125 C 47.860304 27.865386 40.276945 29 32 29 C 23.725715 29 16.142076 27.866066 13 27.328125 L 13 19 C 13 17.895 13.895 17 15 17 z M 13 31.384766 C 15.851521 31.855688 20.994182 32.574326 27 32.865234 L 27 33 C 27 34.105 27.895 35 29 35 L 34 35 C 35.105 35 36 34.105 36 33 L 36 32.917969 C 42.43805 32.665598 47.988855 31.881828 51 31.384766 L 51 45 C 51 46.105 50.105 47 49 47 L 15 47 C 13.895 47 13 46.105 13 45 L 13 31.384766 z"></path></svg>
                                                Full-time
                                            </li> 
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $80k - $90k
                                            </li>
                                        </ul>
                                    <p className="mt-2 lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                    <div className="BrowseFeaturedJob-Button pt-3 pb-2">
                                        <Link to="" className="FeaturedJob-ApplyNow me-3 text-center">Apply Now</Link>
                                        <Link to="" className="FeaturedJob-SaveIt mt-2 mt-md-0 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" class="bi bi-bookmark pb-1" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/></svg> Save It</Link>
                                    </div> 
                                    <div className="feature">
                                        Featured
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                        <div className="BrowseFeaturedJob-box1 mt-4 mt-md-0" style={{height:"auto",boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                <div><img src={RestaurantServices} class="img-fluid" alt="..." style={{width:"100%"}}/></div>
                                <div className="p-4">
                                    <h4 className="BrowseFeaturedJobname mt-4 mt-md-0"><Link to="">Restaurant Services</Link></h4>
                                    <ul className="ps-0 mt-3 jobcontent-lists">
                                            <li className=" me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                New York
                                            </li>
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="me-1" fill="blue" x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64"><path d="M 29 7 C 25.686 7 23 9.686 23 13 L 15 13 C 11.686 13 9 15.686 9 19 L 9 45 C 9 48.314 11.686 51 15 51 L 49 51 C 52.314 51 55 48.314 55 45 L 55 19 C 55 15.686 52.314 13 49 13 L 41 13 C 41 9.686 38.314 7 35 7 L 29 7 z M 29 11 L 35 11 C 36.104 11 37 11.895 37 13 L 27 13 C 27 11.895 27.896 11 29 11 z M 15 17 L 49 17 C 50.105 17 51 17.895 51 19 L 51 27.328125 C 47.860304 27.865386 40.276945 29 32 29 C 23.725715 29 16.142076 27.866066 13 27.328125 L 13 19 C 13 17.895 13.895 17 15 17 z M 13 31.384766 C 15.851521 31.855688 20.994182 32.574326 27 32.865234 L 27 33 C 27 34.105 27.895 35 29 35 L 34 35 C 35.105 35 36 34.105 36 33 L 36 32.917969 C 42.43805 32.665598 47.988855 31.881828 51 31.384766 L 51 45 C 51 46.105 50.105 47 49 47 L 15 47 C 13.895 47 13 46.105 13 45 L 13 31.384766 z"></path></svg>
                                                Full-time
                                            </li> 
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $80k - $90k
                                            </li>
                                        </ul>
                                    <p className="mt-2 lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                    <div className="BrowseFeaturedJob-Button pt-3 pb-2">
                                        <Link to="" className="FeaturedJob-ApplyNow me-3 text-center">Apply Now</Link>
                                        <Link to="" className="FeaturedJob-SaveIt mt-2 mt-md-0 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" class="bi bi-bookmark pb-1" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/></svg> Save It</Link>
                                    </div> 
                                    <div className="feature">
                                        Featured
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                        <div className="BrowseFeaturedJob-box1 mt-4 mt-lg-0" style={{height:"auto",boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                <div><img src={ShareMarketAnalysis} class="img-fluid" alt="..." style={{width:"100%"}}/></div>
                                <div className="p-4">
                                    <h4 className="BrowseFeaturedJobname mt-4 mt-md-0"><Link to="">Share Market Analysis</Link></h4>
                                    <ul className="ps-0 mt-3 jobcontent-lists">
                                            <li className=" me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                New York
                                            </li>
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="me-1" fill="blue" x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64"><path d="M 29 7 C 25.686 7 23 9.686 23 13 L 15 13 C 11.686 13 9 15.686 9 19 L 9 45 C 9 48.314 11.686 51 15 51 L 49 51 C 52.314 51 55 48.314 55 45 L 55 19 C 55 15.686 52.314 13 49 13 L 41 13 C 41 9.686 38.314 7 35 7 L 29 7 z M 29 11 L 35 11 C 36.104 11 37 11.895 37 13 L 27 13 C 27 11.895 27.896 11 29 11 z M 15 17 L 49 17 C 50.105 17 51 17.895 51 19 L 51 27.328125 C 47.860304 27.865386 40.276945 29 32 29 C 23.725715 29 16.142076 27.866066 13 27.328125 L 13 19 C 13 17.895 13.895 17 15 17 z M 13 31.384766 C 15.851521 31.855688 20.994182 32.574326 27 32.865234 L 27 33 C 27 34.105 27.895 35 29 35 L 34 35 C 35.105 35 36 34.105 36 33 L 36 32.917969 C 42.43805 32.665598 47.988855 31.881828 51 31.384766 L 51 45 C 51 46.105 50.105 47 49 47 L 15 47 C 13.895 47 13 46.105 13 45 L 13 31.384766 z"></path></svg>
                                                Full-time
                                            </li> 
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $80k - $90k
                                            </li>
                                        </ul>
                                    <p className="mt-2 lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                    <div className="BrowseFeaturedJob-Button pt-3 pb-2">
                                        <Link to="" className="FeaturedJob-ApplyNow me-3 text-center">Apply Now</Link>
                                        <Link to="" className="FeaturedJob-SaveIt mt-2 mt-md-0 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" class="bi bi-bookmark pb-1" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/></svg> Save It</Link>
                                    </div> 
                                    <div className="feature">
                                        Featured
                                    </div>
                                </div>
                            </div>
                        </Col>
                    
    {/* ---2nd Row---*/}

                        <Col sm={12} md={6} lg={4} className="mt-4">
                            <div className="BrowseFeaturedJob-box1 " style={{height:"auto",boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                <div><img src={MedicalServices} class="img-fluid" alt="..." style={{width:"100%"}}/></div>
                                <div className="p-4">
                                    <h4 className="BrowseFeaturedJobname mt-4 mt-md-0"><Link to="">Medical Services</Link></h4>
                                    <ul className="ps-0 mt-3 jobcontent-lists">
                                            <li className=" me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                New York
                                            </li>
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="me-1" fill="blue" x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64"><path d="M 29 7 C 25.686 7 23 9.686 23 13 L 15 13 C 11.686 13 9 15.686 9 19 L 9 45 C 9 48.314 11.686 51 15 51 L 49 51 C 52.314 51 55 48.314 55 45 L 55 19 C 55 15.686 52.314 13 49 13 L 41 13 C 41 9.686 38.314 7 35 7 L 29 7 z M 29 11 L 35 11 C 36.104 11 37 11.895 37 13 L 27 13 C 27 11.895 27.896 11 29 11 z M 15 17 L 49 17 C 50.105 17 51 17.895 51 19 L 51 27.328125 C 47.860304 27.865386 40.276945 29 32 29 C 23.725715 29 16.142076 27.866066 13 27.328125 L 13 19 C 13 17.895 13.895 17 15 17 z M 13 31.384766 C 15.851521 31.855688 20.994182 32.574326 27 32.865234 L 27 33 C 27 34.105 27.895 35 29 35 L 34 35 C 35.105 35 36 34.105 36 33 L 36 32.917969 C 42.43805 32.665598 47.988855 31.881828 51 31.384766 L 51 45 C 51 46.105 50.105 47 49 47 L 15 47 C 13.895 47 13 46.105 13 45 L 13 31.384766 z"></path></svg>
                                                Full-time
                                            </li> 
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $80k - $90k
                                            </li>
                                        </ul>
                                    <p className="mt-2 lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                    <div className="BrowseFeaturedJob-Button pt-3 pb-2">
                                        <Link to="" className="FeaturedJob-ApplyNow me-3 text-center">Apply Now</Link>
                                        <Link to="" className="FeaturedJob-SaveIt mt-2 mt-md-0 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" class="bi bi-bookmark pb-1" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/></svg> Save It</Link>
                                    </div> 
                                    <div className="feature">
                                        Featured
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="mt-4">
                        <div className="BrowseFeaturedJob-box1 " style={{height:"auto",boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                <div><img src={AutoMobileServices} class="img-fluid" alt="..." style={{width:"100%"}}/></div>
                                <div className="p-4">
                                    <h4 className="BrowseFeaturedJobname mt-4 mt-md-0"><Link to="">Auto Mobile Services</Link></h4>
                                    <ul className="ps-0 mt-3 jobcontent-lists">
                                            <li className=" me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                New York
                                            </li>
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="me-1" fill="blue" x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64"><path d="M 29 7 C 25.686 7 23 9.686 23 13 L 15 13 C 11.686 13 9 15.686 9 19 L 9 45 C 9 48.314 11.686 51 15 51 L 49 51 C 52.314 51 55 48.314 55 45 L 55 19 C 55 15.686 52.314 13 49 13 L 41 13 C 41 9.686 38.314 7 35 7 L 29 7 z M 29 11 L 35 11 C 36.104 11 37 11.895 37 13 L 27 13 C 27 11.895 27.896 11 29 11 z M 15 17 L 49 17 C 50.105 17 51 17.895 51 19 L 51 27.328125 C 47.860304 27.865386 40.276945 29 32 29 C 23.725715 29 16.142076 27.866066 13 27.328125 L 13 19 C 13 17.895 13.895 17 15 17 z M 13 31.384766 C 15.851521 31.855688 20.994182 32.574326 27 32.865234 L 27 33 C 27 34.105 27.895 35 29 35 L 34 35 C 35.105 35 36 34.105 36 33 L 36 32.917969 C 42.43805 32.665598 47.988855 31.881828 51 31.384766 L 51 45 C 51 46.105 50.105 47 49 47 L 15 47 C 13.895 47 13 46.105 13 45 L 13 31.384766 z"></path></svg>
                                                Full-time
                                            </li> 
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $80k - $90k
                                            </li>
                                        </ul>
                                    <p className="mt-2 lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                    <div className="BrowseFeaturedJob-Button pt-3 pb-2">
                                        <Link to="" className="FeaturedJob-ApplyNow me-3 text-center">Apply Now</Link>
                                        <Link to="" className="FeaturedJob-SaveIt mt-2 mt-md-0 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" class="bi bi-bookmark pb-1" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/></svg> Save It</Link>
                                    </div> 
                                    <div className="feature">
                                        Featured
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="mt-4">
                        <div className="BrowseFeaturedJob-box1 " style={{height:"auto",boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)"}}>
                                <div><img src={ITNetworkingServices} class="img-fluid" alt="..." style={{width:"100%"}}/></div>
                                <div className="p-4">
                                    <h4 className="BrowseFeaturedJobname mt-4 mt-md-0"><Link to="">IT & Networking Services</Link></h4>
                                    <ul className="ps-0 mt-3 jobcontent-lists">
                                            <li className=" me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                New York
                                            </li>
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="me-1" fill="blue" x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64"><path d="M 29 7 C 25.686 7 23 9.686 23 13 L 15 13 C 11.686 13 9 15.686 9 19 L 9 45 C 9 48.314 11.686 51 15 51 L 49 51 C 52.314 51 55 48.314 55 45 L 55 19 C 55 15.686 52.314 13 49 13 L 41 13 C 41 9.686 38.314 7 35 7 L 29 7 z M 29 11 L 35 11 C 36.104 11 37 11.895 37 13 L 27 13 C 27 11.895 27.896 11 29 11 z M 15 17 L 49 17 C 50.105 17 51 17.895 51 19 L 51 27.328125 C 47.860304 27.865386 40.276945 29 32 29 C 23.725715 29 16.142076 27.866066 13 27.328125 L 13 19 C 13 17.895 13.895 17 15 17 z M 13 31.384766 C 15.851521 31.855688 20.994182 32.574326 27 32.865234 L 27 33 C 27 34.105 27.895 35 29 35 L 34 35 C 35.105 35 36 34.105 36 33 L 36 32.917969 C 42.43805 32.665598 47.988855 31.881828 51 31.384766 L 51 45 C 51 46.105 50.105 47 49 47 L 15 47 C 13.895 47 13 46.105 13 45 L 13 31.384766 z"></path></svg>
                                                Full-time
                                            </li> 
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $80k - $90k
                                            </li>
                                        </ul>
                                    <p className="mt-2 lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                    <div className="BrowseFeaturedJob-Button pt-3 pb-2">
                                        <Link to="" className="FeaturedJob-ApplyNow me-3 text-center">Apply Now</Link>
                                        <Link to="" className="FeaturedJob-SaveIt mt-2 mt-md-0 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" class="bi bi-bookmark pb-1" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/></svg> Save It</Link>
                                    </div> 
                                    <div className="feature">
                                        Featured
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

export default BrowseFeaturedJobs;