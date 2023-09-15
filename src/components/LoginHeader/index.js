import styled from "styled-components";

const LoginHead = styled.div`
    position: absolute;
    bottom: 2%;
    text-align: start;
    padding: 0.5em;

    @media (min-width: 1100px) {
        position: unset;
        padding: 0;
        text-align: center;
        margin-right: 1em;
    }

`
const UnderlineLogin = styled.div`
    border: 1px solid #000;
    width: 300%;

    @media (min-width: 1100px) {
        visibility: hidden;
        opacity: 0;
    }
`

const LoginAnchor = styled.a`
    text-decoration: none;
    list-style: none;
    color: black;
    font-size: 1.3rem;
`

function LoginHeader() {
    return (
        <LoginHead>
            <UnderlineLogin></UnderlineLogin>
            <LoginAnchor id="loginNav" href="./login.html">Login</LoginAnchor>
        </LoginHead>
    );
}

export default LoginHeader