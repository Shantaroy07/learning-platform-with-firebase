import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';


function NavBar() {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="info">
            <Container >
                <Navbar.Brand ><img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/512/2452/2452150.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />  Learning Programing Languages </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto ">
                        <Link className='m-1 text-decoration-none text-dark' to='/'>Home</Link>
                        <Link className='m-1 text-decoration-none text-dark' to='/courses'>Courses</Link>
                        <Link className='m-1 text-decoration-none text-dark' to="/blog">Blog</Link>
                        <Link className='m-1 text-decoration-none text-dark' to="/faq">FAQ</Link>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <Link onClick={handleLogOut} className='m-1 text-decoration-none text-dark' to="/login">SignOut</Link>

                                    </>
                                    :
                                    <>
                                        <Link className='m-1 text-decoration-none text-dark' to="/login">LogIn</Link>
                                    </>
                            }


                        </>
                        <>
                            {user?.photoURL ?
                                <Image data-tip="hello world"
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}
                                >

                                </Image>
                                : <FaUser></FaUser>
                            }
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;