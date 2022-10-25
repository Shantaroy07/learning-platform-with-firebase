import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="info">
            <Container >


                <Navbar.Brand ><img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/512/2452/2452150.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />  Learning Programing Languages Platform</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto ">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/login">LogIn</Nav.Link>
                        <Nav.Link href="/signup">SignUp</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;