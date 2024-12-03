import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";

function Categories(){
    return(
        <>
            <Container fluid>
                <Row className="border">
                    <Col className="d-flex align-items-center">
                        <h2 className="Dashboard_title">Categories</h2>
                        <ul className="d-flex pt-4 Dashboard_lists">
                            <li><Link to="" className="text-decoration-none text-dark pe-3">Home</Link></li>
                            <li><Link to=""  className="text-decoration-none">Categories</Link></li>    
                        </ul>    
                    </Col>

                    <Col>
                        <div><FaPlus/></div>
                        <div><FiRefreshCw/></div>
                        <div><RiDeleteBin5Fill/></div>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <div className="border p-2 mt-3"><h3>Category List</h3></div>

                <div className="border p-3" style={{height:"500px"}}>
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
                                <td className="border p-2" style={{width:"55%"}}>Examples</td>
                                <td className="border p-2 text-end">5</td>
                                <td className="border p-2 text-end"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    )
}

export default Categories;