import styled from "styled-components";
import React from 'react';
import { Element } from "react-scroll";

const ContatoContainer = styled.section`
`
const Container = styled.div`
`
const innerContatoContainer = styled.div`
`
const ContatoContainerHeader = styled.div`
`
const CardsContainer = styled.div`
`

function Contato() {

    return (
        <Element name="Contato">
            <ContatoContainer>
                <innerContatoContainer>
                    <img 
                    src="" 
                    alt="" ></img>
                    <ContatoContainerHeader>
                        <p>Entre em contato</p>
                        <p>Nós adoraríamos ouvir você. Aqui como você pode chegar até nós</p>
                    </ContatoContainerHeader> 
                    <CardsContainer>
                        <SobreCardContainer>
                            <figure class="sobre-img">
                                <img 
                                src="./Imgs/Icons/whatsapp-icon.png" 
                                alt="Ícone de whatsApp">
                                </img>
                            </figure>
                            <CardTextContainer>
                                <p>Contato via WhatsApp</p>
                                <p>Em caso de dúvidas, entre em contato!</p>
                                <p>Nosso atendimento é das 08:00 as 18:00, com respostas em até 24 horas durante dias úteis</p>
                            </CardTextContainer>
                            <button class="button-card" onclick="window.location.href='https://wa.me/+5511963752185'">Clique
                                aqui</button>
                        </SobreCardContainer>
                        <SobreCardContainer>
                            <figure class="sobre-img">
                                <img 
                                src="./Imgs/Icons/email-icon.png" 
                                alt="Ícone de email">
                                </img>
                            </figure>
                            <CardTextContainer>
                                <p>Contato via Email</p>
                                <p>Em caso de dúvidas, entre em contato!</p>
                                <p>Seu email será respondidoem até 24 horas durante dias úteis</p>
                                <button class="button-card" onclick="window.location.href='mailto:ContatoGaloFiap@gmail.com'">Clique
                                aqui</button>
                            </CardTextContainer>
                        </SobreCardContainer>
                    </CardsContainer>
                </innerContatoContainer>
            </ContatoContainer>
        </Element>
    );
}

export default Contato