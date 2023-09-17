import styled from "styled-components";
import problemaImagem from '../../imgs/problemaImagem.jpg';

const ProblemaContainer = styled.section`
    background: linear-gradient(#ffffff, #e8e8e8 15%);
    text-align: center;
`
const Container = styled.div`
`
const ProblemaImg = styled.figure`
    margin-top: 1em;
    padding: 1em;
    img{
        max-width: 100%;
        border-radius: 5em;

    }
`
const ProblemaTxT = styled.div`
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
`

function Problema() {

    return (
        <ProblemaContainer>
            <Container>
                <ProblemaImg>
                    <img
                        src={problemaImagem}
                        alt="inundação"></img>
                </ProblemaImg>
                <ProblemaTxT>
                    <p>O Problema: Alagamentos em Centros Urbanos</p>
                    <p>Em São Paulo, as enchentes são um problema recorrente, principalmente na época do ano em que
                        chove muito. O rápido crescimento urbano, a falta de espaços verdes e solo permeável, a
                        obstrução de córregos e rios por lixo e outros resíduos e outros problemas tornam a cidade
                        vulnerável a inundações.</p>
                    <p>Muitas vezes, a infraestrutura da cidade não aguenta as fortes chuvas, o que causa alagamentos de
                        ruas, avenidas e residências, além de outros prejuízos econômicos e sociais.</p>
                    <p>A implantação de políticas públicas de gestão hídrica, a criação de parques lineares para
                        contenção de enchentes, a desobstrução e recuperação de rios e córregos, a construção de
                        reservatórios de água e a educação da população sobre a importância de preservar os espaços
                        verdes e evitar o descarte de lixo em locais inadequados são apenas algumas das medidas
                        sugeridas para combater as enchentes em São Paulo.</p>
                    <p>A falta de planejamento urbano adequado, que muitas vezes permite a construção de imóveis em
                        locais de risco, como encostas e margens de rios, é outro problema que agrava as enchentes em
                        São Paulo.</p>
                    <p>Além disso, a maior impermeabilização do solo decorrente do intenso processo de urbanização de
                        São Paulo dificulta a absorção da água da chuva pelo solo e contribui para o acúmulo de água nas
                        ruas e avenidas.</p>
                    <p>Para abordar essas questões, vários atores sociais, incluindo governos, empresas, organizações da
                        sociedade civil e indivíduos devem trabalhar juntos. Para diminuir os efeitos das enchentes em
                        São Paulo e garantir um futuro mais resiliente e seguro para a cidade e seus moradores,
                        políticas governamentais que promovam o desenvolvimento sustentável, planejamento urbano
                        adequado e gestão responsável da água devem ser implementadas.</p>
                </ProblemaTxT>
            </Container>
        </ProblemaContainer>
    );
}

export default Problema