const { I } = inject();

module.exports = {

  fields: {
    validarCadastroComSucesso: '#swal2-title',
    validarTextoLogin: 'Login',
    validarTextoEmailInvalido: 'E-mail inválido.',
    validarTextoSenhaInvalida: 'Senha inválida.',
    validarLoginRealizado: 'Login realizado',

  },

  button: {
    botaoCadastro: 'Cadastro',
    botaoRealizarCadastro: 'Cadastrar',
    botaoPaginaLogin: 'Login',
    botaoLoginRealizadoOK: '.swal2-actions',
    botaoLogin: '#btnLogin',
  },

  paginaInicial() {
    I.amOnPage('/')
  },
  botaoCadastro() {
    I.click(this.button.botaoCadastro)
    I.wait(3)
  },
  botaoCadastrar() {
    I.click(this.button.botaoRealizarCadastro)
  },
  botaoPaginaLogin() {
    I.click(this.button.botaoPaginaLogin)
  },
  botaoLogin() {
    I.click(this.button.botaoLogin)
  },
  botaoLoginRealizadoOK() {
    I.click(this.button.botaoLoginRealizadoOK)
  },
  validarCadastroComSucesso() {
    I.waitForElement(this.fields.validarCadastroComSucesso)
  },
  validarTextoEmailInvalido() {
    I.waitForText(this.fields.validarTextoEmailInvalido, 5)
  },
  validarTextoSenhaInvalida() {
    I.waitForText(this.fields.validarTextoSenhaInvalida, 5)
  },
  validarLoginRealizado() {
    I.waitForText(this.fields.validarLoginRealizado, 3)
  },
  validarTextoLogin() {
    I.waitForText(this.fields.validarTextoLogin, 5)
  },
}