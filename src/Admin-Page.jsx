import { Container,Row,Col } from "react-bootstrap";
import AdminPageImg from './AdminPage-Img.png';
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap"; 
import InputGroup from 'react-bootstrap/InputGroup';


function AdminPage(){
    return(
        <>
            <Container fluid style={{boxShadow:"0px 0px 3px #ccc"}}>
                    <Row>
                        <div style={{border:"1px solid #eee",width:"235px",padding:"14px 15px"}}>
                            <Link to=""><img src={AdminPageImg} class="img-fluid" alt="..." /></Link>
                        </div>
                    </Row>
            </Container>

            <Container fluid>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <div className="border border-dark mt-5" style={{height:"350px",width:"50%"}}>
                                <div className="border border-dark">
                                    <h1 className="p-2" style={{fontSize:"15px"}}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 30 30"><path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
                                                                                </svg> Please enter your login details.</h1>
                                </div>

                                <div>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text>@</InputGroup.Text>
                                            <Form.Control type="text" required />
                                        </InputGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default AdminPage;

