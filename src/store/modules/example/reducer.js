import * as types from '../types';

// Defina o estado inicial, se necessário
const initialState = {
  botaoClicado: false,
};

// Crie seu reducer. Ele deve lidar com ações e retornar o novo estado
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    // Adicione cases para diferentes tipos de ação aqui
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso! =)');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro =(');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou executando a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
}
