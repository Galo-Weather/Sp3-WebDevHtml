import styled from 'styled-components';
import logo from '../../imgs/galoBanner.png'

const LogoSideBar = styled.div`
display: flex;
justify-content: space-between;
`
const LogoSideBarimg = styled.img`
    margin: auto auto auto 2em;
    width: 10em;
`

function LogoHeader() {
    return (
        <LogoSideBar>
            <LogoSideBarimg
                src={logo}
                alt='logo'
                className='logo-img'
            ></LogoSideBarimg>
        </LogoSideBar>
    );
}

export default LogoHeader