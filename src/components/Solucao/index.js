import styled from "styled-components";
import React from 'react';
import Esp32 from '../../imgs/Esp32.png';
import Ultrassonic from '../../imgs/Ultrassonic_sensor.png';
import Circuit from '../../imgs/Circuit_Sketch.png';
import logo from '../../imgs/galoBanner.png'
import { Element } from "react-scroll";

const SolucaoContainer = styled.section`
    width: auto;
    background: linear-gradient(#ffffff, #e8e8e8 15%);
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
        min-height: 100vh;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: 25% auto;
    }
`
const SolucaoContent = styled.div`
`
const Card = styled.div`
    position: relative;
    background: #f4f4f4;
    text-align: center;
    align-items: center;
    border-radius: 1em;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);
    margin-bottom: 1em;

    img{
        max-width: 6.25em;
        margin: auto;
    }
`
const Face1 = styled.div`
    padding: 1em;
    background: #f4f4f4;
    border-radius: 1em 1em 0 0;

`
const Face1Content = styled.div`
 h3{
    margin-top: 0.5em;
    color: #0f62fe;
 }
`
const Face2 = styled.div`
    padding: 1em;
    background: #fff;
    border-radius: 0 0 1em 1em;
`
const Face2Content = styled.div`
 padding: 1em;
`
const SolucaoImg = styled.figure`
 img{
    max-width: 100%;
    border-radius: 1em;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);
 }
`
const SolucaoContent2 = styled.div`
margin-top: 2em;
text-align: center;
img{
    max-width: 100%;
}
p{
    font-size: 1.2em;
    line-height: 1.5;
    margin-top: 1em;
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
                                <p>O clima tropical em que está situada São Paulo sofre com frequência de chuvas intensas,
                                    que podem resultar em deslizamentos e inundações, principalmente em regiões com drenagem
                                    inadequada.</p>
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
                                <p>Sistemas de drenagem insuficientes em São Paulo também podem causar inundações, pois a
                                    água da chuva pode se acumular em regiões baixas e ruas sem saídas ou canais adequados
                                    para direcionar a água para longe das áreas populosas.</p>
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