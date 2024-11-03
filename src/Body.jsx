import { Container,Row,Col } from "react-bootstrap";
import bodyimage from './hero-image.png';


function Body(){
    return(
        <>
            <Container fluid className="border" style={{height:"auto",backgroundColor: "#f6f9fc"}}>
               <Container className="mt-0 mt-lg-4">
               <Row className="pt-0 pt-lg-5">
                   <Col sm={12} lg={6} className="mt-0 mt-lg-5 pt-4 pt-md-5 p-0 p-md-3">
                        <h1 className="bodypage-title">Find Your Career <br /> to Make a Better Life</h1>
                        <p className=" mt-4 lightcolorline">Creating a beautiful job website is not easy <br />  always. To make your life easier, we are <br /> introducing Jobcamp template.</p>
                        
                        <div className="job-search position-relative mt-5">
                            <form action="" className="d-flex position-relative" style={{padding:"10px 10px 10px 0"}}>
                                <div style={{padding:"0 30px"}} className="whatjobs-div position-relative">
                                    <label for="whatjobs" class="form-label"> What</label>
                                    <input type="text" class="form-control" id="whatjobs" placeholder="What jobs you want?"/>
                                </div>
                                <div style={{padding:"0 30px"}}>
                                    <label for="locationname" class="form-label"> Where</label>
                                    <input type="text" class="form-control" id="locationname" placeholder="Location"/>
                                </div>
                                <div className="jobsearch-button d-flex align-items-center justify-content-center" style={{width:"28%"}}>
                                    <button type="submit" class="btn">Search</button>
                                </div>
                            </form>
                        </div>

                        <div className="mt-4">
                            <div className="d-block d-md-flex keywords">
                                <span style={{color:"#2042e3"}}>Popular Keywords:</span>
                                <ul className="d-flex p-0 ms-0 ms-md-3">
                                    <li><a href="#">Administrative</a></li>
                                    <li><a href="#">Android</a></li>
                                    <li><a href="#">app</a></li>
                                    <li><a href="#">ASP.NET</a></li>
                                </ul>
                            </div>
                        </div>

                   </Col>

                   <Col sm={12} lg={6} className="body-img d-none d-lg-block position-relative ">
                        <img src={bodyimage} className="img-fluid" alt="..."/>
                        <a href="https://www.youtube.com/watch?v=cz4z8CyvDas" className=" video p-5 rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="26" height="26" viewBox="0 0 48 48">
                        <path d="M 11.396484 4.1113281 C 9.1042001 4.2020187 7 6.0721788 7 8.5917969 L 7 39.408203 C 7 42.767694 10.742758 44.971891 13.681641 43.34375 L 41.490234 27.935547 C 44.513674 26.260259 44.513674 21.739741 41.490234 20.064453 L 13.681641 4.65625 C 12.94692 4.2492148 12.160579 4.0810979 11.396484 4.1113281 z M 11.431641 7.0664062 C 11.690234 7.0652962 11.961284 7.1323321 12.226562 7.2792969 L 40.037109 22.6875 C 41.13567 23.296212 41.13567 24.703788 40.037109 25.3125 L 12.226562 40.720703 C 11.165446 41.308562 10 40.620712 10 39.408203 L 10 8.5917969 C 10 7.9855423 10.290709 7.5116121 10.714844 7.2617188 C 10.926911 7.136772 11.173048 7.0675163 11.431641 7.0664062 z"></path>
                        </svg></a>
                   </Col>


                </Row>
               </Container>
            </Container>
        </>
    )
}

export default Body;
