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
                <Navbar.Brand href="#home" className="nav-text">React-Bootstrap</Navbar.Brand>
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




        // <div>
        //     <nav class="navbar navbar-expand-lg navbar-light ">
        //         <div class="container">
        //             <a class="navbar-brand" href="#">Mouri</a>
        //             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>

        //             <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul class="navbar-nav ml-auto">
        //                     <li class="nav-item active">
        //                         <a class="nav-link" href="#">Home</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">About</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">Portfolio</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">Services</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">Contact</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>

        //     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        //         <ol class="carousel-indicators">
        //             <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        //             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        //             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        //         </ol>
        //         <div class="carousel-inner">
        //             <div class="carousel-item active">
        //                 <img class="d-block w-100" src="https://i.postimg.cc/bNQp0RDW/1.jpg" alt="First slide" />
        //                 <div class="carousel-caption d-none d-md-block">
        //                     <h5>Slider One Item</h5>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
        //                 </div>
        //             </div>
        //             <div class="carousel-item">
        //                 <img class="d-block w-100" src="https://i.postimg.cc/pVzg3LWn/2.jpg" alt="Second slide" />
        //                 <div class="carousel-caption d-none d-md-block">
        //                     <h5>Slider One Item</h5>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
        //                 </div>
        //             </div>
        //             <div class="carousel-item">
        //                 <img class="d-block w-100" src="https://i.postimg.cc/0y2F6Gpp/3.jpg" alt="Third slide" />
        //                 <div class="carousel-caption d-none d-md-block">
        //                     <h5>Slider One Item</h5>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        //             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span class="sr-only">Previous</span>
        //         </a>
        //         <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        //             <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span class="sr-only">Next</span>
        //         </a>
        //     </div>
        // </div>
    );
};

export default Header;