
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa6";
import { IoListSharp } from "react-icons/io5";
import { PiGreaterThanLight } from "react-icons/pi";

function Categories(){
    return(
        <>
            <Container fluid>
                <Row className="border">
                    <Col className="d-flex align-items-center">
                        <h2 className="Categories_title">Categories</h2>
                        <ul className="d-flex pt-4 Dashboard_lists">
                            <li><Link to="" className="text-decoration-none" style={{color:"grey"}}>Home <PiGreaterThanLight className="p-1"/></Link></li>
                            <li><Link to=""  className="text-decoration-none">Categories</Link></li>    
                        </ul>    
                    </Col>

                    <Col className=" d-flex align-items-center grid gap-2">
                        <div className="ms-auto p-2 d-flex bg-primary"><FaPlus fill="white"/></div>
                        <div className="border p-2 d-flex bg-white"><FiRefreshCw/></div>
                        <div className="border p-2 d-flex bg-danger"><RiDeleteBin5Fill fill="white"/></div>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <div className="border p-2 mt-3"><h6 className="Categories_title"><IoListSharp /> Category List</h6></div>

                <div className="border p-3 bg-white" style={{height:"500px"}}>
                    <table style={{width:"100%"}} className="border">
                        <thead>
                            <tr>
                                <td className="border p-2" style={{width:"1px"}}><input type="checkbox"></input></td>
                                <td className="border p-2" style={{width:"55%"}}><Link className="text-decoration-none">Category Name</Link></td>
                                <td className="border p-2 text-end"><Link className="text-decoration-none">Sort Order</Link></td>
                                <td className="border p-2 text-end">Action</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border p-2 py-3" style={{width:"1px"}}><input type="checkbox"></input></td>
                                <td className="border p-2" style={{width:"55%"}}></td>
                                <td className="border p-2 text-end"></td>
                                <td className="p-2 d-flex"><div className="ms-auto p-2 d-flex align-items-center bg-primary"><FaPen fill="white"/></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    )
}

export default Categories;