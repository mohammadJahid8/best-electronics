import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className="nav-bar">
            <Container>
                <Navbar.Brand href="#home" className="nav-text">
                    <img
                        src='https://www.bestelectronicsltd.com/wp-content/uploads/2018/11/Best-Electronics.png'
                        width="200"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/home" className='nav-text'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/inventory" className='nav-text'>Inventory</Nav.Link>
                        {
                            user &&
                            <Nav.Link as={Link} to="/manageinventory" className='nav-text'>Manage Items</Nav.Link>
                        }
                        {user && <Nav.Link as={Link} to="/additem" className='nav-text'>Add Items</Nav.Link>}
                        {user && <Nav.Link as={Link} to="/myitem" className='nav-text'>My Items</Nav.Link>}

                        <Nav.Link as={Link} to="/about" className='nav-text'>About</Nav.Link>
                        {
                            user ?
                                <Nav.Link onClick={handleLogOut} className='nav-text'>
                                    LogOut
                                </Nav.Link>
                                :
                                <Nav.Link as={Link} to="/login" className='nav-text'>
                                    Login
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;