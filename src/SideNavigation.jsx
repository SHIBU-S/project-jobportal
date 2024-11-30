import { Container, Row, Col } from "react-bootstrap";
import AdminPageImg from './AdminPage-Img.png';
import { Link} from "react-router-dom";


function SideNavigation(){
    return(
        <>
            <Container fluid style={{ boxShadow: "0px 0px 3px #ccc" }}>
                <Row>
                    <div style={{ border: "1px solid #eee", width: "235px", padding: "14px 15px" }}>
                        <Link to=""><img src={AdminPageImg} className="img-fluid" alt="..." /></Link>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default SideNavigation;


