import styled from 'styled-components';
import hamburguer from '../../imgs/burguer.png'

const SideBurguer = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    z-index: 100;
    top: 2%;
    left: 5%;
    
    @media (min-width: 1100px) {
        visibility: hidden;
        opacity: 0;
    }
`
const Hamburguer = styled.img`
    width: 41.17px;
    cursor: pointer;

`

function Burguer (){
    return(
        <SideBurguer>
            <Hamburguer
                src={hamburguer}
                alt='burguer'></Hamburguer>
        </SideBurguer>
    );
}

export default Burguer