import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



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
                        <Link className='m-1 text-decoration-none text-dark' to='/'>Home</Link>
                        <Link className='m-1 text-decoration-none text-dark' to='/courses'>Courses</Link>
                        <Link className='m-1 text-decoration-none text-dark' to="/blog">Blog</Link>
                        <Link className='m-1 text-decoration-none text-dark' to="/login">LogIn</Link>
                        <Link className='m-1 text-decoration-none text-dark' to="/signup">SignUp</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;