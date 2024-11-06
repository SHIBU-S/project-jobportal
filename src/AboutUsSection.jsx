import { Container,Row,Col } from "react-bootstrap";



function AboutUsSection(){
    return(
        <>
            <Container fluid className="border border-dark" >
                <Container className="border border-dark mt-5" style={{height:"900px"}}>
                    <Row>
                        <Col>
                            <img src="" class="img-fluid" alt="..."/>
                        </Col>
                        <Col>
                            <img src="..." class="img-fluid" alt="..."/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default AboutUsSection;