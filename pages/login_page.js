var faker = require('faker');
var email = faker.internet.email();
var password = faker.internet.password();
const { I, home_page} = inject();

module.exports = {

  fields: {
    inserirEmail: '#user',
    inserirSenha: '#password',
    validarLoginRealizadon: 'Login realizado',

  },

  loginComSucesso() {
    home_page.paginaInicial();
    home_page.botaoPaginaLogin();
    home_page.validarTextoLogin();
    I.fillField(this.fields.inserirEmail, email);
    I.fillField(this.fields.inserirSenha, password, secret);
    home_page.botaoLogin();
    home_page.validarLoginRealizado();
    home_page.botaoLoginRealizadoOK();
    I.wait(2);
    I.see('DASHBOARD')
    I.wait(3)
  },

  loginApenasComEmail() {
    home_page.paginaInicial();
    home_page.botaoPaginaLogin();
    home_page.validarTextoLogin();
    I.fillField(this.fields.inserirEmail, email);
    home_page.botaoLogin();
    home_page.validarTextoSenhaInvalida();
  },

  loginApenasComSenha() {
    home_page.paginaInicial();
    home_page.botaoPaginaLogin();
    home_page.validarTextoLogin();
    I.fillField(this.fields.inserirSenha, password, secret);
    home_page.botaoLogin();
    home_page.validarTextoEmailInvalido();
  },

  loginSemEmaileSenha() {
    home_page.paginaInicial();
    home_page.botaoPaginaLogin();
    home_page.validarTextoLogin();
    home_page.botaoLogin();
    home_page.validarTextoEmailInvalido();
  }
}