# Automação WebdriverIO Demo App 🤖📱 - Verity 💙 WebdriverIO + Appium + JavaScript

## 📋 Descrição

Este projeto é um exemplo completo de automação de testes mobile para Android **WebdriverIO**.

Ele cobre os principais fluxos da aplicação:

- Tela Inicial _(Home)_ ✅
- Visualizar Arquivo _(WebView)_ ✅
- Acessar Sistema _(Login)_ ✅
- Cadastro _(Signup)_ ✅
- Formulários _(Form)_ ⌛️
- Arrastar horizontal _(Swipe)_ ⌛️
- Montar Quadro _(Drag)_ ⌛️

---

## 📚 Documentação dos testes

- Acessar o link: [Documentação Mobile Demo App - BDD](COLOCAR O LINK)

## ✅ Requisitos

- IDE (Visual Studio Code);
- Node.JS;
- Git;
- Appium Server (Executando local);
- Appium Inspector (Executando local para inspecionar elementos);
- Android Studio (Com emulador ou dispositivo conectado);
- Android SDK ;
- Aplicativo nativo `.apk` ou `.zip` para teste;
- Java JDK 8 ou superior;
- Material Icon Theme (Optional Plugin VSCode).

---

## 🧪 Tecnologias e Ferramentas Utilizadas

- **JavaScript**
- **WebdriverIO**
- **Appium** (com `UiAutomator2`)
- **Mocha**
- **Allure Report** ()
- **BrowserStack** (execução de testes na nuvem)
- **GitHub Actions** (integração contínua)
- **BrowserStack** (em andamento...)

---

## 🚀 Como configurar o ambiente

```bash
git clone https://github.com/ramirobrandao/verity-desafio-qa-mobile.git
cd verity-desafio-qa-mobile
npm install
```

---

## ▶️ Como executar os testes

### Android

#### Executar todos os testes:

```bash
npm run wdio
```

### Appium não inicia automaticamente localmente

Execute o Appium manualmente no terminal antes de iniciar os testes:

```bash
appium 
```

### Configuração do Appium

Abra o **Appium Inspector**, configure as capabilities:

```bash
{
  "appium:platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:connectHardwareKeyboard": true
}
```
---

## 📊 Relatórios

### Allure Report

Após a execução dos testes, para visualizar o relatório:

```bash
npm allure:open
```
📊 Resultado esperado do Allure:

Resumo dos testes
Screenshots das falhas
Logs de execução
Informações do ambiente

---