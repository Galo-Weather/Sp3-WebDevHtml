import styled from "styled-components";

const Nav = styled.div`
`
const NavHead = styled.ul`
    padding-top: 1.5em;

    li{
        text-align: start;
        list-style: none;
        padding: 0.5em;
        font-size: 1.3rem;
    }

    a{
        text-decoration: none;
        color: black;
    }

    @media (min-width: 1100px) {
        display: flex;
        padding: 0;
        text-align: center;
    }
`

function NavHeader() {
    return (
        <Nav>
            <NavHead>
                <li><a href="#home">Home</a></li>
                <li><a href="#problema">Problema</a></li>
                <li><a href="#causas">Causas</a></li>
                <li><a href="#impactos">Impactos</a></li>
                <li><a href="#solucao">Solução</a></li>
                <li><a href="#quem-somos">Quem somos</a></li>
                <li><a href="#equipe">Equipe</a></li>
            </NavHead>
        </Nav>
    );
}

export default NavHeader