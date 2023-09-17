import styled from "styled-components";
import React from 'react';
import Esp32 from '../../imgs/Chuvas-intensas.png';
import Window from '../../imgs/Chuvas-intensas.png';
import Circuit from '../../imgs/Circuit_Sketch.png';
import logo from '../../imgs/galoBanner.png'

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
        <SolucaoContainer>
            <h1>Solução</h1>
            <SolucaoContent>
                <Card>
                    <Face1>
                        <Face1Content>
                            <img
                                src={Esp32}
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
                                src={Window}
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur et nisl sit amet nibh ullamcorper scelerisque eu id ante.
                    Integer maximus ligula mauris, vel lacinia quam aliquet et. Cras et eleifend elit. Nam volutpat, dolor in pellentesque ullamcorper,
                    ligula libero porta tellus, ac finibus est ligula eget eros. Integer sit amet hendrerit tortor. In hac habitasse platea dictumst.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur et nisl sit amet nibh ullamcorper scelerisque eu id ante.
                    Integer maximus ligula mauris, vel lacinia quam aliquet et. Cras et eleifend elit. Nam volutpat, dolor in pellentesque ullamcorper,
                    ligula libero porta tellus, ac finibus est ligula eget eros. Integer sit amet hendrerit tortor. In hac habitasse platea dictumst.</p>
            </SolucaoContent2>
        </SolucaoContainer>
    );
}

export default Solucao