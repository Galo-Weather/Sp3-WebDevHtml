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
                    <p>Enchentes em São Paulo: Um Desafio Complexo</p>
                    <p>São Paulo enfrenta enchentes frequentes, especialmente durante os períodos de chuvas intensas. 
                        A rápida expansão urbana, falta de áreas permeáveis, obstrução de córregos e infraestrutura insuficiente 
                        tornam a cidade altamente vulnerável.</p>
                    <p>A infraestrutura muitas vezes não suporta o volume de chuvas, resultando em alagamentos e sérios prejuízos econômicos e sociais.
                         As soluções incluem gestão hídrica eficiente, criação de parques lineares, revitalização de rios, conscientização sobre 
                         descarte adequado de lixo e um planejamento urbano mais sensato.</p>
                    <p>A falta de planejamento também leva à construção em áreas de risco, agravando a situação. Além disso, a intensa urbanização leva à 
                        impermeabilização do solo, dificultando a absorção da água e contribuindo para o acúmulo nas ruas.</p>
                    <p>É vital uma colaboração efetiva entre governos, empresas e a comunidade. Políticas sustentáveis e a gestão responsável da água são essenciais para garantir um 
                        futuro seguro e resiliente para a cidade e seus habitantes.</p>
                    
                </ProblemaTxT>
            </Container>
        </ProblemaContainer>
    );
}

export default Problema