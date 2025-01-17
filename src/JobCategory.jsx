

// import { Container,Row,Col } from "react-bootstrap";
// import { Link } from "react-router-dom";



// function JobCategory(){
//     return(
//         <>
//             <Container fluid className="border border-light pb-5" style={{backgroundColor: "#f6f9fc" }}>
//                 <Container className="mt-2 mt-lg-5">
//                     <Row className="pt-5">
//                         <Col className="text-center">
//                             <span className="jobcategory-title" style={{backgroundColor:"#2042e3",padding:"5px 18px",color:"#fff",animationDelay:"0.4s"}}>Job Category</span>
//                             <h2 className="jobcategory-titlename mt-lg-3 p-3" style={{fontWeight:"700",position:"relative",animationDelay:"0.5s"}}>Choose Your Desire Category</h2>
//                             <p className="jobcategory-paraname lightcolorline" style={{animationDelay:"0.6s"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br/> alteration in some form.</p>
//                         </Col>
//                     </Row>
//                 </Container>

//                 <Container className="mt-3 mt-lg-5 p-5 mb-3" style={{height:"auto",backgroundColor:"white",boxShadow:"0 1rem 3rem rgba(35, 38, 45, 0.15)",borderRadius:"5px"}}>
//                     <Row className="text-center">
//                         <Col sm={12} md={6} lg={3} className=" p-2">
//                             <Link to="/" style={{textDecoration:"none",color:"#081828"}}>
//                             <div className=" jobcategory-lists p-3" style={{border:"1px dashed #eee",animationDelay:"0.2s"}}>
//                                 <div className="mt-3 py-3 px-3 py-lg-2 px-lg-2 py-xxl-3 px-xxl-3 mx-auto mb-3 d-flex " style={{width:"25%",backgroundColor:"#2042e31c",borderRadius:"4px"}}> 
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="blue" x="0px" y="0px" viewBox="0 0 50 50"> <path d="M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"></path>
//                                     </svg>
//                                 </div>
//                                 <h3 className="mb-3 jobcategory-name" style={{fontSize:"15px",fontWeight:"500"}}>Technical <br /> Support</h3>
//                             </div>
//                             </Link>
//                         </Col>

//                         <Col sm={12} md={6} lg={3}  className=" p-2">
//                             <Link to="/" style={{textDecoration:"none",color:"#081828"}}>
//                             <div className=" jobcategory-lists p-3" style={{border:"1px dashed #eee",animationDelay:"0.4s"}}>
//                                 <div className="mt-3 py-3 px-3 py-lg-2 px-lg-2 py-xxl-3 px-xxl-3 mx-auto mb-3 d-flex " style={{width:"25%",backgroundColor:"#2042e31c",borderRadius:"4px"}}>    
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="blue" class="bi bi-stack" viewBox="0 0 16 16">
//                                         <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z"/>
//                                         <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z"/>
//                                     </svg>
//                                 </div>
//                                 <h3 className="mb-3 jobcategory-name" style={{fontSize:"15px",fontWeight:"500"}}>Business <br /> Development</h3>
//                             </div>
//                             </Link>
//                         </Col>

//                         <Col sm={12} md={6} lg={3}  className=" p-2">
//                             <Link to="/" style={{textDecoration:"none",color:"#081828"}}>
//                             <div className=" jobcategory-lists p-3" style={{border:"1px dashed #eee",animationDelay:"0.6s"}}>
//                                 <div className="mt-3 py-3 px-3 py-lg-2 px-lg-2 py-xxl-3 px-xxl-3 mx-auto mb-3 d-flex " style={{width:"25%",backgroundColor:"#2042e31c",borderRadius:"4px"}}>    
//                                     <svg xmlns="http://www.w3.org/2000/svg"  fill="blue" class="bi bi-house-door" viewBox="0 0 16 16">
//                                         <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
//                                     </svg>
//                                 </div>
//                                 <h3 className="mb-3 jobcategory-name" style={{fontSize:"15px",fontWeight:"500"}}>Real Estate <br /> Business</h3>
//                             </div>
//                             </Link>
//                         </Col>

//                         <Col sm={12} md={6} lg={3}  className="p-2">
//                             <Link to="/" style={{textDecoration:"none",color:"#081828"}}>
//                             <div className=" jobcategory-lists p-3" style={{border:"1px dashed #eee",animationDelay:"0.8s"}}>
//                                 <div className="mt-3 py-3 px-3 py-lg-2 px-lg-2 py-xxl-3 px-xxl-3 mx-auto mb-3 d-flex " style={{width:"25%",backgroundColor:"#2042e31c",borderRadius:"4px"}}>    
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="blue" class="bi bi-search" viewBox="0 0 16 16">
//                                         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
//                                     </svg>
//                                 </div>
//                                 <h3 className="mb-3 jobcategory-name" style={{fontSize:"15px",fontWeight:"500"}}>Share Market <br /> Analysis</h3>
//                             </div>
//                             </Link>
//                         </Col>
//                     </Row>





//                     <Row className="text-center mt-3">
//                         <Col sm={12} md={6} lg={3}  className=" p-2">
//                             <Link to="/" style={{textDecoration:"none",color:"#081828"}}>
//                             <div className=" jobcategory-lists p-3" style={{border:"1px dashed #eee",animationDelay:"0.2s"}}>
//                                 <div className="mt-3 py-3 px-3 py-lg-2 px-lg-2 py-xxl-3 px-xxl-3 mx-auto mb-3 d-flex " style={{width:"25%",backgroundColor:"#2042e31c",borderRadius:"4px"}}>    
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="blue" class="bi bi-currency-dollar" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
//                                     </svg>
//                                 </div>
//                                 <h3 className="mb-3 jobcategory-name" style={{fontSize:"15px",fontWeight:"500"}}>Finance & Banking <br /> Service</h3>
//                             </div>
//                             </Link>
//                         </Col>

//                         <Col sm={12} md={6} lg={3}  className=" p-2">
//                             <Link to="/" style={{textDecoration:"none",color:"#081828"}}>
//                             <div className=" jobcategory-lists p-3" style={{border:"1px dashed #eee",animationDelay:"0.4s"}}>
//                                 <div className="mt-3 py-3 px-3 py-lg-2 px-lg-2 py-xxl-3 px-xxl-3 mx-auto mb-3 d-flex " style={{width:"25%",backgroundColor:"#2042e31c",borderRadius:"4px"}}>    
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="blue" class="bi bi-cloud-snow" viewBox="0 0 16 16"><path d="M13.405 4.277a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973M8.5 1.25a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 1.25M2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m2.75 2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m-2.75-2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25"/>
//                                     </svg>
//                                 </div>
//                                 <h3 className="mb-3 jobcategory-name" style={{fontSize:"15px",fontWeight:"500"}}>IT & Networking <br /> Services</h3>
//                             </div>
//                             </Link>
//                         </Col>

//                         <Col sm={12} md={6} lg={3}  className=" p-2">
//                             <Link to="/" style={{textDecoration:"none",color:"#081828"}}>
//                             <div className=" jobcategory-lists p-3" style={{border:"1px dashed #eee",animationDelay:"0.6s"}}>
//                                 <div className="mt-3 py-3 px-3 py-lg-2 px-lg-2 py-xxl-3 px-xxl-3 mx-auto mb-3 d-flex " style={{width:"25%",backgroundColor:"#2042e31c",borderRadius:"4px"}}>    
//                                     <svg xmlns="http://www.w3.org/2000/svg"  fill="blue" class="bi bi-house" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
//                                     </svg>
//                                 </div>
//                                 <h3 className="mb-3 jobcategory-name" style={{fontSize:"15px",fontWeight:"500"}}>Restaurant <br /> Services</h3>
//                             </div>
//                             </Link>
//                         </Col>

//                         <Col sm={12} md={6} lg={3}  className=" p-2">
//                             <Link to="/" style={{textDecoration:"none",color:"#081828"}}>
//                             <div className=" jobcategory-lists p-3" style={{border:"1px dashed #eee",animationDelay:"0.8s"}}>
//                                 <div className="mt-3 py-3 px-3 py-lg-2 px-lg-2 py-xxl-3 px-xxl-3 mx-auto mb-3 d-flex " style={{width:"25%",backgroundColor:"#2042e31c",borderRadius:"4px"}}>    
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="blue" class="bi bi-rocket-takeoff" viewBox="0 0 16 16">
//                                         <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532"/>
//                                         <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z"/>
//                                         <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z"/>
//                                     </svg>
//                                 </div>
//                                 <h3 className="mb-3 jobcategory-name" style={{fontSize:"15px",fontWeight:"500"}}>Defence & Fire <br /> Service</h3>
//                             </div>
//                             </Link>
//                         </Col>
//                     </Row>
//                 </Container>
//             </Container>
//         </>
//     )
// }

// export default JobCategory;







import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function JobCategory() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    async function fetchCategoryData() {
      try {
        const response = await axios.get("http://localhost:5005/GetCategoryDatas");
        setCategoryData(response.data.totaldatas);
      } catch (err) {
        console.error("Error fetching category data:", err);
      }
    }
    fetchCategoryData();
  }, []);

  return (
    <Container fluid className="border border-light pb-5" style={{ backgroundColor: "#f6f9fc" }}>
      <Container className="mt-2 mt-lg-5">
        <Row className="pt-5 text-center">
          <Col>
            <span className="jobcategory-title" style={{ backgroundColor: "#2042e3", padding: "5px 18px", color: "#fff" }}>
              Job Category
            </span>
            <h2 className="mt-lg-3 p-3" style={{ fontWeight: 700 }}>
              Choose Your Desired Category
            </h2>
            <p>
              Explore a variety of job categories to find the perfect fit for your career aspirations.
            </p>
          </Col>
        </Row>
        <Row className="mt-3 text-center">
          {categoryData.map((category) => (
            <Col sm={12} md={6} lg={3} className="p-2" key={category.id}>
              <Link to={`/BrowseJobs/${category.Categoryname}`} style={{ textDecoration: "none", color: "#081828" }}>
                <div className=" jobcategory-lists p-3" style={{border:"1px dashed #eee",animationDelay:"0.2s"}}>
                    <div className="mt-3 py-3 px-3 py-lg-2 px-lg-2 py-xxl-3 px-xxl-3 mx-auto mb-3 d-flex " style={{width:"25%",backgroundColor:"#2042e31c",borderRadius:"4px"}}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="blue" x="0px" y="0px" viewBox="0 0 50 50"> <path d="M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"></path>
                        </svg>
                    </div>
                    <h3 className="mb-3 jobcategory-name" style={{fontSize:"15px",fontWeight:"500"}}>{category.Categoryname}</h3>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default JobCategory;



