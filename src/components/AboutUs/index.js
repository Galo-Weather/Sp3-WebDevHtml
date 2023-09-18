import styled from "styled-components";
import React from 'react';
import Galoicon from '../../imgs/galoIcon.png'
import { Element } from "react-scroll";
import Fabricio from '../../imgs/time/Fabricio.png'
import GuilhermeA from '../../imgs/time/Guilherme A.png'
import GuilhermeM from '../../imgs/time/Guilherme M.png'
import Matheus from '../../imgs/time/Matheus.png'
import Vinicius from '../../imgs/time/Vinicius.png'


const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h1{
    margin-bottom: 1em;
  }
`;

const Container = styled.div`
  display: flex;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AboutImg = styled.div`
  margin-right: 20px;
`;

const AboutTxT = styled.div`
  max-width: 600px;
`;

const CardContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin-top: 50px;
flex-wrap: wrap;
`

const Card = styled.div`
width: 325px;
background-color: #0f62fe;
color: #fff;
border-radius: 10px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
overflow: hidden;
margin: 10px;
img{
    width:100%;
    height: 225px;
    object-fit: cover;
}
`

const CardContent = styled.div`
padding: 20px;
h2{
    font-size: 24px;
    margin-bottom: 10px;
}
p{
    font-size: 14px;
    margin-bottom: 20px;
}
`

function AboutUs() {
    return (
        <Element name="AboutUs">
            <AboutContainer>
                <h1>Sobre nós</h1>
                <Container>
                    <AboutImg>
                        <img
                            src={Galoicon}
                            alt="Icone da logo marca">
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

            <CardContainer>

                <Card>
                    <img
                        src={Fabricio}
                        alt="Integrante do grupo Galo">
                    </img>
                    <CardContent>
                        <h2>Fabrício Saavedra</h2>
                        <p>RM 97631</p>
                    </CardContent>
                </Card>

                <Card>
                    <img
                        src={GuilhermeA}
                        alt="Integrante do grupo Galo">
                    </img>
                    <CardContent>
                        <h2>Guilherme Akio</h2>
                        <p>RM 98582</p>
                    </CardContent>
                </Card>

                <Card>
                    <img
                        src={GuilhermeM}
                        alt="Integrante do grupo Galo">
                    </img>
                    <CardContent>
                        <h2>Guilherme Morais</h2>
                        <p>RM 551981</p>
                    </CardContent>
                </Card>

                <Card>
                    <img
                        src={Matheus}
                        alt="Integrante do grupo Galo">
                    </img>
                    <CardContent>
                        <h2>Matheus Motta</h2>
                        <p>RM 550352</p>
                    </CardContent>
                </Card>

                <Card>
                    <img
                        src={Vinicius}
                        alt="Integrante do grupo Galo">
                    </img>
                    <CardContent>
                        <h2>Vinicius Buzato</h2>
                        <p>RM 99125</p>
                    </CardContent>
                </Card>

            </CardContainer>

        </Element>
    );
}

export default AboutUs;