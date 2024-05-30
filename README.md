# React Base Project

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%2320232a.svg?style=for-the-badge&logo=redux&logoColor=%2361DAFB)
![Redux Saga](https://img.shields.io/badge/redux--saga-%2320232a.svg?style=for-the-badge&logo=redux-saga&logoColor=%2361DAFB)

Este é um projeto base em React configurado com Redux e Redux Saga, pronto para ser usado como ponto de partida para novos projetos.

## Estrutura do Projeto

A estrutura do projeto segue uma organização modular, facilitando a escalabilidade e manutenção do código.

src/<br>
├── components/ # Componentes reutilizáveis<br>
├── pages/ # Páginas do aplicativo<br>
├── services/ # Configuração de serviços como Axios<br>
├── store/ # Configuração do Redux e Sagas<br>
│ ├── modules/<br>
│ │ ├── rootReducer.js<br>
│ │ └── rootSaga.js<br>
│ └── index.js<br>
├── styles/ # Estilos globais<br>
├── App.js # Componente principal do aplicativo<br>
└── index.js # Ponto de entrada do React


## Funcionalidades

- **React**: Biblioteca principal para construir interfaces de usuário.
- **Redux**: Gerenciamento de estado global.
- **Redux Saga**: Middleware para gerenciar efeitos colaterais assíncronos.
- **Axios**: Cliente HTTP para fazer requisições à API.

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:
    ```sh
    git clone https://github.com/baldancam/base-react.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd react-base
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```
   
## Uso

Para iniciar o servidor de desenvolvimento, execute:
```sh
npm start
```
O aplicativo estará disponível em http://localhost:3000.

Configuração do Redux
O Redux está configurado no arquivo src/store/index.js com um exemplo de reducer e saga. Você pode adicionar seus próprios reducers e sagas conforme necessário.

rootReducer
javascript
```sh
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // seus reducers aqui
});

export default rootReducer;
rootSaga
javascript
Copiar código
import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    // suas sagas aqui
  ]);
}

export default rootSaga;
```
## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Contato:

Nome: Matheus Baldança<br>
Email: baldancam@gmail.com<br>
GitHub: [baldancam](https://github.com/baldancam)
