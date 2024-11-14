import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import BrowseRecentJobs from "./BrowseRecentJobs";
import Footer from "./Footer";


function JobListPage(){
    return(
        <>
            <Header/>

            <Container fluid className="border AboutUsPage pb-5" style={{height:"auto"}}>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <div className="text-white">
                                <h1 className="SubPageTitle pb-4">Job List</h1>
                                <p className="mt-3">Business plan draws on a wide range of knowledge from different business <br />
                                disciplines.Business draws on a wide range of different business .</p>
                                <ul className="breadcrumb-nav d-flex ps-0 mt-5">
                                    <li className="pe-3" style={{borderRight:"3px solid white"}}><Link to="/" style={{color:"#fff"}}>Home</Link></li>
                                    <li className="ps-3 pe-3" style={{borderRight:"3px solid white"}}><Link to="/" style={{color:"#fff"}}>Blog</Link></li>
                                    <li className="ps-3">About Us</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <BrowseRecentJobs/>
            <Footer/>
        </>
    )
}

export default JobListPage;