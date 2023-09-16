import styled from "styled-components";
import React from 'react';
import hamburguer from '../../imgs/burguer.png'
import logo from '../../imgs/galoBanner.png'

const Head = styled.header`
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1em 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background: white;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
    transition-property: visibility;
    transition-duration: 0.5s;
    visibility: visible;

    @media (min-width: 1100px) {
          translate: 0 0;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 5.5em;
          padding: 1em;
          visibility: visible;
    }
`
const Burguer = styled.div`
    position: absolute;
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
    return (
        <Head>
            <Burguer>
                <Hamburguer
                    src={hamburguer}
                    alt='burguer'></Hamburguer>
            </Burguer>
            <LogoHeader>
                <LogoSideBarimg
                    src={logo}
                    alt='logo'
                    className='logo-img'
                ></LogoSideBarimg>
            </LogoHeader>
            <Nav>
                <NavHeader>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#problema">Problema</a></li>
                    <li><a href="#causas">Causas</a></li>
                    <li><a href="#impactos">Impactos</a></li>
                    <li><a href="#solucao">Solução</a></li>
                    <li><a href="#quem-somos">Quem somos</a></li>
                    <li><a href="#equipe">Equipe</a></li>
                </NavHeader>
            </Nav>
            <LoginHeader>
                <UnderlineLogin></UnderlineLogin>
                <LoginAnchor id="loginNav" href="./login.html">Login</LoginAnchor>
            </LoginHeader>
        </Head>
    );
}

export default Header