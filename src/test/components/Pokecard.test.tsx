import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PokeCard } from '../../components/PokeCard';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Pruebas en pokecard', () => {
  test('Debe contener la info de un pokemon', () => {
    const { container } = render(<PokeCard
      poke={{
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/'
      }}
      index={1}
    />, { wrapper: BrowserRouter });

    const title = screen.getByRole('heading');

    expect(title.textContent).toBe('bulbasaur');
  });

  test('Debe llamarse el click de la carta del pokemon', async () => {
    const { container } = render(<PokeCard
      poke={{
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/'
      }}
      index={1}
    />, { wrapper: BrowserRouter })

    const user = userEvent.setup();
    const pokeLink = vi.spyOn(user, 'click');
    const link = container.querySelector('a')!;

    await user.click(link);

    expect(pokeLink).toHaveBeenCalled();
  });
})