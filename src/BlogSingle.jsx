import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import BlogSingleImg from "./blog-single-img.jpg";
import { LiaCommentDots } from "react-icons/lia";
import { GoEye } from "react-icons/go";
import blogsingleimage1 from './blog-singleimage-1.jpeg';
import blogsingleimage2 from './blog-singleimage-2.jpeg';
import { FaGreaterThan } from "react-icons/fa6";
import blogsinglepattern from "./blogsingle-patern1.png";



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

            <Container fluid style={{backgroundColor:"#f6f9fc"}} className="border">
                <Container className="mt-5 pt-0 pt-lg-5">
                    <Row>
                        <Col sm={12} lg={10} className="ms-auto me-auto">
                            <div className="p-4 bg-white">
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
                                <div className="blogsinglecleansingboxpattern"><img src={blogsinglepattern} class="img-fluid w-100"  alt="..."/></div>
                            </div>

                            <h3 className="mt-5 mb-4">Setting the mood with incense</h3>
                            <p className="lightcolorline">Remove aversion, then, from all things that are not in our control, and transfer it
                                    to things contrary to the nature of what is in our control. But, for the present, totally suppress desire: for, if you desire any of the things which are not in your own control, you must necessarily be disappointed; and of those which are, and which it would be laudable to desire, nothing is yet in your possession. Use only the appropriate
                                    actions of pursuit and avoidance; and even these lightly, and with gentleness and reservation.
                            </p>
                            <ul className="mt-4 ps-0">
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

                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default BlogSingle;