import styled from "styled-components";
import React from 'react';
import hamburguer from '../../imgs/burguer.png'
import logo from '../../imgs/galoBanner.png'
import { useState } from "react";
import { Link as ScrollLink, Element} from "react-scroll"
import { Link } from "react-router-dom";

const Head = styled.header`
    position: fixed;
    z-index: 50;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100%;
    padding: 1em 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background: white;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
    transition-property: left;
    transition-duration: 0.5s;

    @media (min-width: 1100px) {
          translate: 0 0;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          left: 0;
          transition-property: left;
          transition-duration: 0s;
          height: 5.5em;
          padding: 1em;
          visibility: visible;
    }
`
const Burguer = styled.div`
    position: fixed;
    width: 0;
    height: 0;
    z-index: 100;
    top: 2%;
    left: 5%;
    visibility: visible;
    opacity: 1;
    
    @media (min-width: 1100px) {
        visibility: hidden;
        opacity: 0;
    }
`
const Hamburguer = styled.img`
    width: 41.17px;
    cursor: pointer;

`
const LogoHeader = styled.div`
display: flex;
justify-content: space-between;
`
const LogoSideBarimg = styled.img`
    margin: auto auto auto 2em;
    width: 10em;
`
const Nav = styled.div`
`
const NavHeader = styled.ul`
    padding-top: 1.5em;

    li{
        text-align: start;
        list-style: none;
        padding: 0.5em;
        font-size: 1.3rem;
    }

    a{
        text-decoration: none;
        color: black;
    }

    @media (min-width: 1100px) {
        display: flex;
        padding: 0;
        text-align: center;
    }
`
const LoginHeader = styled.div`
    position: absolute;
    bottom: 2%;
    text-align: start;
    padding: 0.5em;

    @media (min-width: 1100px) {
        position: unset;
        padding: 0;
        text-align: center;
        margin-right: 1em;
    }

`
const UnderlineLogin = styled.div`
    border: 1px solid #000;
    width: 300%;

    @media (min-width: 1100px) {
        visibility: hidden;
        opacity: 0;
    }
`

const LoginAnchor = styled.a`
    text-decoration: none;
    list-style: none;
    color: black;
    font-size: 1.3rem;
`

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <Burguer>
                <Hamburguer
                    src={hamburguer}
                    alt='burguer'
                    onClick={toggleMenu}></Hamburguer>
            </Burguer>
            <Head isOpen={menuOpen}>
                <LogoHeader>
                    <LogoSideBarimg
                        src={logo}
                        alt='logo'
                        className='logo-img'
                    ></LogoSideBarimg>
                </LogoHeader>
                <Nav>
                    <NavHeader>
                        <li>
                            <ScrollLink
                            activeClass="active"
                            to="MainPage"
                            spy={true}
                            offset={-50}
                            duration={500}>
                            <a href="home">Home</a>
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                            activeClass="active"
                            to="Problema"
                            spy={true}
                            offset={-50}
                            duration={500}>
                            <a href="problema">Problema</a>
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                            activeClass="active"
                            to="Causa"
                            spy={true}
                            offset={-50}
                            duration={500}>
                            <a href="#causas">Causas</a>
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                            activeClass="active"
                            to="Solucao"
                            spy={true}
                            offset={-50}
                            duration={500}>
                            <a href="#quem-somos">Solução</a>
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                            activeClass="active"
                            to="AboutUs"
                            spy={true}
                            offset={-50}
                            duration={500}>
                            <a href="#equipe">Sobre Nós</a>
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                            activeClass="active"
                            to="Contato"
                            spy={true}
                            offset={-50}
                            duration={500}>
                            <a href="#equipe">Contato</a>
                            </ScrollLink>
                        </li>
                    </NavHeader>
                </Nav>
                <LoginHeader>
                    <UnderlineLogin></UnderlineLogin>
                    <Link to="/login">Login</Link>
                </LoginHeader>

            </Head>
        </div>
    );
}

export default Header