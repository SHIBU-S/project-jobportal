
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="text-primary" onClick={handleShow}>
        <span className=' login d-flex align-items-center'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="loginlogo me-2" fill='blue' width="16" height="16" viewBox="0 0 50 50">
            <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"></path>
            </svg> Login</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Container className=' position-relative pt-2 pb-2'>
            <Button variant="close" onClick={handleClose} className='position-absolute top-0 end-0 m-2 border p-2 closebutton' />

            <Modal.Title><h3 className='px-2 px-md-4 fw-bold pb-3 mt-1 mt-md-3 logintitle position-relative'>Login From Here</h3></Modal.Title>
            <Row className='px-2 px-md-4'>
              <Col>
                <p className='lightcolorline'>Log in to continue your account <br />
                  and explore new jobs.</p>
              </Col>
            </Row>

            <Row className='text-center  d-flex  p-2 linkedin ms-2 mt-2 me-2  ms-md-4 me-md-4 rounded-2'>
              <Col sm={12} className=' d-flex align-items-center '>
                <div className='ps-md-2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg></div>
                <div className=' ms-5 ps-2 ps-md-4'><p className='mb-0 text-white p-1'>Login In With LinkedIn</p></div>
              </Col>
            </Row>

        
            <Row className='text-center  d-flex  p-2 google ms-2 mt-2 me-2 ms-md-4 me-md-4 rounded-2'>
              <Col sm={12} className=' d-flex align-items-center'>
                <div className='ps-md-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                </svg>
                </div>
                <div className=' ms-5 ps-2 ps-md-4'><p className='mb-0 text-white p-1'>Login In With Google</p></div>
              </Col>
            </Row>

        
            <Row className='text-center  d-flex  p-2 facebook ms-2 mt-2 me-2 ms-md-4 me-md-4 rounded-2'>
              <Col sm={12} className=' d-flex align-items-center'>
                <div className="ps-md-2">
                <svg data-name="1-facebook" id="_1-facebook" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-label="Facebook login icon" width="24" height="24">
                  <defs><style>{`.cls-1{fill:white;}.cls-2{fill:#3b5999;}`}</style></defs>
                  <rect className="cls-1" height="64" rx="11.2" ry="11.2" width="64"/>
                  <path className="cls-2" d="M54.4,29.6h-10V22c0-1.86,2.14-2,2.8-2H54V9.6H47.2C39.67,9.6,34,14.93,34,22v7.6H25.6V40H34V64H44.4V40h8.4Z"/>
                </svg>
                </div>
                <div className=' ms-5 ps-md-4'><p className='mb-0 text-white p-1'>Login In With Facebook</p></div>
              </Col>
            </Row>

            <div className='text-center mt-3'>
              <div className='line-container'>
                <span className='lightcolorline'>Or</span>
              </div>
            </div>


            <Form className='px-2 px-md-4'>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">E-mail</label>
                <input type="email" className="form-control px-4 py-2" id="exampleFormControlInput1" placeholder="example@gmail.com" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlPassword1" className="form-label">Password</label>
                <input type="password" className="form-control  px-4 py-2" id="exampleFormControlPassword1" placeholder="Enter password" />
              </div>

              <Row className="align-items-center">
                <Col sm={12} className=' d-flex align-items-center'>
                  <input type="checkbox" /><span className='lightcolorline ms-2'>Remember password</span>
                  <div className='ms-auto'><a href="#" className='text-decoration-none'>Forget Password</a></div>
                </Col>
              </Row>


              <Button type="submit" className="loginbutton p-2 w-100 mt-3">
                Log In
              </Button>

              <p className='text-center mt-3'>
                Don’t have an account? 
                <a href="#" className='createfreeacc'> Create a free account</a>
              </p>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
