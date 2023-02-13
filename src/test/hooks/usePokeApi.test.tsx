import { describe, expect, test } from 'vitest';
import { render, renderHook, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { usePokeApi } from '../../hooks';
import { IPokeList } from '../../interfaces/IPokeList';
import { PokeList } from '../../components';

function waitForNextUpdate(timeout: number = 2000) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

describe('Pruebas en mi custoom hook', () => {
  test('No debe tardar mas de 2 segundos la respuesta y que solo traiga 21 pokemons en la primera carga', async () => {
    const { result } = renderHook(() => usePokeApi<IPokeList>('pokemon?limit=21'));
    await waitForNextUpdate();
    const { data, isLoading } = result.current;
    expect(data).not.toBeNull();
    expect(data?.results.length).toBe(21);
    expect(isLoading).toBe(false);
  });
});




