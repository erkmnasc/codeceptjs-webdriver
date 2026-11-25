const { faker } = require('@faker-js/faker');
const name = faker.person.fullName();
const email = faker.internet.email();
const password = faker.internet.password();
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
    I.fillField(this.fields.registrarSenha, secret(password));
  }
}
