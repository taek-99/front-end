import { Outlet } from "react-router-dom";
import {Container} from 'react-bootstrap'


function Layout() {
    return (
        <Container>
            <Outlet />
        </Container>
    );
}

export default Layout