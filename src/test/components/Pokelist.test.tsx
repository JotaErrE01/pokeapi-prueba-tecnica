import { test, describe, expect } from 'vitest';
import { PokeList } from '../../components/PokeList';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Pruebas en el componente Pokelist', () => {
  test('Debe de mostrar el spinner al cargar', () => {
    const { container } = render(<PokeList />, { wrapper: BrowserRouter });
    expect(container).toMatchSnapshot();
  });

  test('Debe hacer match con el sanpshot de pokemons y tener 21', async () => {
    const { container } = render(<PokeList />, { wrapper: BrowserRouter });
    await new Promise((resolve) => setTimeout(resolve, 200));

    expect(container).toMatchSnapshot();
    expect(container.querySelectorAll('.card').length).toBe(21);
  });
});
