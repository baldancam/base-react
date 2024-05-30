import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragrafo } from './styled';

import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <>
      <Title>Login</Title>
      <Paragrafo>Teste page login</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </>
  );
}
