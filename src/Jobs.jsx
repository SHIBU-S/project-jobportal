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


function Jobs({ setActiveTab }) {
    // const [showAddCategory, setshowAddCategory] = useState(false);
    const [Job_activePage,setJob_ActivePage] = useState(1);

    const [totalJobDatas,setTotalJobDatas] = useState([]);

    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === Job_activePage} onClick={()=>{setJob_ActivePage(number)}} >
                {number}
            </Pagination.Item>,
        );
    }


    // ----------- Checkbox
    const [ischecked,setischecked] = useState(false);
    const [selectedJobdatas, setSelectedJobdatas] = useState([]);
    function selectedtodelete(JobID){
        setSelectedJobdatas(prevstate => prevstate.includes(JobID) ? 
        prevstate.filter(id => id !== JobID )  // Unselect if already selected 
        : [...prevstate,JobID] )               
    }

    const [isAllSelected, setIsAllSelected] = useState(false); 
    function handleSelectAll() 
    {
        setIsAllSelected(!isAllSelected);
        if (!isAllSelected) {
            const allJobIds = totalJobDatas.map((job) => job._id);
            setSelectedJobdatas(allJobIds);
        } 
        else {
            setSelectedJobdatas([]);
        }
    }
    //---------


    // -------------------- Fetch JobDatas -----------------
    useEffect(()=>{
        async function fetchJobDatas() {
            try{
                const response = await axios.get("http://localhost:5005/GetJobDatas");
                setTotalJobDatas(response.data.totaljobdatas);
            }
            catch(err){
                alert("Error fetching Job data:");
            }
        }
        fetchJobDatas();
    }, []);
    // --------


    // -------------------- Pagination Condition -------------------
    const itemsPerPage = 10;
    const startIndex = (Job_activePage - 1) * itemsPerPage;    
    const endIndex = startIndex + itemsPerPage;                     
    const pageData = totalJobDatas.slice(startIndex, endIndex); 
    // --------


    // -------------------- Delete Datas ------------------
    async function deleteJobdatas() {
        try{
            await Promise.all(selectedJobdatas.map(id=> axios.delete(`http://localhost:5005/DeleteJobDatas/${id}`)));
            setTotalJobDatas(prev => prev.filter(job => !selectedJobdatas.includes(job._id)));
            alert("Successfully Deleted this details..");
        }
        catch(err){
            alert("Failed to delete dats.. Please try again.");
        }
    }
    // --------


    //--------------------- Edit Datas -----------------------
    async function editdatas(jobdatas) 
    {
        setActiveTab('AddJobs');
        localStorage.setItem('EditedJobDatas', JSON.stringify(jobdatas)); 
    }
    // --------


    // ------------------Delete All Details---------------------
    function deletealldetails()
    {
        if (isAllSelected && selectedJobdatas.length > 0) 
        {
            if (window.confirm("Are you sure you want to delete all selected categories?")) 
            {
                try 
                {
                    Promise.all(selectedJobdatas.map(id => axios.delete(`http://localhost:5005/DeleteJobDatas/${id}`)))
                        .then(() => {
                            alert("All selected Job Datas have been deleted successfully.");
                            setTotalJobDatas(prev => prev.filter(job => !selectedJobdatas.includes(job._id)));
                            setSelectedJobdatas([]);
                        })
                        .catch((err) => {
                            console.error("Error deleting categories:", err);
                            alert("Failed to delete some categories. Please try again.");
                        });
                } 
                catch (err) 
                {
                    console.error("Error deleting categories:", err);
                    alert("Failed to delete some categories. Please try again.");
                }
            }
        }
    }
    // --------


    // ----------------------Modal------------------------
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedJobDetails, setSelectedJobDetails] = useState(null);

    function viewJobDetails(jobdatas) {
        setSelectedJobDetails(jobdatas);
        setShow(true); 
    }
    // -------
    


    function displaynew() {
        // setshowAddCategory(true);
        setActiveTab('AddJobs');
    }

    function backpage(){
        if(Job_activePage>1){
            setJob_ActivePage(Job_activePage-1);
        }
    }
    function nextpage(){
        if(Job_activePage<5){
            setJob_ActivePage(Job_activePage+1);
        }
    }


    // -------------------- Excel ----------------------------------
    const exportToExcel = () => {
        if (totalJobDatas.length === 0) {
            alert("No data available to export.");
            return;
        }
    
        const worksheet = XLSX.utils.json_to_sheet(totalJobDatas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Jobs");
    
        XLSX.writeFile(workbook, "JobDatas.xlsx");
    };
    // -----
    
    
    // -------------------- Pdf ------------------------------------
    function exportToPDF(){
        if (totalJobDatas.length === 0) {
            alert("No data available to export.");
            return;
        }
    
        const doc = new jsPDF();
    
        // Add title
        doc.text("Job Datas", 14, 10);
    
        // Define table columns and rows
        const columns = ["S.No", "Main Category", "Job Position", "Description", "Salary", "Website Link", "Notice Period", "Location", "Job Type"];
        const rows = totalJobDatas.map((job, index) => [
            index + 1,
            job.MainCategory,
            job.JobPosition,
            job.Description,
            job.Salary,
            job.WebsiteLink,
            // job.NoticePeriod,
            job.Location,
            job.JobType
        ]);
    
        // Add table to the PDF
        doc.autoTable({
            head: [columns],
            body: rows,
            startY: 20,
        });
        doc.autoTable(totalJobDatas);
    
        // Save the PDF
        doc.save("JobDatas.pdf");
    };
    // -----



    return (
        <>
            <Container fluid className="adminpagebg">
                <Row className="px-2">
                    <Col className="d-flex align-items-center">
                        <h2 className="Categories_title">Jobs</h2>
                        <ul className="d-flex pt-4 Dashboard_lists">
                            <li><Link to="" className="text-decoration-none" style={{ color: "grey" }}>Home <PiGreaterThanLight className="p-1" /></Link></li>
                            <li><Link to="" className="text-decoration-none">Jobs</Link></li>
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
                    <h6 className="Categories_title p-1 d-flex align-items-center"><IoListSharp /> Job List</h6>
                    <div className="ms-auto m-1 d-flex gap-1">
                        {['top'].map((placement) => (
                                                    <>
                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Csv</Tooltip>
                                                            } >
                                                           <Button type="button" className="border ms-auto p-2 m-1 convertbutton"><CSVLink data={totalJobDatas}><BsFiletypeCsv fill="white" /></CSVLink></Button>
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
                                <td className="border p-2" style={{ width: "1px" }}><input type="checkbox" 
                                                checked={isAllSelected} 
                                                onChange={handleSelectAll} /></td>
                                <td className="border p-2">S.No</td>
                                <td className="border p-2 text-center">Main Category</td>
                                <td className="border p-2 text-center">Job Position</td>
                                <td className="border p-2 text-center">Description</td>
                                <td className="border p-2 text-center">Salary</td>
                                <td className="border p-2 text-center">Website Link</td>
                                {/* <td className="border p-2 text-center">Notice Period</td> */}
                                <td className="border p-2 text-center">Location</td>
                                <td className="border p-2 text-center">Job Type</td>
                                <td className="border p-2 text-center">Image</td>
                                <td className="border p-2 text-center">Actions</td> 
                            </tr>
                        </thead>

            {/*  ------------------------------------  (1) Job Table  -----------------------------------------  */}
                        {Job_activePage ===1 && (<tbody>
                            {
                                pageData && pageData.length > 0 ? (
                                    pageData.reverse().map((jobdatas,index) => (
                                <tr key={jobdatas._id}>
                                    <td className="border p-1 text-center"> <input type="checkbox" 
                                        checked={selectedJobdatas.includes(jobdatas._id)} 
                                        onClick={()=>selectedtodelete(jobdatas._id)} /> 
                                    </td>
                                    <td className="border p-1  text-center">{pageData.length-index}</td> 
                                    <td className="border p-1 text-center"> {jobdatas.MainCategory}</td>
                                    <td className="border p-1 text-center">{jobdatas.JobPosition}</td>
                                    <td className="border p-1 text-center">{jobdatas.Description}</td>
                                    <td className="border p-1 text-center">{jobdatas.Salary}</td>
                                    <td className="border p-1 text-center">{jobdatas.WebsiteLink}</td>
                                    {/* <td className="border p-1 text-center">{jobdatas.NoticePeriod}</td> */}
                                    <td className="border p-1 text-center">{jobdatas.Location}</td>
                                    <td className="border p-1 text-center">{jobdatas.JobType}</td>
                                    <td className="border p-1 text-center"><img src={jobdatas.Image} alt="Job"  style={{ width: "30px", height: "30px" }}   /></td>
                                    <td className="border-top d-block pt-3 ">
                                                {['top'].map((placement) => (
                                                    <>
                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>View</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 m-1 bg-primary text-white border" onClick={()=>viewJobDetails(jobdatas)} >View </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Edit</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 bg-warning border border-none" onClick={() => editdatas(jobdatas)} >Edit </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Delete</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 m-1 bg-danger text-white border" 
                                                                disabled={!selectedJobdatas.includes(jobdatas._id)} onClick={()=>deleteJobdatas(jobdatas._id)} >Delete </Button>
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
                        )}




            {/*  ------------------------------------  (2) Job Table  -----------------------------------------  */}
                        {Job_activePage ===2 && (<tbody>
                            {
                                pageData && pageData.length > 0 ? (
                                    pageData.reverse().map((jobdatas,index) => (
                                <tr key={jobdatas._id}>
                                    <td className="border p-1 text-center"> <input type="checkbox" 
                                        checked={selectedJobdatas.includes(jobdatas._id)} 
                                        onClick={()=>selectedtodelete(jobdatas._id)} /> 
                                    </td>
                                    <td className="border p-1  text-center">{startIndex+pageData.length-index}</td> 
                                    <td className="border p-1 text-center"> {jobdatas.MainCategory}</td>
                                    <td className="border p-1 text-center">{jobdatas.JobPosition}</td>
                                    <td className="border p-1 text-center">{jobdatas.Description}</td>
                                    <td className="border p-1 text-center">{jobdatas.Salary}</td>
                                    <td className="border p-1 text-center">{jobdatas.WebsiteLink}</td>
                                    {/* <td className="border p-1 text-center">{jobdatas.NoticePeriod}</td> */}
                                    <td className="border p-1 text-center">{jobdatas.Location}</td>
                                    <td className="border p-1 text-center">{jobdatas.JobType}</td>
                                    <td className="border p-1 text-center"><img src={jobdatas.Image} alt="Job"  style={{ width: "30px", height: "30px" }}   /></td>
                                    <td className="border-top d-block pt-3 ">
                                                {['top'].map((placement) => (
                                                    <>
                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>View</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 m-1 bg-primary text-white border" onClick={()=>viewJobDetails(jobdatas)} >View </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Edit</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 bg-warning border border-none" onClick={() => editdatas(jobdatas)} >Edit </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Delete</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 m-1 bg-danger text-white border" 
                                                                disabled={!selectedJobdatas.includes(jobdatas._id)} onClick={()=>deleteJobdatas(jobdatas._id)} >Delete </Button>
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
                        )}





                        {/*  ------------------------------------  (3) Job Table  -----------------------------------------  */}
                        {Job_activePage ===3 && (<tbody>
                            {
                                pageData && pageData.length > 0 ? (
                                    pageData.reverse().map((jobdatas,index) => (
                                <tr key={jobdatas._id}>
                                    <td className="border p-1 text-center"> <input type="checkbox" 
                                        checked={selectedJobdatas.includes(jobdatas._id)} 
                                        onClick={()=>selectedtodelete(jobdatas._id)} /> 
                                    </td>
                                    <td className="border p-1  text-center">{startIndex+pageData.length-index}</td> 
                                    <td className="border p-1 text-center"> {jobdatas.MainCategory}</td>
                                    <td className="border p-1 text-center">{jobdatas.JobPosition}</td>
                                    <td className="border p-1 text-center">{jobdatas.Description}</td>
                                    <td className="border p-1 text-center">{jobdatas.Salary}</td>
                                    <td className="border p-1 text-center">{jobdatas.WebsiteLink}</td>
                                    {/* <td className="border p-1 text-center">{jobdatas.NoticePeriod}</td> */}
                                    <td className="border p-1 text-center">{jobdatas.Location}</td>
                                    <td className="border p-1 text-center">{jobdatas.JobType}</td>
                                    <td className="border p-1 text-center"><img src={jobdatas.Image} alt="Job"  style={{ width: "30px", height: "30px" }}   /></td>
                                    <td className="border-top d-block pt-3 ">
                                                {['top'].map((placement) => (
                                                    <>
                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>View</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 m-1 bg-primary text-white border" onClick={()=>viewJobDetails(jobdatas)} >View </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Edit</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 bg-warning border border-none" onClick={() => editdatas(jobdatas)} >Edit </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Delete</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 m-1 bg-danger text-white border" 
                                                                disabled={!selectedJobdatas.includes(jobdatas._id)} onClick={()=>deleteJobdatas(jobdatas._id)} >Delete </Button>
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
                        )}




                        {/*  ------------------------------------  (4) Job Table  -----------------------------------------  */}
                        {Job_activePage ===4 && (<tbody>
                            {
                                pageData && pageData.length > 0 ? (
                                    pageData.reverse().map((jobdatas,index) => (
                                <tr key={jobdatas._id}>
                                    <td className="border p-1 text-center"> <input type="checkbox" 
                                        checked={selectedJobdatas.includes(jobdatas._id)} 
                                        onClick={()=>selectedtodelete(jobdatas._id)} /> 
                                    </td>
                                    <td className="border p-1  text-center">{startIndex+pageData.length-index}</td> 
                                    <td className="border p-1 text-center"> {jobdatas.MainCategory}</td>
                                    <td className="border p-1 text-center">{jobdatas.JobPosition}</td>
                                    <td className="border p-1 text-center">{jobdatas.Description}</td>
                                    <td className="border p-1 text-center">{jobdatas.Salary}</td>
                                    <td className="border p-1 text-center">{jobdatas.WebsiteLink}</td>
                                    {/* <td className="border p-1 text-center">{jobdatas.NoticePeriod}</td> */}
                                    <td className="border p-1 text-center">{jobdatas.Location}</td>
                                    <td className="border p-1 text-center">{jobdatas.JobType}</td>
                                    <td className="border p-1 text-center"><img src={jobdatas.Image} alt="Job"  style={{ width: "30px", height: "30px" }}   /></td>
                                    <td className="border-top d-block pt-3 ">
                                                {['top'].map((placement) => (
                                                    <>
                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>View</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 m-1 bg-primary text-white border" onClick={()=>viewJobDetails(jobdatas)} >View </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Edit</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 bg-warning border border-none" onClick={() => editdatas(jobdatas)} >Edit </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Delete</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 m-1 bg-danger text-white border" 
                                                                disabled={!selectedJobdatas.includes(jobdatas._id)} onClick={()=>deleteJobdatas(jobdatas._id)} >Delete </Button>
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
                        )}



                        {/*  ------------------------------------  (5) Job Table  -----------------------------------------  */}
                        {Job_activePage ===5 && (<tbody>
                            {
                                pageData && pageData.length > 0 ? (
                                    pageData.reverse().map((jobdatas,index) => (
                                <tr key={jobdatas._id}>
                                    <td className="border p-1 text-center"> <input type="checkbox" 
                                        checked={selectedJobdatas.includes(jobdatas._id)} 
                                        onClick={()=>selectedtodelete(jobdatas._id)} /> 
                                    </td>
                                    <td className="border p-1  text-center">{startIndex+pageData.length-index}</td> 
                                    <td className="border p-1 text-center"> {jobdatas.MainCategory}</td>
                                    <td className="border p-1 text-center">{jobdatas.JobPosition}</td>
                                    <td className="border p-1 text-center">{jobdatas.Description}</td>
                                    <td className="border p-1 text-center">{jobdatas.Salary}</td>
                                    <td className="border p-1 text-center">{jobdatas.WebsiteLink}</td>
                                    {/* <td className="border p-1 text-center">{jobdatas.NoticePeriod}</td> */}
                                    <td className="border p-1 text-center">{jobdatas.Location}</td>
                                    <td className="border p-1 text-center">{jobdatas.JobType}</td>
                                    <td className="border p-1 text-center"><img src={jobdatas.Image} alt="Job"  style={{ width: "30px", height: "30px" }}   /></td>
                                    <td className="border-top d-block pt-3">
                                                {['top'].map((placement) => (
                                                    <>
                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>View</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 m-1 bg-primary text-white border" onClick={()=>viewJobDetails(jobdatas)} >View </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Edit</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 bg-warning border border-none" onClick={() => editdatas(jobdatas)} >Edit </Button>
                                                        </OverlayTrigger>

                                                        <OverlayTrigger key={placement} placement={placement} overlay={ 
                                                            <Tooltip id={`tooltip-${placement}`}>Delete</Tooltip>
                                                            } >
                                                            <Button type="button" className=" p-1 m-1 bg-danger text-white border" 
                                                                disabled={!selectedJobdatas.includes(jobdatas._id)} onClick={()=>deleteJobdatas(jobdatas._id)} >Delete </Button>
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
                        )}

                       
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
                            <Modal.Title>JOB DETAILS</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {selectedJobDetails ? (
                                <>
                                    <Container fluid>
                                        <Row>
                                            <Col><h5>Main Category:</h5></Col>
                                            <Col><p>{selectedJobDetails.MainCategory}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col><h5>Job Position:</h5></Col>
                                            <Col><p>{selectedJobDetails.JobPosition}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col><h5>Description:</h5></Col>
                                            <Col><p>{selectedJobDetails.Description}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col><h5>Salary:</h5></Col>
                                            <Col><p>{selectedJobDetails.Salary}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col><h5>Website Link:</h5></Col>
                                            <Col><p>{selectedJobDetails.WebsiteLink}</p></Col>
                                        </Row>
                                        {/* <Row>
                                            <Col><h5>Notice Period:</h5></Col>
                                            <Col><p>{selectedJobDetails.NoticePeriod}</p></Col>
                                        </Row> */}
                                        <Row>
                                            <Col><h5>Location:</h5></Col>
                                            <Col><p>{selectedJobDetails.Location}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col><h5>Job Type:</h5></Col>
                                            <Col><p>{selectedJobDetails.JobType}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col><h5>Image:</h5></Col>
                                            <Col><img src={selectedJobDetails.Image} alt="Job" style={{ width: "100%", height: "auto" }} /></Col>
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

export default Jobs;






