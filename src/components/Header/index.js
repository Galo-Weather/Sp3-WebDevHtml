import './style.css'
import NavHeader from "../NavHeader";
import Burguer from '../Burguer';
import LogoHeader from "../LogoHeader";
import LoginHeader from "../LoginHeader";

function Header(){
    return(
        <header>
            <Burguer/>
            <LogoHeader/>
            <NavHeader/>
            <LoginHeader/>
        </header>
    );
}

export default Header