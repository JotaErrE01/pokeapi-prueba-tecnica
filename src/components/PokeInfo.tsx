import { useNavigate, useParams } from 'react-router';
import { usePokeApi } from '../hooks/usePokeApi';
import { IPokeInfo } from '../interfaces/IPokeInfo';

export const PokeInfo = () => {
  const { name } = useParams();
  const { error, isLoading, data } = usePokeApi<IPokeInfo>(`/pokemon/${name}`);

  if (isLoading) return <></>;

  if (error) {
    return <h1
      className='title'
    >Lo sentimos, Ocurrió un errror inesperado</h1>;
  };

  return (
    <div>
      <h1
        className='title'
      >{data?.name}</h1>

      <div
        className='container card__info'
      >
        <img
          className='main_card__image'
          src={data?.sprites.other?.dream_world.front_default}
          alt={data?.name}
        />

        <div className='text_info'>
          <h2
            className='subtitle'
          >Abilities</h2>
          <ul className='abilities' >
            {
              data?.abilities.map((ability, index) => (
                <li
                  key={index}
                >{ability.ability.name}</li>
              ))
            }
          </ul>
        </div>

        <div>
          <h2
            className='subtitle'
          >Sprites</h2>
          <div
            className='card__info__images__container'
          >
            <img
              className='card__info__image'
              src={data?.sprites.front_default}
              alt={data?.name}
            />

            <img
              className='card__info__image'
              src={data?.sprites.back_default}
              alt={data?.name}
            />
            
            <img
              className='card__info__image'
              src={data?.sprites.front_shiny}
              alt={data?.name}
            />

            <img
              className='card__info__image'
              src={data?.sprites.back_shiny}
              alt={data?.name}
            />
          </div>
        </div>
      </div>
    </div>
  )
};
