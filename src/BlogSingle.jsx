import { Container,Row,Col, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import BlogSingleImg from "./blog-single-img.jpg";
import { LiaCommentDots } from "react-icons/lia";
import { GoEye } from "react-icons/go";
import blogsingleimage1 from './blog-singleimage-1.jpeg';
import blogsingleimage2 from './blog-singleimage-2.jpeg';
import { FaGreaterThan } from "react-icons/fa6";
import blogsinglepattern from "./blogsingle-patern1.png";
import comment1Img from "./comment1-Img.png";
import comment2Img from "./comment2-Img.png";
import comment3Img from "./comment3-Img.png";
import Footer from "./Footer";
import Form from 'react-bootstrap/Form';
import { IoLogoInstagram } from "react-icons/io";


function BlogSingle(){
    return(
        <>
            <Header/>

            <Container fluid className="border AboutUsPage pb-5" style={{height:"auto"}}>
                            <Container className="mt-5">
                                <Row>
                                    <Col>
                                        <div className="text-white">
                                            <h1 className="SubPageTitle pb-4">Blog Single</h1>
                                            <p className="mt-3">Business plan draws on a wide range of knowledge from different business <br />
                                                                disciplines.Business draws on a wide range of different business .</p>
                                            <ul className="breadcrumb-nav d-flex ps-0 mt-5">
                                                <li className="pe-3" style={{borderRight:"3px solid white"}}><Link to="/" style={{color:"#fff"}}>Home</Link></li>
                                                <li className="ps-3">Blog Single</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
            </Container>

            <Container fluid style={{backgroundColor:"#f6f9fc"}}>
                <Container className="mt-5 pt-0 pt-lg-5 mb-5 pb-5">
                    <Row>
                        <Col sm={12} lg={10} className="ms-auto me-auto">
                            <div className="p-4 bg-white border">
                                <img src={BlogSingleImg} class="img-fluid w-100"  alt="..."/>
                                <h3 className="mt-5"><Link to="#" className="text-decoration-none text-dark">Let's explore 5 cool new features in JobBoard theme</Link></h3>
                                <ul className="ps-0 mt-4 blogsingle-lists">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="blue" class="bi bi-calendar3 mb-1 me-1" viewBox="0 0 16 16"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
                                    20th March 2023
                                </li>
                                <li className="ms-3">
                                    <LiaCommentDots fill="blue"/>
                                    35 Comments
                                </li> <br className="d-none"/>
                                <li className="ms-3">
                                    <GoEye fill="blue"/>
                                     55 View
                                </li>
                            </ul>

                            <p className="lightcolorline mt-4 mb-5">We denounce with righteous indige nation and dislike men who are so beguiled and demo
                                    realized by the charms of pleasure of the moment, so blinded by desire, that they
                                    cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to
                                    thosewho fail in their duty through weakness of will, which is the same as saying through
                                    shrinking from toil and pain. These cases are perfectly simple and easy to 
                                    distinguish.
                                    In a free hour, when our power of choice is untrammelled and when nothing prevents
                                    our being able to do what we like best, every pleasure is to be welcomed and every pain
                                    avoided.
                            </p>

                            <Row>
                                <Col sm={12} md={6} className="text-center"> <img src={blogsingleimage1} class="img-fluid w-100"  alt="..."/></Col>
                                <Col sm={12} md={6} className="text-start mt-4 mt-md-0"> <img src={blogsingleimage2} class="img-fluid w-100"  alt="..."/></Col>
                            </Row>

                            <h3 className="mt-5 mb-4">A cleansing hot shower or bath</h3>
                            <p className="lightcolorline">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. 
                            </p>

                            <div style={{backgroundColor:"blue"}} className="blogsinglecleansingbox mt-5 text-white p-5">
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-quote" viewBox="0 0 16 16"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/></svg></div>
                                <h6 className="mt-3 mb-3">"Don't demand that things happen as you wish, but wish that they happen as they do happen, and you will go on well."</h6>
                                <span>Epictetus, The Enchiridion</span>
                                {/* <div className="blogsinglecleansingboxpattern"><img src={blogsinglepattern} class="img-fluid w-100"  alt="..."/></div> */}
                            </div>

                            <h3 className="mt-5 mb-4">Setting the mood with incense</h3>
                            <p className="lightcolorline">Remove aversion, then, from all things that are not in our control, and transfer it
                                    to things contrary to the nature of what is in our control. But, for the present, totally suppress desire: for, if you desire any of the things which are not in your own control, you must necessarily be disappointed; and of those which are, and which it would be laudable to desire, nothing is yet in your possession. Use only the appropriate
                                    actions of pursuit and avoidance; and even these lightly, and with gentleness and reservation.
                            </p>
                            <ul className="mt-4 ps-0 ps-lg-5">
                                <li className="d-flex gap-2 lightcolorline"> <div className="blogsinglelists p-1 d-flex mt-2 mt-md-0"><FaGreaterThan fill="white"/></div> The happiness of your life depends upon the quality of your thoughts </li>
                                <li className="d-flex gap-2 mt-3 mb-3 lightcolorline"> <div className="blogsinglelists p-1 d-flex mt-2 mt-md-0"><FaGreaterThan fill="white"/></div> The happiness of your life depends upon the quality of your thoughts </li>
                                <li className="d-flex gap-2 lightcolorline"> <div className="blogsinglelists p-1 d-flex mt-2 mt-md-0"><FaGreaterThan fill="white"/></div> The happiness of your life depends upon the quality of your thoughts </li>
                            </ul>

                            <div className="mt-4">
                                <p className="lightcolorline">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. </p>
                                <p className="lightcolorline">Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. </p>
                            </div>

                            <Row>
                                <Col sm={12} className="d-flex">
                                    <h5>Related Tags</h5> 
                                    <h5 className="ms-auto">Social Share</h5>
                                </Col>
                                <Col sm={12}>
                                    <Row>
                                        <Col className="d-md-flex mt-2">
                                            <div className=" populartags"><Link to="" className="py-1 px-3 text-center">Announcement</Link></div>
                                            <div className="ms-2 populartags"><Link to="" className="py-1 px-3 text-center">Experiences</Link></div>
                                            <div className="ms-2 populartags"><Link to="" className="py-1 px-3 text-center">Market News</Link></div>
                                        </Col>
                                        <Col>
                                            <div className="blogsingle-social">
                                                <ul className=" d-md-flex justify-content-end">
                                                    <li className="me-2"><Link to=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/></svg></Link></li>
                                                    <li className="me-2"><Link to=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg></Link></li>
                                                    <li><Link to=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg></Link></li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="border px-5 p-4">
                                        <Row><Col md={4}><h4>3 Comments On This Post</h4></Col>,<Col><hr /></Col></Row>
                                        <Row className="mt-5">
                                            <Col sm={2}><div><img src={comment1Img} class="img-fluid rounded-circle"  alt="..."/></div></Col>
                                            <Col sm={10}>
                                                <div className="commentbox">
                                                    <h5>Rosalina Kelian</h5>
                                                    <span className="lightcolorline">19th May 2023</span>
                                                    <p className="lightcolorline mt-4"> Donec aliquam ex ut odio dictum, ut consequat leo interdum. Aenean nunc ipsum, blandit eu enim sed, facilisis convallis orci. Etiam commodo
                                                                        lectus quis vulputate tincidunt. Mauris tristique velit eu magna maximus condimentum.
                                                    </p>
                                                    <div className="commentboxreply populartags d-flex"><Link to="" className="py-1 px-3 text-center">Reply</Link></div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="mt-5">
                                            <Col sm={2} className="ms-auto"><div><img src={comment2Img} class="img-fluid rounded-circle"  alt="..."/></div></Col>
                                            <Col sm={8}>
                                                <div className="commentbox">
                                                    <h5>Arista Williamson </h5>
                                                    <span className="lightcolorline">15th May 2023</span>
                                                    <p className="lightcolorline mt-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim. 
                                                    </p>
                                                    <div className="commentboxreply populartags d-flex"><Link to="" className="py-1 px-3 text-center">Reply</Link></div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="mt-5">
                                            <Col sm={2}><div><img src={comment3Img} class="img-fluid rounded-circle"  alt="..."/></div></Col>
                                            <Col sm={10}>
                                                <div className="commentbox">
                                                    <h5>Arista Williamson</h5>
                                                    <span className="lightcolorline">12th May 2023</span>
                                                    <p className="lightcolorline mt-4">  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
                                                    </p>
                                                    <div className="commentboxreply populartags d-flex"><Link to="" className="py-1 px-3 text-center">Reply</Link></div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>


                            <Row className="mt-5">
                                <Col>
                                    <div className="border px-5 p-4">
                                        <Row><Col md={3}><h4>Leave A Comment</h4></Col>,<Col><hr /></Col></Row>
                                        <Row className="mt-5">
                                            <Col>
                                                <FloatingLabel controlId="floatingInput" label="Your Name" className="mb-3" >
                                                    <Form.Control type="text" placeholder="Your Name" />
                                                </FloatingLabel>    
                                            </Col>
                                            <Col>
                                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
                                                    <Form.Control type="email" placeholder="name@example.com" />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col sm={12}>
                                                <FloatingLabel controlId="floatingInput" label="Your Subject" className="mb-3" >
                                                    <Form.Control type="text" placeholder="Your Subject" />
                                                </FloatingLabel>
                                            </Col>
                                            <Col sm={12}>
                                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '200px' }} />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>

                                        <Row className="mt-4">
                                            <Col>
                                                <div><button type="submit" className="button text-white px-4 py-2 rounded-2">Post Comment</button></div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>


                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Footer/>
        </>
    )
}

export default BlogSingle;