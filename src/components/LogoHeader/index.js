import './style.css'
import logo from '../../imgs/galoBanner.png'

function LogoHeader() {
    return (
        <div className='logo'>
            
            <img
                src={logo}
                alt='logo'
                className='logo-img'
            ></img>
        </div>
    );
}

export default LogoHeader