import { useEffect, useState } from 'react';
import { pokeApi } from '../api/pokeApi';

export const usePokeApi = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T|null>(null);

  const getPoke = async () => {
    try {
      setIsLoading(true);
      const { data } = await pokeApi.get<T>(url);
      setIsLoading(false);
      setError(false);
      setData(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    getPoke();
  }, [url])

  return {
    isLoading,
    error,
    data,
    getPoke
  };
}
