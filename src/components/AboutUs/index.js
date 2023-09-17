import styled from "styled-components";
import React from 'react';
import Galoicon from '../../imgs/galoIcon.png'
import { Element } from "react-scroll";


const AboutContainer = styled.section`
`
const Container = styled.div`
@media (min-width: 1100px) {
    padding: 2em 0 4em 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
}
`
const AboutImg = styled.div`
margin-top: 1em;
padding: 1em 1em 0 1em;
img{
    max-width: 100%;
    border-radius: 5em;

}

@media (min-width: 1100px) {
    margin: 0;
    padding: 1em;
    text-align: center;
    grid-column: 1;

    img{
        max-width: none;
    }
}
`
const AboutTxT = styled.div`
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
    line-height: 1.5;
  }

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em;
    text-align: center;
    grid-column: 2;
}
`
const irineu = styled.div`
.equipe-container {
    width: auto;
    height: 89vh;
    margin: 0 auto;
    background: linear-gradient(#e8e8e8, #ffffff 15%);
  }
  
  .equipe-title {
    font-size: 3em;
    text-align: center;
    color: #0f62fe;
    font-weight: bold;
    padding-top: 2em;
  }
  
  .equipe-section {
    display: flex;
    min-height: 75%;
    align-items: center;
    justify-content: center;
  }
  
  .equipe-card-container {
    display: flex;
    gap: 1.875em;
    width: 100%;
    justify-content: center;
  }
  
  .equipe-card {
    position: relative;
    list-style: none;
    width: 13.75em;
    transition: .3s ease;
  }
  
  .equipe-card::before {
    content: "";
    display: block;
    padding-bottom: 150%;
    width: 100%;
  }
  
  .equipe-card-background {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    border-radius: 1.25em;
    background-size: 21.875em;
    background-position: center;
    filter: brightness(.9) saturate(1) contrast(1);
    transform-origin: bottom;
    transform: scale(1) translateZ(0);
    transition: .3s ease;
  }
  
  .equipe-card:hover .equipe-card-background {
    transform: scale(1.15) translateZ(0);
    background-size: 16.25em;
  }
  
  .equipe-card-container:hover .equipe-equipe-card:not(:hover) {
    transform: scale(.9);
  }
  
  .equipe-card-container:hover>.equipe-card:not(:hover) .equipe-card-background,
  .equipe-card-container:hover>.equipe-card:not(:hover) .equipe-card-category {
    filter: brightness(.5) saturate(0) contrast(1.2) blur(1.25em);
  }
  
  .equipe-content {
    top: 50%;
    left: 0;
    padding: 1.5625em;
    position: absolute;
  }
  
  .equipe-card-category {
    color: #ffffff;
    font-size: 0.75em;
    font-weight: 500;
    letter-spacing: 0.3125em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }
  
  .equipe-card-heading {
    color: #ffffff;
    font-size: 1.5625em;
    line-height: 1;
    text-shadow: 0.125em 0.125em 1.25em rgba(0, 0, 0, .2);
  }
`

function AboutUs() {
    return (
        <Element name="AboutUs">
            <AboutContainer>
                <h1>Sobre nós</h1>
                <Container>
                    <AboutImg>
                        <img>
                            src={Galoicon}
                            alt="Icone da logo marca"
                        </img>
                    </AboutImg>
                    <AboutTxT>
                        <p> No coração do "Galo Weather" está nossa visão ousada de transformar radicalmente a forma como
                            enfrentamos os desafios dos alagamentos urbanos. Inspirados pelo galo, símbolo tradicionalmente
                            associado à previsão do tempo e à vigilância, buscamos antecipar e mitigar as inundações que impactam
                            comunidades em áreas urbanas. Assim como o galo anuncia o amanhecer, queremos antever e preparar as cidades
                            para lidar proativamente com as intempéries climáticas, integrando tecnologia inovadora e análise de dados para
                            criar cidades mais seguras e resilientes.</p>

                        <p>A escolha do galo como nosso símbolo vai além da previsão do tempo; ele representa nossa missão de despertar a
                            consciência e ação preventiva diante das inundações. Assim como o galo é vigilante e anuncia mudanças climáticas,
                            nós, no "Galo Weather", aspiramos a ser a voz que alerta e mobiliza comunidades para se prepararem e se protegerem.
                            Nossa missão é utilizar a sabedoria da natureza, combinada com a inovação tecnológica, para forjar um futuro onde
                            as cidades possam enfrentar os desafios climáticos, garantindo segurança e bem-estar para todos.</p>
                    </AboutTxT>
                    <AboutEquipe>
                        <p class="equipe-title">Nossa equipe</p>
                        <section class="equipe-section">
                            <div class="equipe-card-container">

                                <div class="equipe-card">
                                    <div class="equipe-card-background" style="background-image: url(./imgs/time/Fabricio.jpeg);">
                                    </div>
                                    <div class="equipe-content">
                                        <div class="equipe-card-category">RM 97631</div>
                                        <h3 class="equipe-card-heading">Fabrício Saavedra</h3>
                                    </div>
                                </div>

                                <div class="equipe-card">
                                    <div class="equipe-card-background"
                                        style="background-image: url(./imgs/time/Guilherme\ A.jpg);"></div>
                                    <div class="equipe-content">
                                        <div class="equipe-card-category">RM 98582</div>
                                        <h3 class="equipe-card-heading">Guilherme Akio</h3>
                                    </div>
                                </div>

                                <div class="equipe-card">
                                    <div class="equipe-card-background"
                                        style="background-image: url(./imgs/time/Guilherme\ M.png);"></div>
                                    <div class="equipe-content">
                                        <div class="equipe-card-category">RM 551981</div>
                                        <h3 class="equipe-card-heading">Guilherme Morais</h3>
                                    </div>
                                </div>

                                <div class="equipe-card">
                                    <div class="equipe-card-background" style="background-image: url(./imgs/time/Matheus.png);">
                                    </div>
                                    <div class="equipe-content">
                                        <div class="equipe-card-category">RM 550352</div>
                                        <h3 class="equipe-card-heading">Matheus Motta</h3>
                                    </div>
                                </div>

                                <div class="equipe-card">
                                    <div class="equipe-card-background" style="background-image: url(./imgs/time/Vinicius.jpeg);">
                                    </div>
                                    <div class="equipe-content">
                                        <div class="equipe-card-category">RM 99125</div>
                                        <h3 class="equipe-card-heading">Vinicius Buzato</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </AboutEquipe>
                </Container>
            </AboutContainer>
        </Element>
    );
}

export default AboutUs;