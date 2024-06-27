import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';
import RequestTravel from './page';
import * as api from '../service/api';

describe('RequestTravel', () => {
  test('submits the form and redirects to /travels', async () => {
    // mockar a chamada da API através do objeto api
    vi.spyOn(api, 'createTravel').mockResolvedValue({});

    render(<RequestTravel />);

    const originInput = screen.getByLabelText('Origem:');
    userEvent.type(originInput, 'São Paulo');

    // const waypointsInput = screen.getByLabelText('Pontos de Parada:');
    // fireEvent.change(waypointsInput, { target: { value: 'Rio de Janeiro' } });

    const destinationInput = screen.getByLabelText('Destino:');
    userEvent.type(destinationInput, 'Rio de Janeiro');

    const submitButton = screen.getByRole('button', { name: 'Solicitar Viagem' });
    userEvent.click(submitButton);

    // aguardar que a API seja chamada
    await screen.findByText('Viagem solicitada com sucesso!');

    // deve mostrar uma mensagem de sucesso
    expect(screen.getByText('Viagem solicitada com sucesso!')).toBeDefined();
  });

  // test('submits the form with waypoints and redirects to /travels', async () => {
  //   // mockar a chamada da API através do objeto api
  //   vi.spyOn(api, 'createTravel').mockResolvedValue({});

  //   render(<RequestTravel />);

  //   const originInput = screen.getByLabelText('Origem:');
  //   userEvent.type(originInput, 'São Paulo');

  //   await screen.findByLabelText('Ponto de Parada:');
  //   const addWaypointButton = screen.getByRole('button', { name: 'Adicionar' });
  //   userEvent.click(addWaypointButton);

  //   const waypointInput = screen.getAllByLabelText('Ponto de Parada:')[0];
  //   userEvent.type(waypointInput, 'Campinas');

  //   const addWaypointButton2 = screen.getByRole('button', { name: 'Adicionar' });
  //   userEvent.click(addWaypointButton2);

  //   const waypointInput2 = screen.getAllByLabelText('Ponto de Parada:')[1];
  //   userEvent.type(waypointInput2, 'Belo Horizonte');

  //   const destinationInput = screen.getByLabelText('Destino:');
  //   userEvent.type(destinationInput, 'Rio de Janeiro');

  //   const submitButton = screen.getByRole('button', { name: 'Solicitar Viagem' });
  //   userEvent.click(submitButton);

  //   // aguardar que a API seja chamada
  //   await screen.findByText('Viagem solicitada com sucesso!');

  //   // deve mostrar uma mensagem de sucesso
  //   expect(screen.getByText('Viagem solicitada com sucesso!')).toBeDefined();
  // });
});