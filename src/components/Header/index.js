import styled from "styled-components";
import NavHeader from "../NavHeader";
import Burguer from '../Burguer';
import LogoHeader from "../LogoHeader";
import LoginHeader from "../LoginHeader";

const Head = styled.header`
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1em 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background: white;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
    transition-property: translate, opacity, visibility;
    transition-duration: 0.5s;
    // translate: -100% 0;
    visibility: visible;
    opacity: 1;

    @media (min-width: 1100px) {
          translate: 0 0;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 7em;
          padding: 1em;
          opacity: 1;
          visibility: visible;
`

function Header() {
    return (
        <Head>
            <Burguer />
            <LogoHeader />
            <NavHeader />
            <LoginHeader />
        </Head>
    );
}

export default Header