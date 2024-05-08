import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import App from './App';
import {login} from './loginService';

// Mock do serviço de login
jest.mock('./loginService', () => ({
  login: jest.fn(),
}));

describe('App', () => {
  beforeEach(() => {
    // Limpa todos os mocks antes de cada teste
    jest.clearAllMocks();
  });

  it('mostra uma mensagem de erro quando os campos de email e senha estão vazios', async () => {
    const {getByTestId, getByText} = render(<App />);

    fireEvent.press(getByTestId('btn-login'));

    await waitFor(() =>
      expect(getByText('Por favor preencha todos os campos')).toBeTruthy(),
    );
  });

  it('chama o serviço de login quando os campos de email e senha são preenchidos', async () => {
    const {getByTestId} = render(<App />);

    fireEvent.changeText(getByTestId('input-email'), 'teste@teste.com');
    fireEvent.changeText(getByTestId('input-password'), 'password');
    fireEvent.press(getByTestId('btn-login'));

    await waitFor(() =>
      expect(login).toHaveBeenCalledWith('teste@teste.com', 'password'),
    );
  });

  it('não chama o serviço de login quando somente o campo de email está preenchido', async () => {
    const {getByTestId} = render(<App />);

    fireEvent.changeText(getByTestId('input-email'), 'teste@teste.com');
    fireEvent.press(getByTestId('btn-login'));

    await waitFor(() => expect(login).not.toHaveBeenCalled());
  });

  it('não chama o serviço de login quando somente o campo de senha está preenchido', async () => {
    const {getByTestId} = render(<App />);

    fireEvent.changeText(getByTestId('input-password'), 'password');
    fireEvent.press(getByTestId('btn-login'));

    await waitFor(() => expect(login).not.toHaveBeenCalled());
  });
});
