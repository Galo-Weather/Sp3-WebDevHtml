import styled from "styled-components";
import React from 'react';
import mainGif from '../../imgs/capaGif.gif';
import { Element } from "react-scroll";

const Home = styled.section`
    margin: 0 auto;
`
const HomeContainer = styled.div`
    align-items: center;
    text-align: center;

    @media (min-width: 1100px) {
        padding: 2em 0 em 0;
        min-height: 100vh;
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: 25% auto;
    }
`
const HomeImg = styled.figure`
    padding: 1em;
    
    img {
        max-width: 100%;
        border-radius: 4em;
    }
    @media (min-width: 1100px) {
        padding: 0 1em 0 0;
        text-align: start;
        grid-column: 2;

        img{
            max-width: 100%;
        }
    }
`
const HomeTxt1 = styled.p`
    padding: 1em;
    p {
        font-size: 3em;
        font-weight: bold;
        color: #0f62fe;
      }
    @media (min-width: 1100px) {
        grid-column-start: 1;
        grid-column-end: 3;
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
      @media (min-width: 1100px) {
        display: flex;
        flex-direction: column;
        max-width: 80%;
        padding: 2em;
        text-align: start;
        grid-column: 1;
        grid-row: 2;
    }

`

function MainPage() {
    return (
        <Element name="MainPage">
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
        </Element>
    );
}

export default MainPage