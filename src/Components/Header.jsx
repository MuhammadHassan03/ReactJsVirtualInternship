import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import './Style/Header.css';
import Aos from 'aos';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../Assests/icon.png'

export const Header = () => {
    const [header, setHeader] = useState(null);
    useEffect(() => {
        Aos.init();
        setHeader(() => {
            return (
                <>
                    <div data-aos="fade-down">
                        <Navbar bg="dark" data-bs-theme="dark" className='NavbarBackgroundGradient'>
                            <Container>
                                <Container>
                                    <Nav className="me-auto">
                                        <img style={{width : '3.3rem'}} src={icon} alt="" />
                                    </Nav>
                                </Container>
                                <Container>
                                    <Nav className="me-auto">
                                        <Link style={{ textDecoration: "none" }} to='/'><Nav.Link href='/'>Home( )</Nav.Link></Link>
                                        <Link style={{ textDecoration: "none" }} to='/projects'><Nav.Link href="/projects">Projects( )</Nav.Link></Link>
                                        <Link style={{ textDecoration: "none" }} to='/skills'><Nav.Link href='/skills'>Skills( )</Nav.Link></Link>
                                    </Nav>
                                </Container>
                                <Container>
                                    <Nav className='SocialIcons'>
                                        <div style={{display : "flex", alignItems : "center"}}>
                                            <Nav.Link href='https://www.linkedin.com/in/muhammadhassan03/' target='_blank'>
                                                <LinkedInIcon fontSize='medium' htmlColor='white'></LinkedInIcon>
                                            </Nav.Link>
                                            <Nav.Link href='https://github.com/MuhammadHassan03' target='_blank'>
                                                <GitHubIcon fontSize='medium' htmlColor='white'></GitHubIcon>
                                            </Nav.Link>
                                            <Nav.Link href='mailto:engineermirzahassan@gmail.com'>
                                                <Button variant="outlined" style={{ color: 'white', borderColor: 'red' }} startIcon={<EmailIcon htmlColor='white'></EmailIcon>}> Contact me</Button>
                                            </Nav.Link>
                                        </div>
                                    </Nav>
                                </Container>
                            </Container>
                        </Navbar>
                    </div>
                </>
            );
        })
    }, [])
    return (
        <>
            {header}
        </>
    )
}
