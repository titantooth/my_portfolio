import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import './navbar.css'


function NavBar() {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])


    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <>

            <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} navibar`}>
                <Container className='navbar-container'>
                    <Navbar.Brand href="#home" className='navbar-brand'><span>Rabiee</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className='navbar-container'>
                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={() => onUpdateActiveLink('home')} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
                            <Nav.Link href="#skills" onClick={() => onUpdateActiveLink('skills')} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
                            <Nav.Link href="#projects" onClick={() => onUpdateActiveLink('projects')} className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>


                        </Nav>
                        <span className='navbar-text'>
                            <button className='header-button' onClick={() => { console.log() }}>Let's Connect!</button>
                            <div className='social-icon'>
                                <a href="#"><img src={navIcon1} alt="" /></a>
                                <a href="#"><img src={navIcon2} alt="" /></a>
                                <a href="#"><img src={navIcon3} alt="" /></a>

                            </div>

                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <div className="gpt3-navbar">
                <div className="gpt3-navbar-links">
                    <div className="gpt3-navbar-links-logo">
                        <img src={logo} alt="logo " />
                    </div>
                    <div className="gpt3-navbar-links-container">
                        <Menu />
                    </div>
                </div>
                <div className="gpt3-navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                </div>
                <div className="gpt3-navbar-menu">
                    {toggleMenu ? (
                        <RiCloseLine
                            color="#fff"
                            size={27}
                            onClick={() => setToggleMenu(false)}
                        />
                    ) : (
                        <RiMenu3Line
                            color="#fff"
                            size={27}
                            onClick={() => setToggleMenu(true)}
                        />
                    )}
                    {toggleMenu && (
                        <div className="gpt3-navbar-menu-container scale-up-center">
                            <div className="gpt3-navbar-menu-container-links">
                                <Menu />
                                <div className="gpt3-navbar-menu-container-links-sign">
                                    <p>Sign in</p>
                                    <button type="button">Sign up</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div> */}
        </>
    );
}

export default NavBar;