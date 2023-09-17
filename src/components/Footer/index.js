import styled from "styled-components";
import React from 'react';
import { Element } from "react-scroll";
import logo from '../../imgs/galoBanner.png'
import fiap from '../../imgs/FiapLogo.png'

const FooterContainer = styled.div`
    width: auto;
    height: 13vh;
    margin: 0 auto;
    background-color: #0c0c0c;
`
const FooterContent = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-left: 13em;
    padding-right: 13em;
    align-items: center;
    img:nth-child(1) {
        width: 17%;
        height: 17%;
    }
    img:nth-child(2) {
        width: 23%;
        height: 23%;
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