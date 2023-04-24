var faker = require('faker');
var name = faker.name.findName();
var email = faker.internet.email();
var password = faker.internet.password();
const { I } = inject();

module.exports = {
  fields: {
    registrarNome: '#user',
    registrarEmail: '#email',
    registrarSenha: '#password',
  },

  criandoUsuarioComSucesso() {
    I.fillField(this.fields.registrarNome, name);
    I.fillField(this.fields.registrarEmail, email);
    I.fillField(this.fields.registrarSenha, password, secret);
  }
}
