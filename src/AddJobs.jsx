
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PiGreaterThanLight } from "react-icons/pi";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { RiStarSFill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { FcUpLeft } from "react-icons/fc";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";

function AddJobs({ setActiveTab }) {

    const [displayCategorydatas, setDisplayCategoryDatas] = useState([]);

    const [SelectedCategory,setSelectedCategory] = useState("");
    

    // ------------ Input Values Storage-----------
    const [MainCategoryname,setMainCategoryname] = useState([]);
    const [JobPosition,setJobPosition] = useState("");
    const [Description,setDescription] = useState("");
    const [Salary,setSalary] = useState("");
    const [WebsiteLink,setWebsitelink] = useState("");
    const [Location,setLocation] = useState("");
    const [JobType,setJobtype] = useState("");
    const [Image,setImage] = useState(null);
    // ----

    useEffect(()=>{
        async function getMainCategoryname() {
            try{
                const Categoryname = await axios.get("http://localhost:5005/GetCategoryDatas");
                setMainCategoryname(Categoryname.data.totaldatas)
            }
            catch (err) {
                console.error("Error Fetching data:", err);
            }
        }
        getMainCategoryname();
    },[]);


    useEffect(()=>{
        const editJobdatas = JSON.parse(localStorage.getItem("EditedJobsDatas"));
        if(editJobdatas){
            setSelectedCategory(editJobdatas.SelectedCategory);
            setJobPosition(editJobdatas.JobPosition);
            setDescription(editJobdatas.Description);
            setSalary(editJobdatas.Salary);
            setWebsitelink(editJobdatas.WebsiteLink);
            setLocation(editJobdatas.Location);
            setJobtype(editJobdatas.JobType);
            setImage(editJobdatas.Image);
        }
    },[]);


    // ------ Insert Job Datas
    function submitJobdatas(){
        const Job_formdatas = new FormData();
        Job_formdatas.append("MainCategory",SelectedCategory);
        Job_formdatas.append("JobPosition",JobPosition);
        Job_formdatas.append("Description",Description);
        Job_formdatas.append("Salary",Salary);
        Job_formdatas.append("WebsiteLink",WebsiteLink);
        Job_formdatas.append("Location",Location);
        Job_formdatas.append("JobType",JobType);
        Job_formdatas.append("Image",Image);

        
        if (!SelectedCategory || !JobPosition || !Description || !Salary || !WebsiteLink || !Location || !JobType || !Image) {
            alert("Please enter all job data fields.");
            return;
        }
        
        // const edit_Jobdatas = JSON.parse(localStorage.getItem("EditedJobDatas"));

        // if(edit_Jobdatas)
        // {
        //     axios.put(`http://localhost:5005/EditJobDatas/${edit_Jobdatas._id}`,Job_formdatas)
        //         .then(() => {
        //             alert("Job Datas updated successfully");
        //             localStorage.removeItem('EditedJobDatas');
        //             setActiveTab("Jobs");
        //         })
        //         .catch((error) => {
        //             alert("Error updating job datas: " + error.message);
        //         });
        // }       
        // else
        // {
            axios.post("http://localhost:5005/InsertJobDatas", Job_formdatas)
            .then(() => {
                alert("Job Datas added successfully");
            })
            .catch((error) => {
                alert("Error adding job datas: " + error.message);
            });
        // }
    }
    


    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
        const contentState = newEditorState.getCurrentContent();
        setDescription(contentState.getPlainText());
    };

    function backtocategory() {
        setActiveTab("Jobs");
    }




  


    return (
        <>
            <Container fluid className="adminpagebg">
                <Row className="border px-2">
                    <Col className="d-flex align-items-center">
                        <h2 className="Categories_title">Jobs</h2>
                        <ul className="d-flex pt-4 Dashboard_lists">
                            <li><Link to="" className="text-decoration-none" style={{ color: "grey" }}>Home <PiGreaterThanLight className="p-1" /></Link></li>
                            <li><Link to="" className="text-decoration-none">Jobs</Link></li>
                        </ul>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end grid gap-2">
                        <div className="bg-primary p-2 d-flex" onClick={submitJobdatas} ><FaRegSave fill="white" /></div>
                        <div className="bg-white p-2 d-flex" onClick={backtocategory}><FcUpLeft /></div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="adminpagebg border px-3">
                <Row>
                    <Col>
                        <div className="border mt-3">
                            <div className="border p-2"><h6 className="d-flex fw-lighter"><FaPencilAlt className="me-2" /> Add Jobs</h6></div>
                            <div className="bg-white px-2">
                                                    {/* -----------------  Main Category ---------------- */}
                                <Row className="adminpanelformpage">
                                    <Col sm={2} className="d-flex align-items-center"><span className="ms-auto d-flex"><RiStarSFill fill="red" className="p-1" /> Main Category :</span></Col>
                                    <Col className="px-4">
                                <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            {SelectedCategory || "Select Main Category"}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {MainCategoryname.length > 0 ? (
                                            MainCategoryname.map((MainCategory) => (
                                                <Dropdown.Item key={MainCategory.id} value={SelectedCategory} onClick={() => setSelectedCategory(MainCategory.Categoryname)}>
                                                    {MainCategory.Categoryname}
                                                </Dropdown.Item>
                                                
                                            ))
                                        ) : (
                                                <Dropdown.Item>No Data</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>

                                    </Col>
                                </Row>

                                                    {/* -----------------  Job Position ---------------- */}
                                <Row className="adminpanelformpage">
                                    <Col sm={2} className="d-flex align-items-center"><span className="ms-auto d-flex"> Job Position :</span></Col>
                                    <Col className="px-4">
                                        <FloatingLabel controlId="floatingInput" label="Job Position" className="mb-3 mt-3">
                                            <Form.Control type="text" placeholder="Job Position" value={JobPosition} onChange={(e)=>setJobPosition(e.target.value)}  />
                                        </FloatingLabel>
                                    </Col>
                                </Row>

                                                    {/* -----------------  Description ---------------- */}
                                <Row className="adminpanelformpage mt-3 pb-3">
                                     <Col sm={2} className="d-flex "><span className="ms-auto d-flex">Description :</span></Col>
                                     <Col className="px-4">
                                         <Editor
                                            editorState={editorState}
                                            wrapperClassName="demo-wrapper"
                                            editorClassName="demo-editor"
                                            onEditorStateChange={onEditorStateChange}
                                            value={Description}
                                        />
                                    </Col>
                                </Row>

                                                    {/* -----------------  Salary ---------------- */}
                                <Row className="adminpanelformpage">
                                    <Col sm={2} className="d-flex align-items-center"><span className="ms-auto d-flex"> Salary :</span></Col>
                                    <Col className="px-4">
                                        <FloatingLabel controlId="floatingInput" label="Salary" className="mb-3 mt-3">
                                            <Form.Control type="number" placeholder="Salary" value={Salary} onChange={(e)=>setSalary(e.target.value)} />
                                        </FloatingLabel>
                                    </Col>
                                </Row>

                                                    {/* -----------------  Website Link ---------------- */}
                                <Row className="adminpanelformpage">
                                    <Col sm={2} className="d-flex align-items-center"><span className="ms-auto d-flex"> Website Link :</span></Col>
                                    <Col className="px-4">
                                        <FloatingLabel controlId="floatingInput" label="Website Link" className="mb-3 mt-3">
                                            <Form.Control type="text" placeholder="Website Link" value={WebsiteLink} onChange={(e)=>setWebsitelink(e.target.value)}  />
                                        </FloatingLabel>
                                    </Col>
                                </Row>


                                                    {/* -----------------  Location ---------------- */}
                                <Row className="adminpanelformpage">
                                    <Col sm={2} className="d-flex align-items-center"><span className="ms-auto d-flex"> Location :</span></Col>
                                    <Col className="px-4">
                                        <FloatingLabel controlId="floatingInput" label="Location" className="mb-3 mt-3">
                                            <Form.Control type="text" placeholder="Location" value={Location} onChange={(e)=>setLocation(e.target.value)}  />
                                        </FloatingLabel>
                                    </Col>
                                </Row>

                                                    {/* -----------------  Job Type ---------------- */}
                                <Row className="adminpanelformpage">
                                    <Col sm={2} className="d-flex align-items-center"><span className="ms-auto d-flex"> Job Type :</span></Col>
                                    <Col className="px-4">
                                        <Dropdown onSelect={(e)=>setJobtype(e)} className="p-4">
                                            <Dropdown.Toggle variant="light" id="dropdown-basic" >
                                                {JobType || "Select a Job Type" }
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item eventKey="Part Time">Part Time</Dropdown.Item>
                                                <Dropdown.Item eventKey="Full Time">Full Time</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>

                                                    {/* -----------------  Image ---------------- */}
                                <Row className="adminpanelformpage">
                                    <Col sm={2}  className="d-flex align-items-center"><span className="ms-auto">Image :</span></Col>
                                    <Col className="px-4">
                                        <FloatingLabel controlId="floatingInput" className="mb-3 mt-3">
                                            <Form.Control type="file" className="py-3" onChange={(e)=>setImage(e.target.files[0])} />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AddJobs;