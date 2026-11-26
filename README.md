# CodeceptJS + WebDriver

[![E2E tests](https://github.com/erkmnasc/codeceptjs-webdriver/actions/workflows/ci.yml/badge.svg)](https://github.com/erkmnasc/codeceptjs-webdriver/actions/workflows/ci.yml)

Automação web com CodeceptJS usando o helper WebDriver e Page Objects, feita
no curso da Qazando. Os testes rodam no site de prática
[automationpratice.com.br](https://automationpratice.com.br), com massa
gerada pelo Faker.

## Estrutura

```
pages/   page objects (home, login, cadastro)
steps/   cenários (*_test.js)
```

## Cenários

- **Cadastro:** usuário criado com sucesso
- **Login:** com sucesso, só com e-mail, só com senha e sem os dois

## Como rodar

Precisa de Node.js 20 ou mais novo e do Google Chrome. O driver do Chrome é
baixado automaticamente pelo WebdriverIO.

```bash
npm install
npm test                # abre o navegador
npm run test:headless   # sem abrir o navegador
```

## CI

O GitHub Actions roda os testes em modo headless a cada push na `master`, em
pull requests e manualmente (`.github/workflows/ci.yml`).
