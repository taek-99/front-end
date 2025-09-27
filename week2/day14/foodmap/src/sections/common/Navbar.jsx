import { Link } from "react-router-dom";
import {Nav, Navbar as BootNavbar} from 'react-bootstrap'



function Navbar() {
    return (
        <BootNavbar>
            <BootNavbar.Brand>Logo</BootNavbar.Brand>

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">로그인</Nav.Link>

        </BootNavbar>
    );
}

export default Navbar