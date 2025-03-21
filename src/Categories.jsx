
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


function Categories({ setActiveTab }) {
    const [showAddCategory, setshowAddCategory] = useState(false);
    const [categoryData, setCategoryData] = useState([]); 
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
            const allCategoryIds = categoryData.map((category) => category._id);
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
            if (window.confirm("Are you sure you want to delete all selected categories?")) 
            {
                try {
                    Promise.all(selectedCategorydatas.map(id => axios.delete(`http://localhost:5005/DeleteCategoryDatas/${id}`)))
                        .then(() => {
                            alert("All selected categories have been deleted successfully.");
                            setCategoryData(prev => prev.filter(category => !selectedCategorydatas.includes(category._id)));
                            setSelectedCategorydatas([]);
                        })
                        .catch((err) => {
                            console.error("Error deleting categories:", err);
                            alert("Failed to delete some categories. Please try again.");
                        });
                } catch (err) {
                    console.error("Error deleting categories:", err);
                    alert("Failed to delete some categories. Please try again.");
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
                const response = await axios.get("http://localhost:5005/GetCategoryDatas"); 
                setCategoryData(response.data.totaldatas);  
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
            await Promise.all( selectedCategorydatas.map(id => axios.delete(`http://localhost:5005/DeleteCategoryDatas/${id}`)));
            alert("Selected categories deleted successfully.");
            setCategoryData(prev => prev.filter(category => !selectedCategorydatas.includes(category._id)));
            setSelectedCategorydatas([]);
        } catch (err) {
            console.error("Error deleting categories:", err);
            alert("Failed to delete some categories. Please try again.");
        }
    }
// -----



//--------------------- Edit Datas -----------------------
    async function editdatas(category) 
    {
        setActiveTab('AddCategory');
        localStorage.setItem('EditedDatas', JSON.stringify(category)); 
    }
// -----

    
    
      
    

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




// -------------------- Pagination Condition -------------------
    const itemsPerPage = 10;
    const startIndex = (Category_activePage - 1) * itemsPerPage;    
    const endIndex = startIndex + itemsPerPage;                     
    const pageData = categoryData.slice(startIndex, endIndex); 
// -----



// -------------------- Excel ----------------------------------
const exportToExcel = () => {
    if (categoryData.length === 0) {
        alert("No data available to export.");
        return;
    }

    const worksheet = XLSX.utils.json_to_sheet(categoryData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Categories");

    XLSX.writeFile(workbook, "CategoryDatas.xlsx");
};
// -----


// -------------------- Pdf ------------------------------------
function exportToPDF(){
    if (categoryData.length === 0) {
        alert("No data available to export.");
        return;
    }

    const doc = new jsPDF();

    // Add title
    doc.text("Category Data", 14, 10);

    // Define table columns and rows
    const columns = ["S.No", "Category Name", "Image URL"];
    const rows = categoryData.map((category, index) => [
        index + 1,
        category.Categoryname,
        category.CategoryImage,
    ]);

    // Add table to the PDF
    doc.autoTable({
        head: [columns],
        body: rows,
        startY: 20,
    });
    doc.autoTable(categoryData);

    // Save the PDF
    doc.save("CategoryDatas.pdf");
};
// -----

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
                        <div className="p-2 d-flex bg-danger" onClick={deletealldetails}><RiDeleteBinLine fill="white"  /></div>
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
                                                           <Button type="button" className="border ms-auto p-2 m-1 convertbutton"><CSVLink data={categoryData}><BsFiletypeCsv fill="white" /></CSVLink></Button>
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
                                <td className="border p-2" style={{ width: "55%" }}><Link className="text-decoration-none">Category Name</Link></td>
                                <td className="border p-2 text-center"><Link className="text-decoration-none">Image</Link></td>
                                <td className="border p-2 text-center">Action</td>
                            </tr>
                        </thead>


            {/*  -------------------------------------  (1) Category Table  -----------------------------------------  */}
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






                        {/*  -------------------------------------  (2) Category Table  -----------------------------------------  */}
                        {Category_activePage===2 && (
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
                                        <td className="border text-center p-2 py-3">{startIndex+pageData.length-index}</td>
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







                        {/*  -------------------------------------  (3) Category Table  -----------------------------------------  */}
                        {Category_activePage===3 && (
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
                                        <td className="border text-center p-2 py-3">{startIndex+pageData.length-index}</td> 
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







                        {/*  -------------------------------------  (4) Category Table  -----------------------------------------  */}
                        {Category_activePage===4 && (
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
                                        <td className="border text-center p-2 py-3">{startIndex+pageData.length-index}</td>
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






                        {/*  -------------------------------------  (5) Category Table  -----------------------------------------  */}
                        {Category_activePage===5 && (
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
                                        <td className="border text-center p-2 py-3">{startIndex+pageData.length-index}</td>
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
                            <Modal.Title>CATEGORY DETAILS</Modal.Title>
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



