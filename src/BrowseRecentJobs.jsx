
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SoftwareEngineerImg from './SoftwareEngineer-Img.png';
import DigitalMarketerImg from './DigitalMarketer-Img.png';
import GraphicsDesignImg from './GraphicDesign-Img.png';
import SalesManagerImg from './SalesManager-Img.png';
import UiUxDesignImg from './UiUx-Design-Img.png';
import ProductDesignerImg from './ProductDesigner-Img.png';
import WebDeveloperImg from './WebDeveloper-Img.png';
import AndroidDeveloperImg from './AndroidDeveloper-Img.png';


function BrowseRecentJobs(){
    return(
        <>
            <Container fluid style={{backgroundColor:"#f6f9fc"}} className="pb-5 border">
                <Container className="mt-5 pt-5" style={{height:"auto"}}>
                    <Row className="text-center">
                        <Col>
                            <span style={{backgroundColor:"#2042e3",fontSize:"12px",padding:"5px 18px",borderRadius:"4px",lineHeight:"22px",color:"#fff",textTransform:"uppercase"}}>
                                Hot Jobs
                            </span>
                            <h2 className="BrowseRecentJobs-title mt-2" style={{fontSize:"35px",fontWeight:"700",paddingBottom:"14px",lineHeight:"45px"}}>
                                Browse Recent Jobs
                            </h2>
                            <p className="lightcolorline">There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br className="d-lg-block"/> alteration in some form.</p>
                        </Col>
                    </Row>
                </Container>


                <Container className="mt-5 mb-5">
                    
                    <Row>
                    {/* Software Engineer */}
                        <Col sm={12} lg={6} className="ps-3 pe-3 ps-md-4 pe-md-4">
                            <Row className="jobbox" style={{padding:"30px"}}>
                                <Col md={2} className="d-flex align-items-center  ">
                                    <img src={SoftwareEngineerImg} class="img-fluid" alt="..." />
                                </Col>
                                <Col md={10} className="position-relative">
                                    <div className="jobcontent">
                                        <h4 className="BrowseRecentJobname mt-4 mt-md-0"><Link to="">Software <br className="d-none d-lg-block d-xxl-none" /> Engineer</Link></h4>
                                        <p className="lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                        <ul className="ps-0  jobcontent-lists">
                                            <li className="border me-2r">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-reception-0" viewBox="0 0 16 16"><path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/></svg>
                                                <Link to="#"> winbrans.com</Link>
                                            </li>
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar mb-1 me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $20k - $25k
                                            </li> 
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt mb-1 me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                New York
                                            </li>
                                        </ul>  
                                    </div>
                                    <div className="Job-Button">
                                        <ul className=" d-flex">
                                            <li className="me-1"><Link to="" className="apply">Apply</Link></li>
                                            <li><Link to="" className="full-Parttime">Full Time</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>


                        {/* Digital Marketer */}
                        <Col sm={12} lg={6} className="mt-4 mt-lg-0 ps-3 pe-3 ps-md-4 pe-md-4">
                            <Row className="jobbox" style={{padding:"30px"}}>
                                <Col md={2} className="d-flex align-items-center  ">
                                    <img src={DigitalMarketerImg} class="img-fluid" alt="..." />
                                </Col>
                                <Col md={10} className="position-relative">
                                    <div className="jobcontent">
                                        <h4 className="BrowseRecentJobname mt-4 mt-md-0"><Link to="">Digital <br className="d-none d-lg-block d-xxl-none" /> Marketer</Link></h4>
                                        <p className="lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                        <ul className="ps-0 jobcontent-lists">
                                            <li className="me-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-reception-0" viewBox="0 0 16 16"><path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/></svg>
                                                <Link to="#"> marketers.com</Link>
                                            </li>
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar mb-1 me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $20k - $25k
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt mb-1 me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                New York,USA
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Job-Button">
                                        <ul className=" d-flex">
                                            <li className="me-1"><Link to="" className="apply">Apply</Link></li>
                                            <li><Link to="" className="full-Parttime">Part Time</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    

                    <Row className="mt-4">
                    {/* Graphics Design */}
                        <Col sm={12} lg={6} className="ps-3 pe-3 ps-md-4 pe-md-4">
                            <Row className="jobbox" style={{padding:"30px"}}>
                                <Col md={2} className="d-flex align-items-center  ">
                                    <img src={GraphicsDesignImg} class="img-fluid" alt="..." />
                                </Col>
                                <Col md={10} className="position-relative">
                                    <div className="jobcontent">
                                        <h4 className="BrowseRecentJobname mt-4 mt-md-0"><Link to="">Graphics <br className="d-none d-lg-block d-xxl-none" /> Design</Link></h4>
                                        <p className="lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                        <ul className="ps-0 jobcontent-lists">
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-reception-0" viewBox="0 0 16 16"><path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/></svg>
                                                <Link to="#"> designhub.com</Link>
                                            </li>
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar mb-1 me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $20k - $25k
                                            </li>
                                            <li >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt mb-1 me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                Washington,USA
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Job-Button">
                                        <ul className=" d-flex">
                                            <li className="me-1"><Link to="" className="apply">Apply</Link></li>
                                            <li><Link to="" className="full-Parttime">Intern</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        

                        {/* Sales Manager */}
                        <Col sm={12} lg={6} className="mt-4 mt-lg-0 ps-3 pe-3 ps-md-4 pe-md-4">
                            <Row className="jobbox" style={{padding:"30px"}}>
                                <Col md={2} className="d-flex align-items-center  ">
                                    <img src={SalesManagerImg} class="img-fluid" alt="..." />
                                </Col>
                                <Col md={10} className="position-relative">
                                    <div className="jobcontent">
                                        <h4 className="BrowseRecentJobname mt-4 mt-md-0"><Link to="">Sales <br className="d-none d-lg-block d-xxl-none" /> Manager</Link></h4>
                                        <p className="lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                        <ul className="ps-0 jobcontent-lists">
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-reception-0" viewBox="0 0 16 16"><path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/></svg>
                                                <Link to="#"> winbrans.com</Link>
                                            </li>
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar mb-1 me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $20k - $25k
                                            </li>
                                            <li >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt mb-1 me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                Delaware,USA
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Job-Button">
                                        <ul className=" d-flex">
                                            <li className="me-1"><Link to="" className="apply">Apply</Link></li>
                                            <li><Link to="" className="full-Parttime">Full Time</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>



                    <Row className="mt-4">
                    {/* Ui/Ux Designer */}
                        <Col sm={12} lg={6} className="ps-3 pe-3 ps-md-4 pe-md-4">
                            <Row className="jobbox" style={{padding:"30px"}}>
                                <Col md={2} className="d-flex align-items-center  ">
                                    <img src={UiUxDesignImg} class="img-fluid" alt="..." />
                                </Col>
                                <Col md={10} className="position-relative">
                                    <div className="jobcontent">
                                        <h4 className="BrowseRecentJobname mt-4 mt-md-0"><Link to="">Ui/Ux <br className="d-none d-lg-block d-xxl-none" /> Design</Link></h4>
                                        <p className="lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                        <ul className="ps-0 jobcontent-lists">
                                            <li className="me-2  ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-reception-0" viewBox="0 0 16 16"><path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/></svg>
                                                <Link to="#"> uddesign.com</Link>
                                            </li>
                                            <li className="me-2  ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar mb-1 me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $20k - $25k
                                            </li>
                                            <li >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt mb-1 me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                Cupertino,USA
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Job-Button">
                                        <ul className=" d-flex">
                                            <li className="me-1"><Link to="" className="apply">Apply</Link></li>
                                            <li><Link to="" className="full-Parttime">Part Time</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        

                        {/* Product Designer */}
                        <Col sm={12} lg={6} className="mt-4 mt-lg-0 ps-3 pe-3 ps-md-4 pe-md-4">
                            <Row className="jobbox" style={{padding:"30px"}}>
                                <Col md={2} className="d-flex align-items-center  ">
                                    <img src={ProductDesignerImg} class="img-fluid" alt="..." />
                                </Col>
                                <Col md={10} className="position-relative">
                                    <div className="jobcontent">
                                        <h4 className="BrowseRecentJobname mt-4 mt-md-0"><Link to="">Product <br className="d-none d-lg-block d-xxl-none" /> Designer</Link></h4>
                                        <p className="lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                        <ul className="ps-0 jobcontent-lists">
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-reception-0" viewBox="0 0 16 16"><path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/></svg>
                                                <Link to="#"> winbrans.com</Link>
                                            </li>
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar mb-1 me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $20k - $25k
                                            </li>
                                            <li >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt mb-1 me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                New York,USA
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Job-Button">
                                        <ul className=" d-flex">
                                            <li className="me-1"><Link to="" className="apply">Apply</Link></li>
                                            <li><Link to="" className="full-Parttime">Full Time</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>



                    <Row className="mt-4">
                    {/* Web Developer */}
                        <Col sm={12} lg={6} className="ps-3 pe-3 ps-md-4 pe-md-4">
                            <Row className="jobbox" style={{padding:"30px"}}>
                                <Col md={2} className="d-flex align-items-center  ">
                                    <img src={WebDeveloperImg} class="img-fluid" alt="..." />
                                </Col>
                                <Col md={10} className="position-relative">
                                    <div className="jobcontent">
                                        <h4 className="BrowseRecentJobname mt-4 mt-md-0"><Link to="">Web <br className="d-none d-lg-block d-xxl-none" /> Developer</Link></h4>
                                        <p className="lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                        <ul className="ps-0 jobcontent-lists">
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-reception-0" viewBox="0 0 16 16"><path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/></svg>
                                                <Link to="#"> winbrans.com</Link>
                                            </li>
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar mb-1 me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $20k - $25k
                                            </li>
                                            <li >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt mb-1 me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                Delaware,USA
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Job-Button">
                                        <ul className=" d-flex">
                                            <li className="me-1"><Link to="" className="apply">Apply</Link></li>
                                            <li><Link to="" className="full-Parttime">Intern</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        

                        {/* Android Developer */}
                        <Col sm={12} lg={6} className="mt-4 mt-lg-0 ps-3 pe-3 ps-md-4 pe-md-4">
                            <Row className="jobbox" style={{padding:"30px"}}>
                                <Col md={2} className="d-flex align-items-center  ">
                                    <img src={AndroidDeveloperImg} class="img-fluid" alt="..." />
                                </Col>
                                <Col md={10} className="position-relative">
                                    <div className="jobcontent">
                                        <h4 className="BrowseRecentJobname mt-4 mt-md-0"><Link to="">Android <br className="d-none d-lg-block d-xxl-none" /> Developer</Link></h4>
                                        <p className="lightcolorline">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled. </p>
                                        <ul className="ps-0 jobcontent-lists">
                                            <li className="me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-reception-0" viewBox="0 0 16 16"><path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/></svg>
                                                <Link to="#"> androidplex.com</Link>
                                            </li>
                                            <li className="me-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-dollar mb-1 me-1" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/></svg>
                                                $20k - $25k
                                            </li>
                                            <li >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-geo-alt mb-1 me-1" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                                                Cupertiono,USA
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Job-Button">
                                        <ul className=" d-flex">
                                            <li className="me-1"><Link to="" className="apply">Apply</Link></li>
                                            <li><Link to="" className="full-Parttime">Part Time</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                
                </Container>
            </Container>
        </>
    )
}

export default BrowseRecentJobs;