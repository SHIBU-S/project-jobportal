
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
import Modal from 'react-bootstrap/Modal';


function Categories({ setActiveTab }) {
    const [showAddCategory, setshowAddCategory] = useState(false);
    const [categoryData, setCategoryData] = useState([]); 
    const [Category_activePage,setCategory_ActivePage] = useState(1);
    const [selectedcategory,setselectedcategory] = useState(null);

//-----Checkbox
    // const [ischecked,setischecked] = useState(false);
    // function selectallcheckbox(){
    //     setischecked(!ischecked);
    // }
// ----

// -----Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function viewCategoryDetails(category){
        setselectedcategory(category);
        setShow(true);
    }
// -----

    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === Category_activePage} onClick={()=>{setCategory_ActivePage(number)}} >
                {number}
            </Pagination.Item>,
        );
    }

// ------------- Fetch Datas ---------------
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

// ------------- Delete Datas ---------------
    async function deleteCategory(id) {
        try{
            const response = await axios.delete(`http://localhost:5005/DeleteCategoryDatas/${id}`);
            alert(response.data.message);
            const updateddatas = categoryData.filter((delcat)=>{ return delcat._id !== id});
            setCategoryData(updateddatas);
        }
        catch(err){
            console.error("Error deleting category:", err);
            alert("Failed to delete the category. Please try again.");
        }
    }
    

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
                                <td className="border p-2 text-center">S.No</td>
                                <td className="border p-2" style={{ width: "55%" }}><Link className="text-decoration-none">Category Name</Link></td>
                                <td className="border p-2 text-center"><Link className="text-decoration-none">Image</Link></td>
                                <td className="border p-2 text-end">Action</td>
                            </tr>
                        </thead>

            {/*  -------------------------------------  (1) Category Table  -----------------------------------------  */}
                        {Category_activePage===1 && (
                            <tbody>
                            {
                            categoryData.length > 0 ? (
                                [...categoryData].reverse().map((category,index) => (
                                    <tr>
                                        <td className="border p-2 py-3" style={{ width: "1px" }}>
                                            <input type="checkbox" />
                                        </td>
                                        <td className="border text-center p-2 py-3">{categoryData.length-index}</td>
                                        <td className="border p-2" style={{ width: "55%" }}>
                                            <Link to="" className="text-decoration-none text-dark">{category.Categoryname}</Link>
                                        </td>
                                        <td className="border p-2 text-center">
                                            <div >
                                                <img src={category.CategoryImage}  alt={`Image ${category._id}`}  style={{ width: '50px', margin: '10px' }} />
                                            </div>
                                        </td>
                                        <td className="border-top p-2 d-flex pt-3 justify-content-center">
                                                {['top'].map((placement) => (
                                                    <>
                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>View</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-2 m-1 bg-primary text-white" onClick={() => viewCategoryDetails(category)}>View </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Edit</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-2 m-1  bg-warning">Edit </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Delete</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-2 m-1 bg-danger text-white"  onClick={() => deleteCategory(category._id)}>Delete </Button>
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
                    </table>

                    <div className="mt-3 d-flex justify-content-center">
                        <Pagination>
                            <span aria-hidden="true" className="border d-flex align-items-center px-3 me-3" onClick={backpage}>&raquo;</span>
                            {items}  
                            <span aria-hidden="true" className="border d-flex align-items-center px-3" onClick={nextpage}>&raquo;</span>
                        </Pagination>
                    </div>



                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Category Details</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {selectedcategory ? (
                                <>
                                    <Container fluid>
                                        <Row>
                                            <Col> <h5>Category Name :</h5> </Col>
                                            <Col> <p>{selectedcategory.Categoryname}</p> </Col>
                                        </Row>

                                        <Row>
                                            <Col> <h5>Image :</h5> </Col>
                                            <Col> <img src={selectedcategory.CategoryImage} alt="" style={{width:"30%",height:"auto"}} /> </Col>
                                        </Row>
                                    </Container>
                                </>
                            ) : (
                                <p>No Category Details available here..</p>
                            )}
                        </Modal.Body>
                    </Modal>
                    
                </div>
            </Container>
        </>
    );
}

export default Categories;











// import React, { useState } from "react";

// function Categories() {
//   // State to track whether the checkbox is checked
//   const [isChecked, setIsChecked] = useState(false);

//   // Handler for checkbox change
//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   // Handler for delete button click
//   const handleDelete = () => {
//     if (isChecked) {
//       alert("Item deleted!");
//       // Add your delete logic here
//     } else {
//       alert("Please select the checkbox to delete.");
//     }
//   };

//   return (
//     <div>
//       <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
//       <label>Enable delete</label>
//       <br />
//       <button onClick={handleDelete} disabled={!isChecked}  >
//         Delete
//       </button>
//     </div>
//   );
// }

// export default Categories;
