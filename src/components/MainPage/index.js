import styled from "styled-components";
import React from 'react';
import mainGif from '../../imgs/capaGif.gif';

const Home = styled.section`
    margin: 0 auto;
`
const HomeContainer = styled.div`
    align-items: center;
    justify-content: space-between;
    text-align: center;
`
const HomeImg = styled.figure`
    padding: 1em;
    
    img {
        max-width: 100%;
        border-radius: 4em;
    }
`
const HomeTxt1 = styled.p`
    padding: 1em;

    p {
        font-size: 3em;
        font-weight: bold;
        color: #0f62fe;
      }
`
const HomeTxt2 = styled.p`
    padding: 1em;

    p:first-child {
        margin-bottom: 0.5em;
        font-size: 2em;
        font-weight: bold;
        color: #0f62fe;
      }
    p {
        margin-bottom: 0.5em;
        font-size: 1.2em;
      }

`

function MainPage() {
    return (
        <Home>
            <HomeContainer>
                <HomeTxt1>
                    <p>Cidades Sustentáveis</p>
                </HomeTxt1>
                <HomeImg>
                    <img
                        src={mainGif}
                        alt='gif sustentabilidade'></img>
                </HomeImg>
                <HomeTxt2>
                    <p>O Desafio da IBM:</p>
                    <p>A IBM está comprometida em enfrentar o desafio de tornar as cidades mais sustentáveis, buscando
                        soluções inovadoras que equilibrem o desenvolvimento econômico, social e ambiental. Em nosso
                        projeto, direcionamos nosso foco para São Paulo, uma cidade que enfrenta um problema recorrente e
                        urgente: os alagamentos em centros urbanos.</p>
                </HomeTxt2>
            </HomeContainer>
        </Home>
    );
}

export default MainPage