var faker = require('faker');

const {I, home_page, create_user_page} = inject()

Feature('Create User');

Scenario('cadastro com sucesso', () => {
    //Home Page
    home_page.paginaInicial();

    //Acessar Página de Cadastro
    home_page.botaoCadastro();

    //Cadastro do Usuário
    create_user_page.criandoUsuarioComSucesso();

    //Botão para Realizar Cadastro
    home_page.botaoCadastrar();

    //Validação do Cadastro com Sucesso
    home_page.validarCadastroComSucesso();
})
