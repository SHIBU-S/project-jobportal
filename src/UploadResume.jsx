import { Container,Row,Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


function UploadResume(){
    return(
        <>
            <Container fluid className=" uploadresume">
                <Container className=" pt-5 pb-5 text-center" style={{height:"auto"}}>
                    <Row>
                        <Col className="mt-5 pt-2 pb-4">
                            <span style={{backgroundColor:"#fff",color:"#2042e3",padding:"5px 18px",fontSize:"12px",borderRadius:"4px"}}>
                                GETTING STARTED TO WORK
                            </span>
                            <h2 className="mt-3 pb-4 uploadresumepage-title" style={{color:"#fff",fontWeight:"700",animationDelay:"0.4s"}}>
                                Don’t just find. Be found. Put your CV in <br className="d-none d-lg-block"/> front of great employers
                            </h2>
                            <p className="mt-3 uploadresumepage-para" style={{color:"#fff",animationDelay:"0.6s"}}>It helps you to increase your chances of finding a suitable job and let recruiters contact you about jobs that are <br className="d-none d-lg-block" /> not needed to pay for advertising.</p>
            
                            <div className=" mt-5 mx-auto pt-3 uploadresume-button pb-3 " style={{animationDelay:"0.8s"}}>
                                <Link to="" style={{padding:"15px 30px",fontSize:"14px",border:"none",borderRadius:"4px",textDecoration:"none",fontWeight:"500"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:"10px"}} width="16" height="16" fill="blue" class="bi bi-upload" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/></svg>
                                    Upload Your Resume
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default UploadResume;