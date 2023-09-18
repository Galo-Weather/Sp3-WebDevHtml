import styled from "styled-components";
import React from 'react';
import { Element } from "react-scroll";
import logo from '../../imgs/galoBanner.png'
import fiap from '../../imgs/FiapLogo.png'

const FooterContainer = styled.div`
    position: absolute;
    width: auto;
    margin: 0 auto;
    background-color: #0c0c0c;
`
const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img:nth-child(1) {
        width: 50%;
    }
    img:nth-child(2) {
        width: 50%;
    } 
    @media (min-width: 1100px) {
        img:nth-child(1) {
            width: 17%;
        }
        img:nth-child(2) {
            width: 23%;
        } 
    }
`


function Footer(){
    return(
        <Element name="Footer">
            <FooterContainer>
                <FooterContent>
                    <img
                        src={logo}
                        alt="GaloIcon"></img>
                    <img 
                        src={fiap}
                        alt="FiapLogo"></img>
                </FooterContent>
            </FooterContainer>
        </Element>
    )
}

export default Footer