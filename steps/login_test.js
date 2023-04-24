const {I, login_page} = inject()

Feature('login');

Scenario('login com sucesso', () => {

    login_page.loginComSucesso();
})

Scenario('Tentando Logar apenas o e-mail', () => {
    login_page.loginApenasComEmail();
})

Scenario('Tentando Logar apenas o senha', () => {
    login_page.loginApenasComSenha();
})

Scenario('Tentando Logar Sem E-mail e Senha', () => {
    login_page.loginSemEmaileSenha();
})
