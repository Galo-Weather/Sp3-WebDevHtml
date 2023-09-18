import styled from "styled-components";
import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      errorMsg: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Add logic here to handle form submission
    // For example, you can validate and submit data to the server
    // If there's an error, you can set the errorMsg in state
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          {this.state.errorMsg && <div className="errorMsg">{this.state.errorMsg}</div>}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="login-form-content"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            autoComplete="on"
            required
          />
          <div className="login-form-border"></div>
          <label htmlFor="senha">Password</label>
          <input
            id="senha"
            className="login-form-content"
            type="password"
            name="senha"
            value={this.state.senha}
            onChange={this.handleInputChange}
            required
          />
          <i id="openLEye" className="fa-regular fa-eye-slash" style={{ color: '#0f62fe' }}></i>
          <div className="login-form-border"></div>
          <button type="submit" className="submitButton" id="login-submit-btn">
            Fazer login
          </button>
        </form>
        <div className="sign-up">
          <span>Não possui uma conta?</span>
          <div className="register">
            <a href="javascript:void(0);" id="register">
              Cadastre-se
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

