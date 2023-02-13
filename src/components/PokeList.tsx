import { useRef, useState, useEffect } from 'react';
import { usePokeApi } from "../hooks";
import { IPokeList } from "../interfaces/IPokeList";
import { PokeCard } from "./PokeCard";
import { Spinner } from './Spinner';

export const PokeList = () => {
  const [limit, setLimit] = useState(21);
  const ref = useRef<HTMLDivElement>(null);
  const {
    error,
    isLoading,
    data,
  } = usePokeApi<IPokeList>(`/pokemon?limit=${limit}`);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >= ref.current!.offsetHeight) {
        setLimit(state => state + 21);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight >= ref.current!.offsetHeight) {
          setLimit(21);
        }
      });
    }
  }, [ref]);

  if (error) {
    return (
      <div
        className="error"
      >
        <h1>Lo sentimos, Intente de Nuevo.</h1>
      </div>
    )
  }

  return (
    <>
      <h1 className="title"
      >Pokedex</h1>
      <div
        id="pokeList"
        className="container cardList"
        ref={ref}
      >
        {
          isLoading && !data ? (
            <Spinner />
          )
            :
            data?.results.map((poke, index) => (
              <PokeCard
                key={poke.name}
                poke={poke}
                index={index}
              />
            ))
        }
      </div>

      {
        isLoading && (
          <Spinner />
        )
      }
    </>
  )
};
