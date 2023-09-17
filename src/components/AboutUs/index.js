import styled from "styled-components";
import React from 'react';
import Galoicon from '../../imgs/galoIcon.png'
import { Element } from "react-scroll";


const AboutContainer = styled.section`
`
const Container = styled.div`
`
const AboutImg = styled.div`
`

const AboutTxT = styled.div`
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
                    </Container>
                </AboutContainer>
        </Element>
    );
}

export default AboutUs;