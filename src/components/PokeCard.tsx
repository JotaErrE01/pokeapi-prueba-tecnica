import { FC } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";
import { PokeResults } from "../interfaces/IPokeList";

interface Props {
  poke: PokeResults;
  index: number;
}

export const PokeCard: FC<Props> = ({ poke, index }) => {
  return (
    <Link
      to={`/${poke.name}`}
      className="card"
    >
      <LazyLoadImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`}
        className="card__image"
        alt={poke.name}
        loading="lazy"
      />
      <h2
        className="card__title"
      >{poke.name}</h2>
    </Link>
  )
};
