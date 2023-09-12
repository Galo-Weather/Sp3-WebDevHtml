import './style.css'
import hamburguer from '../../imgs/burguer.png'

function Burguer (){
    return(
        <div className='sideBurguer'>
            <img
                src={hamburguer}
                alt='burguer'
                className='burguer'></img>
        </div>
    );
}

export default Burguer