
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
import axios from "axios";

function AddCategory({ setActiveTab }) {
    const [Categoryname, setcategoryname] = useState("");
    const [descriptionname, setdescriptionname] = useState("");
    const [Salary, setsalary] = useState("");
    const [Locationname, setLocationname] = useState("");
    const [Image, setImage] = useState(null);

    const [displayCategorydatas, setDisplayCategoryDatas] = useState([]);

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
        const contentState = newEditorState.getCurrentContent();
        const description = contentState.getPlainText();
        setdescriptionname(description);
    };

    function backtocategory() {
        // localStorage.removeItem('EditedDatas');
        setActiveTab("Categories");
    }

    useEffect(() => {
        const categorydatas_Edit = JSON.parse(localStorage.getItem('EditedDatas'));
        if (categorydatas_Edit) 
        {
            setcategoryname(categorydatas_Edit.Categoryname);
            setImage(categorydatas_Edit.CategoryImage);
        }
    }, []);
    

    function displayCategorydetails_save() 
    {
        if (!Categoryname || !Image) {
            alert("Please enter all fields");
            return;
        }
    
        const formData = new FormData();
        formData.append("Categoryname", Categoryname);
        formData.append("CategoryImage", Image);
    
        const categoryToEdit = JSON.parse(localStorage.getItem('EditedDatas'));
    
        if (categoryToEdit) 
        {
            axios.put(`http://localhost:5005/UpdateCategoryDatas/${categoryToEdit._id}`, formData)
                .then(() => {
                    alert("Categories updated successfully");
                    localStorage.removeItem('EditedDatas');
                    setActiveTab("Categories");
                })
                .catch((error) => {
                    alert("Error updating category: " + error.message);
                });
        } 
        else 
        {
            axios.post("http://localhost:5005/InsertCategoryDatas", formData)
                .then(() => {
                    alert("Category added successfully");
                })
                .catch((error) => {
                    alert("Error adding category: " + error.message);
                });
        }
    }
    


    return (
        <>
            <Container fluid className="adminpagebg">
                <Row className="border px-2">
                    <Col className="d-flex align-items-center">
                        <h2 className="Categories_title">Categories</h2>
                        <ul className="d-flex pt-4 Dashboard_lists">
                            <li><Link to="" className="text-decoration-none" style={{ color: "grey" }}>Home <PiGreaterThanLight className="p-1" /></Link></li>
                            <li><Link to="" className="text-decoration-none">Categories</Link></li>
                        </ul>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end grid gap-2">
                        <div className="bg-primary p-2 d-flex" onClick={displayCategorydetails_save}><FaRegSave fill="white" /></div>
                        <div className="bg-white p-2 d-flex" onClick={backtocategory}><FcUpLeft /></div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="adminpagebg border px-3">
                <Row>
                    <Col>
                        <div className="border mt-3">
                            <div className="border p-2"><h6 className="d-flex fw-lighter"><FaPencilAlt className="me-2" /> Add Main Category</h6></div>
                            <div className="bg-white px-2">
                                <Row className="adminpanelformpage">
                                    <Col sm={2} className="d-flex align-items-center"><span className="ms-auto d-flex"><RiStarSFill fill="red" className="p-1" /> Category Name :</span></Col>
                                    <Col className="px-4">
                                        <FloatingLabel controlId="floatingInput" label="Category Name" className="mb-3 mt-3">
                                            <Form.Control type="text" placeholder="Category Name" onChange={(e) => setcategoryname(e.target.value)} />
                                        </FloatingLabel>
                                    </Col>
                                </Row>

                                <Row className="adminpanelformpage">
                                    <Col sm={2}  className="d-flex align-items-center"><span className="ms-auto">Image :</span></Col>
                                    <Col className="px-4">
                                        <FloatingLabel controlId="floatingInput" className="mb-3 mt-3">
                                            <Form.Control type="file" className="py-3" onChange={(e) => setImage(e.target.files[0])} />
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

export default AddCategory;
