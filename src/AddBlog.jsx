
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

function AddBlog({ setActiveTab }) {
    const [BlogTitle, setBlogTitle] = useState("");
    const [Description,setDescription] = useState("");
    const [Image, setImage] = useState(null);

    const [displayCategorydatas, setDisplayCategoryDatas] = useState([]);

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
        const contentState = newEditorState.getCurrentContent();
        setDescription(contentState.getPlainText());
    };
    function backtoBlog() {
        setActiveTab("Blog");
    }

    // useEffect(() => {
    //     const categorydatas_Edit = JSON.parse(localStorage.getItem('EditedDatas'));
    //     if (categorydatas_Edit) 
    //     {
    //         setcategoryname(categorydatas_Edit.Categoryname);
    //         setImage(categorydatas_Edit.CategoryImage);
    //     }
    // }, []);
    

    function displayCategorydetails_save() 
    {
        if (!BlogTitle || !Image || !Description) {
            alert("Please enter all fields");
            return;
        }
    
        const formData = new FormData();
        formData.append("BlogTitle", BlogTitle);
        formData.append("BlogImage", Image);
        formData.append("BlogDescription", Description);
    
        // const categoryToEdit = JSON.parse(localStorage.getItem('EditedDatas'));
    
        // if (categoryToEdit) 
        // {
        //     axios.put(`http://localhost:5005/UpdateBlogDatas/${categoryToEdit._id}`, formData)
        //         .then(() => {
        //             alert("Categories updated successfully");
        //             localStorage.removeItem('EditedDatas');
        //             setActiveTab("Categories");
        //         })
        //         .catch((error) => {
        //             alert("Error updating category: " + error.message);
        //         });
        // } 
        // else 
        // {
            axios.post("http://localhost:5005/InsertBlogDatas", formData)
                .then(() => {
                    alert("Blog Datas added successfully");
                })
                .catch((error) => {
                    alert("Error adding Blog datas: " + error.message);
                });
        // }
    }
    


    return (
        <>
            <Container fluid className="adminpagebg">
                <Row className="border px-2">
                    <Col className="d-flex align-items-center">
                        <h2 className="Categories_title">Blog</h2>
                        <ul className="d-flex pt-4 Dashboard_lists">
                            <li><Link to="" className="text-decoration-none" style={{ color: "grey" }}>Home <PiGreaterThanLight className="p-1" /></Link></li>
                            <li><Link to="" className="text-decoration-none">Blog</Link></li>
                        </ul>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end grid gap-2">
                        <div className="bg-primary p-2 d-flex" onClick={displayCategorydetails_save}><FaRegSave fill="white" /></div>
                        <div className="bg-white p-2 d-flex" onClick={backtoBlog}><FcUpLeft /></div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="adminpagebg border px-3">
                <Row>
                    <Col>
                        <div className="border mt-3">
                            <div className="border p-2"><h6 className="d-flex fw-lighter"><FaPencilAlt className="me-2" /> Add Blogs</h6></div>
                            <div className="bg-white px-2">
                                {/* -----------------  Blog Title ---------------- */}
                                <Row className="adminpanelformpage">
                                    <Col sm={2} className="d-flex align-items-center"><span className="ms-auto d-flex"><RiStarSFill fill="red" className="p-1" /> Blog Title :</span></Col>
                                    <Col className="px-4">
                                        <FloatingLabel controlId="floatingInput" label="Blog Title" className="mb-3 mt-3">
                                            <Form.Control type="text" placeholder="blog Title" value={BlogTitle} onChange={(e) => setBlogTitle(e.target.value)} />
                                        </FloatingLabel>
                                    </Col>
                                </Row>

                                {/* -----------------  Image ---------------- */}
                                <Row className="adminpanelformpage">
                                    <Col sm={2}  className="d-flex align-items-center"><span className="ms-auto">Image :</span></Col>
                                    <Col className="px-4">
                                        <FloatingLabel controlId="floatingInput" className="mb-3 mt-3">
                                            <Form.Control type="file" className="py-3" onChange={(e) => setImage(e.target.files[0])} />
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
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AddBlog;




