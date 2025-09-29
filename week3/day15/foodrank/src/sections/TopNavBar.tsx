import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";


function TopNavbar() {
    return(
        <Navbar>
            <Navbar.Brand>밥메추</Navbar.Brand>

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">로그인</Nav.Link>

        </Navbar>
    );
}

export default TopNavbar