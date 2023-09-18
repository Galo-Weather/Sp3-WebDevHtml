import styled from "styled-components";
import React from 'react';
import { Element } from "react-scroll";
import WppIcon from "../../imgs/icons/whatsapp-icon.png";
import EmailIcon from "../../imgs/icons/email-icon.png";

const ContatoContainer = styled.section`
background: linear-gradient(#e8e8e8, #ffffff 15%);
align-items: center;
padding: 1em;

@media (min-width: 1100px) {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1em;
}
`
const InnerContatoContainer = styled.div`
`
const ContatoContainerHeader = styled.div`
    text-align: center;
    p:first-child {
        font-weight: bold;
        font-size: 3em;
        color: #0f62fe;
    }

@media (min-width: 1100px) {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    p:first-child {
        font-weight: 800;
        font-size: 4em;
        color: #0f62fe;
    }
    p:nth-child(2) {
        font-weight: 800;
        font-size: 1.4em;
        color: #00000;
        margin-bottom: 30px
    }
}
`
const CardsContainer = styled.div`
margin-top: 1em;

@media (min-width: 1100px) {
    display: flex;
    gap: 7em;
}
`
const SobreCardContainer = styled.div`
    border-radius: 30px;
    background: #fff;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);
    text-align: center;
    padding: 1em;
    margin-bottom: 1em;

@media (min-width: 1100px) {
    width: 367px;
    height: 400px;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);
    display: flex;
    justify-content: center;
    padding: 1em 0 0 0;
    flex-wrap: wrap;
}
`
const SobreCardImgContainer = styled.figure`

    padding: 1em;
    img{
        max-width: 70%;
    }

@media (min-width: 1100px) {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    img{
        width: 20%;
    }
}
`
const CardTextContainer = styled.div`

text-align: center;
color: #000000;
font-size: 1em;
p:first-child {
    font-size: 1.5em;
    font-weight: 800;
    color: #0f62fe;
    padding: 5px
}
button {
    background-color: #D9D9D9;
    border: none;
    height: 50px;
    width: 200px;
    text-align: center;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    color: #757373;
    font-size: 1em;
    font-weight: 700;
    border-radius: 2em;
    margin-top: 30px
}
button:hover {
    background: #0f62fe;
    box-shadow: 0px 2px 10px 5px #97B1BF;
    color: #fff;
}

@media (min-width: 1100px) {
    text-align: center;
    color: #000000;
    font-size: 1em;
    display: inline-block;
    p:first-child {
        font-size: 1.5em;
        font-weight: 800;
        color: #0f62fe;
        margin: 5px
    }
    button {
        background-color: #D9D9D9;
        border: none;
        height: 50px;
        width: 200px;
        text-align: center;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
        text-decoration: none;
        overflow: hidden;
        color: #757373;
        font-size: 1em;
        font-weight: 700;
        border-radius: 2em;
        margin-top: 30px
    }
    button:hover {
        background: #0f62fe;
        box-shadow: 0px 2px 10px 5px #97B1BF;
        color: #fff;
    }
    button:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
      }
}
`

function Contato() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:ContatoGaloFiap@gmail.com';
    };

    const sendWppClick = () => {
        window.location.href = 'https://wa.me/+5511963752185';
    };

    return (
        <Element name="Contato">
            <ContatoContainer>
                <InnerContatoContainer>
                    <img
                        src=""
                        alt="" ></img>
                    <ContatoContainerHeader>
                        <p>Entre em contato</p>
                        <p>Nós adoraríamos ouvir você. Aqui como você pode chegar até nós</p>
                    </ContatoContainerHeader>
                    <CardsContainer>
                        <SobreCardContainer>
                            <SobreCardImgContainer>
                                <img
                                    src={WppIcon}
                                    alt="Ícone de whatsApp">
                                </img>
                            </SobreCardImgContainer>
                            <CardTextContainer>
                                <p>Contato via WhatsApp</p>
                                <p>Em caso de dúvidas, entre em contato!</p>
                                <p>Nosso atendimento é das 08:00 as 18:00, com respostas em até 24 horas durante dias úteis</p>
                                <button class="button-card" onClick={sendWppClick}>Clique
                                aqui</button>
                            </CardTextContainer>
                        </SobreCardContainer>
                        <SobreCardContainer>
                            <SobreCardImgContainer>
                                <img
                                    src={EmailIcon}
                                    alt="Ícone de email">
                                </img>
                            </SobreCardImgContainer>
                            <CardTextContainer>
                                <p>Contato via Email</p>
                                <p>Em caso de dúvidas, entre em contato!</p>
                                <p>Seu email será respondidoem até 24 horas durante dias úteis</p>
                                <button className="button-card" onClick={handleEmailClick}>Clique aqui</button>
                            </CardTextContainer>
                        </SobreCardContainer>
                    </CardsContainer>
                </InnerContatoContainer>
            </ContatoContainer>
        </Element>
    );
}

export default Contato