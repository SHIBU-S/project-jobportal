import { Container,Row,Col } from "react-bootstrap";
import TestimonialImg from './Testimonial-Img.png';


function Testimonials(){
    return(
        <>
            <Container fluid className="Testimonial border border-dark">
                <Container className="border border-danger" style={{height:"530px"}}>
                    <Row>
                        <Col></Col>

                        <Col className="d-flex justify-content-end">
                            <div>
                                <img src={TestimonialImg} class="img-fluid" alt="..." />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Testimonials;