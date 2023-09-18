import styled from "styled-components";
import React from 'react';

const BaseContainer = styled.section`
`
const LoginContainer = styled.div`
`
const LoginAlertContainer = styled.div`
`


function Login() {

    return(
        <BaseContainer>
            <LoginContainer>
                <h1 class="loginTitle">Login</h1>
                <form class="loginForm">
                    <LoginAlertContainer>
                        Alerta!
                    </LoginAlertContainer>
                    <span class="loginInputName">Email ou CNPJ</span>
                    <label for="email" class="loginInputs">
                        <input class="loginInput" type="text" name="email" id="loginBaseInput" placeholder="Nome@email.com">
                    </label>
                    <span class="loginInputName">Senha</span>
                    <label for="senha" class="loginInputs">
                        <input class="loginInput" type="password" name="password" id="pass-Login-Input">
                        <img class="on" id="eyePasslogin" src="./Imgs/olho-aberto.png" alt="olho-aberto">
                    </label>
                    <button class="loginSubmitBtn" id="loginSubmitBtn">Entrar</button>
                </form>
                <RedirectSignupContainer>
                    <p>Nao possui uma conta?<span id="redirectSignup">Cadastre-se</span></p>
                </RedirectSignupContainer>
                <LoginRedirectHome>
                    <a href="./index.html">Voltar a página inicial</a>
                </LoginRedirectHome>
            </LoginContainer>
            <div class="signupContainer" id="signupContainer">
                <h1 class="signupTitle">Cadastro</h1>
                <form class="signupForm">
                    <div class="signupAlert hide" id="signupAlert">Alerta!</div>
                    <span class="signupInputName">Nome</span>
                    <label for="signupName" class="signupInputs">
                        <input class="signupInput" type="text" name="signupName" id="name-Signup-Input">
                    </label>
                    <span class="signupInputName">Sobrenome</span>
                    <label for="signupNick" class="signupInputs">
                        <input class="signupInput" type="text" name="signupNick" id="nick-Signup-Input">
                    </label>
                    <span class="signupInputName">Email</span>
                    <label for="signupEmail" class="signupInputs">
                        <input class="signupInput" type="text" name="signupEmail" id="email-Signup-Input"
                            placeholder="Nome@email.com">
                    </label>
                    <span class="signupInputName">Numero de telefone</span>
                    <label for="signupNumber" class="signupInputs">
                        <input class="signupInput" type="text" name="signupNumber" id="number-Signup-Input"
                            placeholder="(00) 0000-0000">
                    </label>
                    <span class="signupInputName">Senha</span>
                    <label for="signupPassword" class="signupInputs">
                        <input class="signupInput" type="password" name="signupPassword" id="pass-Signup-Input">
                        <img class="on" id="eyePassSignup" src="./Imgs/olho-vermelho.png" alt="olho-aberto">
                    </label>
                    <span class="passMin">Deve conter no minimo 6 caracteres</span>
                    <span class="signupInputName">Confirmar senha</span>
                    <label for="signupPasswordConfirm" class="signupInputs">
                        <input class="signupInput" type="password" name="signupPasswordConfirm"
                            id="passConfirm-Signup-Input">
                        <img class="on" id="eyePassSignupConfirm" src="./Imgs/olho-vermelho.png" alt="olho">
                    </label>
                    <span class="passMin">Senhas devem ser iguais</span>
                    <button class="signupSubmitBtn" id="signupSubmitBtn">Cadastrar</button>
                </form>
                <div class="redirectLogin">
                    <p>Ja possui uma conta?</br><span id="redirectLogin">Faça login</span></p>
                </div>
                <div class="redirectOngSignup">
                    <p>Voce representa uma ONG?</br><span id="redirectOngSignup">Cadastro de representante</span></p>
                </div>
                <div class="singupRedirectHome">
                    <a href="./index.html">Voltar a página inicial</a>
                </div>
            </div>
            <div class="signupOngContainer" id="signupOngContainer">
                <h1 class="signupOngTitle">Cadastro</h1>
                <form class="signupOngForm">
                    <div class="signupOngAlert hide" id="signupOngAlert">Alerta!</div>
                    <span class="signupOngInputName">Nome da ONG</span>
                    <label for="OngName" class="signupOngInputs">
                        <input class="signupOngInput" type="text" name="OngName" id="name-OSignup-Input">
                    </label>
                    <span class="signupOngInputName">Nome do representante</span>
                    <label for="OngAgent" class="signupOngInputs">
                        <input class="signupOngInput" type="text" name="OngAgent" id="agent-OSignup-Input">
                    </label>
                    <span class="signupOngInputName">Email</span>
                    <label for="OngEmail" class="signupOngInputs">
                        <input class="signupOngInput" type="text" name="OngEmail" id="email-OSignup-Input"
                            placeholder="Nome@email.com">
                    </label>
                    <span class="signupOngInputName">Numero de contato</span>
                    <label for="OngNumber" class="signupOngInputs">
                        <input class="signupOngInput" type="text" name="OngNumber" id="number-OSignup-Input"
                            placeholder="(00) 0000-0000">
                    </label>
                    <span class="signupOngInputName">CNPJ</span>
                    <label for="email" class="signupOngInputs">
                        <input class="signupOngInput" type="text" name="email" id="cnpj-OSignup-Input"
                            placeholder="XX. XXX. XXX/0001-XX.">
                    </label>
                    <span class="signupOngInputName">Endereço da sede</span>
                    <label for="OngAddress" class="signupOngInputs">
                        <input class="signupOngInput" type="text" name="OngAddress" id="address-OSignup-Input">
                    </label>
                    <span class="signupOngInputName">Senha</span>
                    <label for="OngPass" class="signupOngInputs">
                        <input class="signupOngInput" type="password" name="OngPass" id="pass-OSignup-Input">
                        <img class="on" id="eyePassOngSignup" src="./Imgs/olho-vermelho.png" alt="olho-aberto">
                    </label>
                    <span class="passMin">Deve conter no minimo 6 caracteres</span>
                    <span class="signupOngInputName">Senha</span>
                    <label for="OngPassConfirm" class="signupOngInputs">
                        <input class="signupOngInput" type="password" name="OngPassConfirm" id="passConfirm-OSignup-Input">
                        <img class="on" id="eyePassOngSignupConfirm" src="./Imgs/olho-vermelho.png" alt="olho-aberto">
                    </label>
                    <span class="passMin">Senhas devem ser iguais</span>
                    <button class="signupOngSubmitBtn" id="signupOngSubmitBtn">Cadastrar</button>
                </form>
                <div class="redirectLoginOng">
                    <p>Já possui uma conta?</br><span id="redirectLoginOng">Faça login</span></p>
                </div>
                <div class="redirectSignup-Ong">
                    <p>Nao faz parte de uma ONG?</br><span id="redirectSignup-Ong">Cadastro de usuario</span></p>
                </div>
                <div class="ongRedirectHome">
                    <a href="./index.html">Voltar a página inicial</a>
                </div>
            </div>
            </BaseContainer> 

    )

    
}

export default Login

{/* */}