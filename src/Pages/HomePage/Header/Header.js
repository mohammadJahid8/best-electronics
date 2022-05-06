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
                <Navbar.Brand as={Link} to='/home' className="">
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
                        {
                            user &&
                            <NavDropdown title={
                                <span className="nav-text nav-dropdown">Dropdown</span>
                            } id="collasible-nav-dropdown" className='ps-3'>

                                <NavDropdown.Item as={Link} to="/home" className='nav-text'>Home</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/inventory" className='nav-text'>Inventory</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/blogs" className='nav-text'>Blogs</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/about" className='nav-text'>About</NavDropdown.Item>
                            </NavDropdown>}
                    </Nav>

                    <Nav>
                        {
                            !user &&
                            <Nav.Link as={Link} to="/home" className='nav-text'>Home</Nav.Link>}
                        {
                            !user &&
                            <Nav.Link as={Link} to="/inventory" className='nav-text'>Inventory</Nav.Link>}
                        {
                            user &&
                            <Nav.Link as={Link} to="/manageinventory" className='nav-text'>Manage Items</Nav.Link>
                        }

                        {user && <Nav.Link as={Link} to="/additem" className='nav-text'>Add Items</Nav.Link>}
                        {user && <Nav.Link as={Link} to="/myitem" className='nav-text'>My Items</Nav.Link>}
                        {!user && <Nav.Link as={Link} to="/blogs" className='nav-text'>Blogs</Nav.Link>}
                        {!user && <Nav.Link as={Link} to="/about" className='nav-text'>About</Nav.Link>}

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