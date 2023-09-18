import styled from "styled-components";
import React from 'react';
import Esp32 from '../../imgs/Esp32.png';
import Ultrassonic from '../../imgs/Ultrassonic_sensor.png';
import Circuit from '../../imgs/Circuit_Sketch.png';
import logo from '../../imgs/galoBanner.png'
import { Element } from "react-scroll";

const SolucaoContainer = styled.section`
    width: auto;
    padding: 1em;
    h1{
        margin-top: 1em;
        margin-bottom: 0.5em;
        font-size: 3em;
        text-align: center;
        color: #0f62fe;
        font-weight: bold;
    }

    @media (min-width: 1100px) {
        padding: 2em 0 em 0;
        display: grid;
        text-align: center;
        grid-template-columns: 60% auto ;
        grid-template-rows: auto auto;

        h1{
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row: 1;
        }
    }
`
const SolucaoContent = styled.div`

@media (min-width: 1100px) {
    grid-column-start: 1;
    grid-column-end: 2;
    padding: 1em;
    display: grid;
    grid-template-columns: auto auto ;
    grid-template-columns: auto auto ;
}
`
const Card = styled.div`
    position: relative;
    background: #f4f4f4;
    text-align: center;
    align-items: center;
    border-radius: 1em;
    margin-bottom: 1em;

    img{
        max-width: 20%;
        margin: auto;
    }

    @media (min-width: 1100px) {
        background: transparent;
        box-shadow: none;
        padding: 1em;
        height: 100%;
        margin: 0;
    }
`
const Face1 = styled.div`
    padding: 1em;
    background: #f4f4f4;
    border-radius: 1em 1em 0 0;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);

`
const Face1Content = styled.div`
 h3{
    margin-top: 0.5em;
    color: #0f62fe;
 }

 @media (min-width: 1100px) {
    h3{
        margin-top: 0;
     }
}
`
const Face2 = styled.div`
    padding: 1em;
    background: #fff;
    border-radius: 0 0 1em 1em;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);
    
    @media (min-width: 1100px) {
        height: 146px;
    }
`
const Face2Content = styled.div`
 padding: 1em;

 @media (min-width: 1100px) {
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: center;
}
`
const SolucaoImg = styled.figure`
 img{
    max-width: 100%;
    border-radius: 1em;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);
    margin-bottom: 2em;
 }
 @media (min-width: 1100px) {
    padding: 1em;
    grid-column-start: 1;
    grid-column-end: 3;

    img{
        max-width: 50%;
        margin: 0;
    }
}
`
const SolucaoContent2 = styled.div`
text-align: center;
img{
    max-width: 70%;
}
p{
    font-size: 1.2em;
    line-height: 1.2;
    margin-top: 1em;
}

@media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column-start: 2;
    grid-column-end: 3;
}
`

function Solucao() {

    return (
        <Element name="Solucao">
            <SolucaoContainer>
                <h1>Solução</h1>
                <SolucaoContent>
                    <Card>
                        <Face1>
                            <Face1Content>
                                <img
                                    src={Ultrassonic}
                                    alt="Esp32"></img>
                                <h3>Hardware</h3>
                            </Face1Content>
                        </Face1>
                        <Face2>
                            <Face2Content>
                                <p>O Galo Weather utiliza um sensor
                                    ultrassônico para detectar obstruções em bueiros
                                    e um microcontrolador ESP32 para enviar dados para
                                    processamento.
                                </p>
                            </Face2Content>
                        </Face2>
                    </Card>
                    <Card>
                        <Face1>
                            <Face1Content>
                                <img
                                    src={Esp32}
                                    alt="Chuva intensa"></img>
                                <h3>Software</h3>
                            </Face1Content>
                        </Face1>
                        <Face2>
                            <Face2Content>
                                <p>O software processa dados históricos e em tempo real,
                                    permitindo alertas precisos baseados em padrões de chuva,
                                    melhorando a previsão de alagamentos.</p>
                            </Face2Content>
                        </Face2>
                    </Card>
                    <SolucaoImg>
                        <img
                            src={Circuit}
                            alt="Esp32 tinkercad"></img>
                    </SolucaoImg>
                </SolucaoContent>
                <SolucaoContent2>
                    <img
                        src={logo}
                        alt='logo'
                        className='logo-img'
                    ></img>
                    <p>Apresentamos com entusiasmo o projeto "Galo Weather", uma solução inovadora para os desafios dos alagamentos urbanos.
                        Inspirados pelo icônico galo, símbolo tradicionalmente associado à previsão do tempo, desenvolvemos um software poderoso
                        e uma plataforma integrada que transformam nossa abordagem às alagamentos. Essa solução tecnológica combina dados
                        meteorológicos em tempo real, análise avançada e modelos precisos, permitindo a antecipação e ações preventivas
                        diante das enchentes.</p>
                    <p>Além disso, avançamos no desenvolvimento de um protótipo de hardware usando ESP32 e sensor ultrassônico.
                        Essa integração promissora amplia nossa capacidade de coleta e análise de dados, fortalecendo ainda mais nossa
                        abordagem proativa para mitigar os riscos de alagamento e promover cidades mais seguras e resilientes. Este hardware
                        inovador é um passo crucial para aprimorar a eficácia de nossas soluções, fornecendo informações valiosas em tempo
                        real e contribuindo para a segurança de comunidades em áreas propensas a alagamentos.</p>
                </SolucaoContent2>
            </SolucaoContainer>
        </Element>
    );
}

export default Solucao