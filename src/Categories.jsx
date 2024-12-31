// import { Container, Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import { FaPlus } from "react-icons/fa";
// import { FiRefreshCw } from "react-icons/fi";
// import { RiDeleteBin5Fill } from "react-icons/ri";
// import { FaPen } from "react-icons/fa";
// import { IoListSharp } from "react-icons/io5";
// import { PiGreaterThanLight } from "react-icons/pi";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Categories({ setActiveTab }) {
//     const [showAddCategory, setshowAddCategory] = useState(false);
//     const [categoryData, setCategoryData] = useState([]); 


//     useEffect(() => {
//         async function fetchCategoryData() {
//             try {
//                 const response = await axios.get("http://localhost:5005/GetCategoryDatas"); 
//                 setCategoryData(response.data.totaldatas);  
//             } catch (err) {
//                 console.error("Error fetching category data:", err);
//             }
//         }
//         fetchCategoryData(); 
//     }, []); 

//     function displaynew() {
//         setshowAddCategory(true);
//         setActiveTab('AddCategory');
//     }

//     return (
//         <>
//             <Container fluid className="adminpagebg">
//                 <Row className="px-2">
//                     <Col className="d-flex align-items-center">
//                         <h2 className="Categories_title">Categories</h2>
//                         <ul className="d-flex pt-4 Dashboard_lists">
//                             <li><Link to="" className="text-decoration-none" style={{ color: "grey" }}>Home <PiGreaterThanLight className="p-1" /></Link></li>
//                             <li><Link to="" className="text-decoration-none">Categories</Link></li>
//                         </ul>
//                     </Col>

//                     <Col className="d-flex align-items-center grid gap-2">
//                         <div className="ms-auto p-2 d-flex bg-primary" onClick={displaynew}><FaPlus fill="white" /></div>
//                         <div className="border p-2 d-flex bg-white"><FiRefreshCw /></div>
//                         <div className="border p-2 d-flex bg-danger"><RiDeleteBin5Fill fill="white" /></div>
//                     </Col>
//                 </Row>
//             </Container>

//             <Container fluid className="adminpagebg border px-3">
//                 <div className="border p-2 mt-3 pb-0">
//                     <h6 className="Categories_title p-1"><IoListSharp /> Category List</h6>
//                 </div>

//                 <div className="border p-3 bg-white" style={{ height: "500px", overflowY: "auto" }}>
//                     <table style={{ width: "100%" }} className="border">
//                         <thead>
//                             <tr>
//                                 <td className="border p-2" style={{ width: "1px" }}><input type="checkbox" /></td>
//                                 <td className="border p-2" style={{ width: "55%" }}><Link className="text-decoration-none">Category Name</Link></td>
//                                 <td className="border p-2 text-end"><Link className="text-decoration-none">Sort Order</Link></td>
//                                 <td className="border p-2 text-end">Action</td>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {categoryData.length > 0 ? (
//                                 categoryData.map((category) => (
//                                     <tr>
//                                         <td className="border p-2 py-3" style={{ width: "1px" }}>
//                                             <input type="checkbox" />
//                                         </td>
//                                         <td className="border p-2" style={{ width: "55%" }}>
//                                             <Link to="" className="text-decoration-none text-dark">{category.Categoryname}</Link>
//                                         </td>
//                                         <td className="border p-2 text-end"></td>
//                                         <td className="border p-2 d-flex ">
//                                             <div className="ms-auto p-2 m-1 d-flex align-items-center bg-primary">
//                                                 <FaPen fill="white" onClick={displaynew} />
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="4" className="text-center"></td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </Container>
//         </>
//     );
// }

// export default Categories;





import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { IoListSharp } from "react-icons/io5";
import { PiGreaterThanLight } from "react-icons/pi";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaRegFileExcel } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'; 
import Pagination from 'react-bootstrap/Pagination';


function Categories({ setActiveTab }) {
    const [showAddCategory, setshowAddCategory] = useState(false);
    const [categoryData, setCategoryData] = useState([]); 
    const [Category_activePage,setCategory_ActivePage] = useState(1);

    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === Category_activePage} onClick={()=>{setCategory_ActivePage(number)}} >
                {number}
            </Pagination.Item>,
        );
    }


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

    function displaynew() {
        setshowAddCategory(true);
        setActiveTab('AddCategory');
    }

    function backpage(){
        if(Category_activePage>1){
            setCategory_ActivePage(Category_activePage-1);
        }
    }
    function nextpage(){
        if(Category_activePage<5){
            setCategory_ActivePage(Category_activePage+1);
        }
    }

    const itemsPerPage = 5;
    const totalPages = Math.ceil(categoryData.length / itemsPerPage);
    const displayedData = categoryData.slice(
        (Category_activePage - 1) * itemsPerPage,
        Category_activePage * itemsPerPage
    );
    

    return (
        <>
            <Container fluid className="adminpagebg">
                <Row className="px-2">
                    <Col className="d-flex align-items-center">
                        <h2 className="Categories_title">Categories</h2>
                        <ul className="d-flex pt-4 Dashboard_lists">
                            <li><Link to="" className="text-decoration-none" style={{ color: "grey" }}>Home <PiGreaterThanLight className="p-1" /></Link></li>
                            <li><Link to="" className="text-decoration-none">Categories</Link></li>
                        </ul>
                    </Col>

                    <Col className="d-flex align-items-center grid gap-2">
                        <div className="ms-auto p-2 d-flex bg-primary" onClick={displaynew}><FaPlus fill="white" /></div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="adminpagebg border px-3">
                <div className="border p-1 mt-3 pb-0 d-flex">
                    <h6 className="Categories_title p-1 d-flex align-items-center"><IoListSharp /> Category List</h6>
                    <div className="ms-auto m-1 d-flex gap-1">
                        {['top'].map((placement) => (
                                                    <>
                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Csv</Tooltip>
                                                            } >
                                                            <Button type="button" className="border ms-auto p-2 m-1 btn-light"><BsFiletypeCsv /> </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Excel</Tooltip>
                                                            } >
                                                            <Button type="button" className="border p-2 m-1 btn-light"><FaRegFileExcel/> </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Pdf</Tooltip>
                                                            } >
                                                            <Button type="button" className="border p-2 m-1 btn-light"><FaRegFilePdf/> </Button>
                                                        </OverlayTrigger>
                                                    </>
                                                ))}
                    </div>
                </div>

                <div className="border p-3 bg-white" style={{ height: "500px", overflowY: "auto" }}>
                    <table style={{ width: "100%" }} className="border">
                        <thead>
                            <tr>
                                <td className="border p-2" style={{ width: "1px" }}><input type="checkbox" /></td>
                                <td className="border p-2">S.No</td>
                                <td className="border p-2" style={{ width: "55%" }}><Link className="text-decoration-none">Category Name</Link></td>
                                <td className="border p-2 text-end"><Link className="text-decoration-none">Image</Link></td>
                                <td className="border p-2 text-end">Action</td>
                            </tr>
                        </thead>

            {/*  ------------------------------------  (1) Category Table  -----------------------------------------  */}
                        {Category_activePage===1 && (
                            <tbody>
                            {
                            categoryData.length > 0 ? (
                                [...categoryData].reverse().map((category,index) => (
                                    <tr>
                                        <td className="border p-2 py-3" style={{ width: "1px" }}>
                                            <input type="checkbox" />
                                        </td>
                                        <td className="border p-2 py-3">{categoryData.length-index}</td>
                                        <td className="border p-2" style={{ width: "55%" }}>
                                            <Link to="" className="text-decoration-none text-dark">{category.Categoryname}</Link>
                                        </td>
                                        <td className="border p-2 text-end">
                                            <div >
                                                <img src={category.CategoryImage}  alt={`Image ${category._id}`}  style={{ width: '300px', margin: '10px' }} />
                                            </div>
                                        </td>
                                        <td className=" p-2 d-flex align-items-center">
                                                {['top'].map((placement) => (
                                                    <>
                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>View</Tooltip>
                                                            } >
                                                            <Button type="button" className="ms-auto p-2 m-1 bg-primary text-white">View </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Edit</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-2 m-1  bg-warning">Edit </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Delete</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-2 m-1 bg-danger text-white">Delete </Button>
                                                        </OverlayTrigger>
                                                    </>
                                                ))}
                                        </td> 

                                    </tr>
                                ))                           
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center"></td>
                                </tr>
                            )}
                        </tbody>
                        )
                        } 
               


                {/*  ------------------------------------  (2) Category Table  -----------------------------------------  */}      
                        {Category_activePage === 2 && (<p>Hello</p>)}

                       
                    </table>

                    <div className="mt-3 d-flex justify-content-center">
                        <Pagination>
                            <span aria-hidden="true" className="border d-flex align-items-center px-3 me-3" onClick={backpage}>&raquo;</span>
                            {items}  
                            <span aria-hidden="true" className="border d-flex align-items-center px-3" onClick={nextpage}>&raquo;</span>
                        </Pagination>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Categories;