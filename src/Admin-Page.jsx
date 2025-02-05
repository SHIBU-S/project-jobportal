
// import { Container, Row, Col } from "react-bootstrap";
// import AdminPageImg from './AdminPage-Img.png';
// import { Link, useNavigate } from "react-router-dom";
// import { Form } from "react-bootstrap"; 
// import InputGroup from 'react-bootstrap/InputGroup';
// import { useState } from "react";
// import { Alert } from "react-bootstrap";
// import SideNavigation from "./SideNavigation";

// function AdminPage() {

//     const [username,setusername] = useState("");
//     const [password,setpassword] = useState("");
//     const [show, setShow] = useState(false);
//     const navigateto = useNavigate();

//     return (
//         <>
//             <Container fluid style={{ boxShadow: "0px 0px 3px #ccc" }}>
//                 <Row>
//                     <div style={{ border: "1px solid #eee", width: "235px", padding: "14px 15px" }}>
//                         <Link to=""><img src={AdminPageImg} className="img-fluid" alt="..." /></Link>
//                     </div>
//                 </Row>
//             </Container>

//             <Container fluid style={{ backgroundColor: "#f6f6f6" }}>
//                 <Container>
//                     <Row>
//                         <Col className="d-flex justify-content-center">
//                             <div className="mt-5" style={{  height: "600px",  maxWidth: "90%",  minWidth: "40%" }} >
//                                 <div className="border ps-2" style={{ backgroundColor: "#f6f6f6" }}>
//                                     <h1 className="p-2 d-flex pt-3" style={{ fontSize: "15px", color: "#4c4d5a" }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="me-1" x="0px" y="0px" width="15" height="15" viewBox="0 0 30 30">
//                                             <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
//                                         </svg> 
//                                         Please enter your login details.
//                                     </h1>
//                                 </div>

//                                 <div className="pt-3 px-3" style={{ backgroundColor: "white" }}>
//                                     <div className="mb-4">
//                                         {show &&
//                                             <Alert style={{backgroundColor:"#f5c1bb",border:"#f5c1bb"}} className="p-0" onClose={() => setShow(false)} dismissible>
//                                                 <p className="border mb-0 p-2 d-flex align-items-center " style={{color:"#c72f1d"}}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-exclamation-circle-fill me-1" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
//                                                 </svg> No match for Username and/or Password. </p>
//                                             </Alert>}
//                                     </div>

//                                     <form action="https://www.ecomdeveloper.com/demo/admin/index.php?route=common/login" method="post" encType="multipart/form-data">
//                                     <Form.Group as={Col} md="4" className="w-100" controlId="validationFormikUsername2">
//                                         <Form.Label style={{ color: "#545454" }}>Username</Form.Label>
//                                         <InputGroup hasValidation>
//                                             <InputGroup.Text id="inputGroupPrepend">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
//                                                     <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
//                                                 </svg>
//                                             </InputGroup.Text>
//                                             <Form.Control type="text" onChange={(e)=>setusername(e.target.value)} placeholder="Username" aria-describedby="inputGroupPrepend" name="username"/>  
//                                         </InputGroup>

//                                         <hr style={{ color: "1px solid " }}/>

//                                         <Form.Label style={{ color: "#545454" }}>Password</Form.Label>
//                                         <InputGroup hasValidation>
//                                             <InputGroup.Text id="inputGroupPrepend">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30">
//                                                     <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
//                                                 </svg>
//                                             </InputGroup.Text>
//                                             <Form.Control type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" aria-describedby="inputGroupPrepend" name="password" /> 
//                                         </InputGroup>
//                                     </Form.Group>
//                                     </form>
//                                 </div>

//                                 <div className="forgotpassword ps-3" style={{ backgroundColor: "white", fontSize: "14px" }}>
//                                     <Link to="" className="text-decoration-none">Forgotten Password</Link>
//                                 </div>

//                                 <div className="d-flex justify-content-end pe-3 pt-3 pb-3" style={{ backgroundColor: "white" }}>
//                                     <button type="button" onClick={AdminPagelogin} className="btn text-white" style={{ backgroundColor: "#1e91cf", borderRadius: "3px" }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="me-1" fill="white" x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24">
//                                             <path d="M 14.414063 11.144531 C 14.957031 10.09375 15.273438 8.902344 15.273438 7.636719 C 15.273438 3.421875 11.851563 0 7.636719 0 C 3.421875 0 0 3.417969 0 7.636719 C 0 11.851563 3.421875 15.273438 7.636719 15.273438 C 8.902344 15.273438 10.09375 14.960938 11.140625 14.414063 L 15.273438 18.542969 L 17.453125 18.542969 C 17.453125 18.546875 17.453125 20.726563 17.453125 20.726563 L 19.636719 20.726563 L 19.636719 22.910156 L 20.726563 24 L 24 24 L 24 20.726563 Z M 5.5 8 C 4.121094 8 3 6.882813 3 5.5 C 3 4.117188 4.121094 3 5.5 3 C 6.882813 3 8 4.117188 8 5.5 C 8 6.882813 6.882813 8 5.5 8 Z"></path>
//                                         </svg> 
//                                         Login
//                                     </button>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </Container>
//         </>
//     );

//     function AdminPagelogin(){
//         const username_pattern = "demoadmin";
//         const password_pattern = "demopass";

//         if(username === "" && password === "")
//         {
//             setShow(true);
//         }
//         else if(username_pattern!==username || password_pattern!==password )
//         {
//             setShow(true);
//         }
//         else
//         {
//             setShow(false);
//             navigateto("/Admin/Sidenavigation");
//         }
//     }
// }

// export default AdminPage;







import { Container, Row, Col } from "react-bootstrap";
import AdminPageImg from './AdminPage-Img.png';
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap"; 
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";
import { Alert } from "react-bootstrap";
import SideNavigation from "./SideNavigation";

function AdminPage({ onLogin }) {

    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const [show, setShow] = useState(false);
    const navigateto = useNavigate();

    function handleLogin(){
        const username_pattern = "demoadmin";
        const password_pattern = "demopass";

        if(username === "" && password === "")
        {
            setShow(true);
        }
        else if(username_pattern!==username || password_pattern!==password )
        {
            setShow(true);
        }
        else
        {
            setShow(false);
            onLogin(); 
            navigateto("/Admin/Sidenavigation"); 
        }
    }
      

    return (
        <>
            <Container fluid style={{ boxShadow: "0px 0px 3px #ccc" }}>
                <Row>
                    <div style={{ border: "1px solid #eee", width: "235px", padding: "14px 15px" }}>
                        <Link to=""><img src={AdminPageImg} className="img-fluid" alt="..." /></Link>
                    </div>
                </Row>
            </Container>

            <Container fluid style={{ backgroundColor: "#f6f6f6" }}>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <div className="mt-5" style={{  height: "600px",  maxWidth: "90%",  minWidth: "40%" }} >
                                <div className="border ps-2" style={{ backgroundColor: "#f6f6f6" }}>
                                    <h1 className="p-2 d-flex pt-3" style={{ fontSize: "15px", color: "#4c4d5a" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="me-1" x="0px" y="0px" width="15" height="15" viewBox="0 0 30 30">
                                            <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
                                        </svg> 
                                        Please enter your login details.
                                    </h1>
                                </div>

                                <div className="pt-3 px-3" style={{ backgroundColor: "white" }}>
                                    <div className="mb-4">
                                        {show &&
                                            <Alert style={{backgroundColor:"#f5c1bb",border:"#f5c1bb"}} className="p-0" onClose={() => setShow(false)} dismissible>
                                                <p className="border mb-0 p-2 d-flex align-items-center " style={{color:"#c72f1d"}}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-exclamation-circle-fill me-1" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                                                </svg> No match for Username and/or Password. </p>
                                            </Alert>}
                                    </div>

                                    <form action="https://www.ecomdeveloper.com/demo/admin/index.php?route=common/login" method="post" encType="multipart/form-data">
                                    <Form.Group as={Col} md="4" className="w-100" controlId="validationFormikUsername2">
                                        <Form.Label style={{ color: "#545454" }}>Username</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                                </svg>
                                            </InputGroup.Text>
                                            <Form.Control type="text" onChange={(e)=>setusername(e.target.value)} placeholder="Username" aria-describedby="inputGroupPrepend" name="username"/>  
                                        </InputGroup>

                                        <hr style={{ color: "1px solid " }}/>

                                        <Form.Label style={{ color: "#545454" }}>Password</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30">
                                                    <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
                                                </svg>
                                            </InputGroup.Text>
                                            <Form.Control type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" aria-describedby="inputGroupPrepend" name="password" /> 
                                        </InputGroup>
                                    </Form.Group>
                                    </form>
                                </div>

                                <div className="forgotpassword ps-3" style={{ backgroundColor: "white", fontSize: "14px" }}>
                                    <Link to="" className="text-decoration-none">Forgotten Password</Link>
                                </div>

                                <div className="d-flex justify-content-end pe-3 pt-3 pb-3" style={{ backgroundColor: "white" }}>
                                    <button type="button" onClick={handleLogin} className="btn text-white" style={{ backgroundColor: "#1e91cf", borderRadius: "3px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="me-1" fill="white" x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24">
                                            <path d="M 14.414063 11.144531 C 14.957031 10.09375 15.273438 8.902344 15.273438 7.636719 C 15.273438 3.421875 11.851563 0 7.636719 0 C 3.421875 0 0 3.417969 0 7.636719 C 0 11.851563 3.421875 15.273438 7.636719 15.273438 C 8.902344 15.273438 10.09375 14.960938 11.140625 14.414063 L 15.273438 18.542969 L 17.453125 18.542969 C 17.453125 18.546875 17.453125 20.726563 17.453125 20.726563 L 19.636719 20.726563 L 19.636719 22.910156 L 20.726563 24 L 24 24 L 24 20.726563 Z M 5.5 8 C 4.121094 8 3 6.882813 3 5.5 C 3 4.117188 4.121094 3 5.5 3 C 6.882813 3 8 4.117188 8 5.5 C 8 6.882813 6.882813 8 5.5 8 Z"></path>
                                        </svg> 
                                        Login
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );


}

export default AdminPage;





