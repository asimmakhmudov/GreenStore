import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../assets/GreenTekno.png'
import { BsInstagram, BsFacebook } from "react-icons/bs";

export const Footer = () => {
    return (
        <div className='footer'>
            <Container className='footCont'>
                <a href="/">
                    <img className='navLogo' src={Logo} alt="logo" />
                </a>
            </Container>
            <Container className='footCont'>
                <ul>
                    <li>Bizi izləyin:</li>
                    <li className='footIcons'>
                        <a href='#'><BsInstagram/></a>
                        <a href='#'><BsFacebook/></a>
                    </li>
                </ul>
            </Container>
            <Container className='footCont'>
                <ul>
                    <li>Əlaqə:</li>
                    <li>+994 55 *** ** **</li>
                    <li><a href="info@mail.com">info@mail.com</a></li>
                </ul>
            </Container>
            <Container className='footCont'>
                <ul>
                    <li>Ünvan:</li>
                    <li>Atatürk prospekti</li>
                </ul>
            </Container>
        </div>
    )
}
