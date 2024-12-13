import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import BlogSingleImg from "./blog-single-img.jpg";
import { LiaCommentDots } from "react-icons/lia";
import { GoEye } from "react-icons/go";


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

            <Container fluid>
                <Row>
                    <Col sm={12} className="d-flex justify-content-center">
                        <div className="mt-5 bg-white border border-dark p-4">
                            <img src={BlogSingleImg} class="img-fluid" alt="..."/>
                            <div><h2><Link>Let's explore 5 cool new features in JobBoard theme</Link></h2></div>
                            <ul className="ps-0 mt-3 blogsingle-lists">
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

                            <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo
                                    realized by the charms of pleasure of the moment, <br /> so blinded by desire, that they
                                    cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to
                                    thosewho fail in their <br /> duty through weakness of will, which is the same as saying through
                                    shrinking from toil and pain. These cases are perfectly simple and easy to <br />
                                    distinguish.
                                    In a free hour, when our power of choice is untrammelled and when nothing prevents
                                    our being able to do what we like best, every <br /> pleasure is to be welcomed and every pain
                                    avoided.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BlogSingle;