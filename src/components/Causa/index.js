import styled from "styled-components";
import React from 'react';
import Chuvas from '../../imgs/Chuvas-intensas.png';
import Drenagem from '../../imgs/Deficiencia-de-drenagem.png';
import Urbanizacao from '../../imgs/Urbanizacao.png';
import { Element } from "react-scroll";

const CausaContainer = styled.section`
    width: auto;
    background: linear-gradient(#e8e8e8, #ffffff 15%);
    padding: 1em;
    h1{
        margin-top: 1em;
        margin-bottom: 0.5em;
        font-size: 3em;
        text-align: center;
        color: #0f62fe;
        font-weight: bold;
    }
`
const CausaContent = styled.div`
`
const Card = styled.div`
    position: relative;
    background: #f4f4f4;
    text-align: center;
    align-items: center;
    border-radius: 1em;
    box-shadow: 0 1.6875em 1.6875em rgba(214, 214, 214, 0.8);
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

function Causa() {

    return (
        <Element name="Causa">
            <CausaContainer>
                <h1>Principais causas</h1>
                <CausaContent>
                    <Card>
                        <Face1>
                            <Face1Content>
                                <img
                                    src={Chuvas}
                                    alt="Chuva intensa"></img>
                                <h3>Chuvas intensas</h3>
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
                                    src={Drenagem}
                                    alt="Chuva intensa"></img>
                                <h3>Deficiencia de drenagem</h3>
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
                    <Card>
                        <Face1>
                            <Face1Content>
                                <img
                                    src={Urbanizacao}
                                    alt="Chuva intensa"></img>
                                <h3>Urbanização</h3>
                            </Face1Content>
                        </Face1>
                        <Face2>
                            <Face2Content>
                                <p>Prédios, estradas e outras infraestruturas foram construídas sobre solo natural nos
                                    distritos metropolitanos de São Paulo como resultado da rápida urbanização da cidade,
                                    que diminuiu a capacidade do solo de absorver água e aumentou o escoamento.</p>
                            </Face2Content>
                        </Face2>
                    </Card>
                </CausaContent>
            </CausaContainer>
        </Element>
    );
}

export default Causa