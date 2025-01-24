
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
import { RiDeleteBinLine } from "react-icons/ri";

import { CSVLink } from "react-csv";
import * as XLSX from 'xlsx';
import jsPDF from "jspdf";
import "jspdf-autotable";


function Blog({ setActiveTab }) {
    const [showAddCategory, setshowAddCategory] = useState(false);
    const [BlogData, setBlogData] = useState([]); 
    const [Category_activePage,setCategory_ActivePage] = useState(1);
    const [selectedcategory,setselectedcategory] = useState({});



//----------------------Checkbox-------------------------
    const [ischecked,setischecked] = useState(false);
    const [selectedCategorydatas, setSelectedCategorydatas] = useState([]); 
    function selectedtodelete(categoryId) 
    {
        setSelectedCategorydatas(prevstate => prevstate.includes(categoryId) ? 
            prevstate.filter(id => id !== categoryId )  // Unselect if already selected 
            : [...prevstate,categoryId] )               // Select if not selected
    }

    const [isAllSelected, setIsAllSelected] = useState(false); 
    function handleSelectAll() 
    {
        setIsAllSelected(!isAllSelected);
        if (!isAllSelected) {
            const allCategoryIds = BlogData.map((category) => category._id);
            setSelectedCategorydatas(allCategoryIds);
        } 
        else {
            setSelectedCategorydatas([]);
        }
    }
// --------



// ------------------Delete All Details---------------------
    function deletealldetails()
    {
        if (isAllSelected && selectedCategorydatas.length > 0) 
        {
            if (window.confirm("Are you sure you want to delete all selected blog datas?")) 
            {
                try {
                    Promise.all(selectedCategorydatas.map(id => axios.delete(`http://localhost:5005/DeleteBlogDatas/${id}`)))
                        .then(() => {
                            alert("All selected blog datas have been deleted successfully.");
                            setBlogData(prev => prev.filter(category => !selectedCategorydatas.includes(category._id)));
                            setSelectedCategorydatas([]);
                        })
                        .catch((err) => {
                            console.error("Error deleting blog datas:", err);
                            alert("Failed to delete some blog datas. Please try again.");
                        });
                } catch (err) {
                    console.error("Error deleting blog datas:", err);
                    alert("Failed to delete some blog datas. Please try again.");
                }
            }
        }
}
// -----



// ----------------------Modal------------------------
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



// -------------------- Fetch Datas ------------------
    useEffect(() => {
        async function fetchCategoryData() {
            try {
                const response = await axios.get("http://localhost:5005/GetBlogDatas"); 
                setBlogData(response.data.totalblogdatas);  
            } catch (err) {
                console.error("Error fetching category data:", err);
            }
        }
        fetchCategoryData(); 
    }, []); 
// -----



// -------------------- Delete Datas -------------------
    async function deleteCategory() {
        try {
            await Promise.all( selectedCategorydatas.map(id => axios.delete(`http://localhost:5005/DeleteBlogDatas/${id}`)));
            alert("Selected blog datas deleted successfully.");
            setBlogData(prev => prev.filter(category => !selectedCategorydatas.includes(category._id)));
            setSelectedCategorydatas([]);
        } catch (err) {
            console.error("Error deleting blog:", err);
            alert("Failed to delete some blog. Please try again.");
        }
    }
// -----



//--------------------- Edit Datas -----------------------
    async function editdatas(category) 
    {
        setActiveTab('AddBlog');
        localStorage.setItem('EditedBlogDatas', JSON.stringify(category)); 
    }
// -----

    
    
      
    

    function displaynew() {
        setshowAddCategory(true);
        setActiveTab('AddBlog');
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




// -------------------- Pagination Condition -------------------
    const itemsPerPage = 10;
    const startIndex = (Category_activePage - 1) * itemsPerPage;    
    const endIndex = startIndex + itemsPerPage;                     
    const pageData = BlogData.slice(startIndex, endIndex); 
// -----



// -------------------- Excel ----------------------------------
const exportToExcel = () => {
    if (BlogData.length === 0) {
        alert("No data available to export.");
        return;
    }

    const worksheet = XLSX.utils.json_to_sheet(BlogData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Categories");

    XLSX.writeFile(workbook, "CategoryDatas.xlsx");
};
// -----


// -------------------- Pdf ------------------------------------
function exportToPDF(){
    if (BlogData.length === 0) {
        alert("No data available to export.");
        return;
    }

    const doc = new jsPDF();

    // Add title
    doc.text("Category Data", 14, 10);

    // Define table columns and rows
    const columns = ["S.No", "Blog Title", "Image URL", ];
    const rows = BlogData.map((category, index) => [
        index + 1,
        category.BlogTitle,
        category.Im,
    ]);

    // Add table to the PDF
    doc.autoTable({
        head: [columns],
        body: rows,
        startY: 20,
    });
    doc.autoTable(BlogData);

    // Save the PDF
    doc.save("BlogDatas.pdf");
};
// -----

    return (
        <>
            <Container fluid className="adminpagebg">
                <Row className="px-2">
                    <Col className="d-flex align-items-center">
                        <h2 className="Categories_title">Blog</h2>
                        <ul className="d-flex pt-4 Dashboard_lists">
                            <li><Link to="" className="text-decoration-none" style={{ color: "grey" }}>Home <PiGreaterThanLight className="p-1" /></Link></li>
                            <li><Link to="" className="text-decoration-none">Blog</Link></li>
                        </ul>
                    </Col>

                    <Col className="d-flex align-items-center grid gap-2">
                        <div className="ms-auto p-2 d-flex bg-primary" onClick={displaynew}><FaPlus fill="white" /></div>
                        <div className="p-2 d-flex bg-danger" onClick={deletealldetails}><RiDeleteBinLine fill="white"  /></div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="adminpagebg border px-3">
                <div className="border p-1 mt-3 pb-0 d-flex">
                    <h6 className="Categories_title p-1 d-flex align-items-center"><IoListSharp /> Blog List</h6>
                    <div className="ms-auto m-1 d-flex gap-1">
                        {['top'].map((placement) => (
                                                    <>
                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Csv</Tooltip>
                                                            } >
                                                           <Button type="button" className="border ms-auto p-2 m-1 convertbutton"><CSVLink data={BlogData}><BsFiletypeCsv fill="white" /></CSVLink></Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Excel</Tooltip>
                                                            } >
                                                            <Button type="button" className="border p-2 m-1 btn-light convertbutton" onClick={exportToExcel}><FaRegFileExcel fill="white" /> </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Pdf</Tooltip>
                                                            } >
                                                            <Button type="button" className="border p-2 m-1 btn-light convertbutton" onClick={exportToPDF}><FaRegFilePdf fill="white" /> </Button>
                                                        </OverlayTrigger>
                                                    </>
                                                ))}
                    </div>
                </div>

                <div className="border p-3 bg-white" style={{ height: "500px", overflowY: "auto" }}>
                    <table style={{ width: "100%" }} className="border">
                        <thead>
                            <tr>
                                <td className="border p-2" style={{ width: "1px" }}>
                                    <input type="checkbox"  
                                        checked={isAllSelected}
                                        onChange={handleSelectAll} /></td>
                                <td className="border p-2 text-center">S.No</td>
                                <td className="border p-2" style={{ width: "55%" }}>Blog Title</td>
                                <td className="border p-2 text-center">Image</td>
                                <td className="border p-2 text-center">Description</td>
                                <td className="border p-2 text-center">Action</td>
                            </tr>
                        </thead>


            {/*  -------------------------------------  (1) Blog Table  -----------------------------------------  */}
                        {Category_activePage===1 && (
                            <tbody>
                            {
                                pageData.length > 0 ? (
                                    pageData.reverse().map((category,index) => (
                                    <tr key={category._id}>
                                        <td className="border p-2 py-3" style={{ width: "1px" }}>
                                            <input type="checkbox"   
                                                checked={selectedCategorydatas.includes(category._id)} 
                                                onClick={() => selectedtodelete(category._id)}  />
                                        </td>
                                        <td className="border text-center p-2 py-3">{pageData.length-index}</td>
                                        <td className="border p-2" style={{ width: "55%" }}>
                                            <Link to="" className="text-decoration-none text-dark">{category.BlogTitle}</Link>
                                        </td>
                                        <td className="border p-2 text-center">
                                            <div >
                                                <img src={category.BlogImage}  alt={`Image ${category._id}`}  style={{ width: '50px', margin: '10px' }} />
                                            </div>
                                        </td>
                                        <td className="border p-2 text-center">
                                            <div>
                                                <p>{category.BlogDescription}</p>
                                            </div>
                                        </td>
                                        <td className="border-top p-2 d-flex pt-3 justify-content-center">
                                                {['top'].map((placement) => (
                                                    <>
                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>View</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-2 m-1 bg-primary text-white border" onClick={() => viewCategoryDetails(category)}>View </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Edit</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-2 m-1  bg-warning border border-none" onClick={() => editdatas(category)} >Edit </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Delete</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-2 m-1 bg-danger text-white border"  onClick={() => deleteCategory(category._id)} disabled={!selectedCategorydatas.includes(category._id)}  >Delete </Button>
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
                            )                            
                            }
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
                            <Modal.Title>BLOG DETAILS</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {selectedcategory ? (
                                <>
                                    <Container fluid>
                                        <Row>
                                            <Col> <h5>Blog Name :</h5> </Col>
                                            <Col> <p>{selectedcategory.BlogTitle}</p> </Col>
                                        </Row>

                                        <Row>
                                            <Col> <h5>Blog Image :</h5> </Col>
                                            <Col> <img src={selectedcategory.BlogImage} alt="" style={{width:"30%",height:"auto"}} /> </Col>
                                        </Row>

                                        <Row>
                                            <Col> <h5>Blog Description :</h5> </Col>
                                            <Col> <p>{selectedcategory.BlogDescription}</p> </Col>
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

export default Blog;



