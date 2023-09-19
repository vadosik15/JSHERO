import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeroContext } from '../../context';
import { Hero } from '../../HeroType';
import { deleteHero } from '../../utils/getAllList';

export const FullInfoPage: React.FC = () => {
  const { heros } = useContext(HeroContext);
  const heroId = window.location.pathname.split('/').pop();
  const hero = heros.find((hero: Hero) => hero._id === heroId);

  if (!hero) {
    return <div>No hero found.</div>;
  }

  const handeDeleate = () => {
    if (hero) {
      deleteHero(hero);
    }
  }

  return (
    < div className='full-info'>
      <div className='hero-container'>

        <h1 className='catch_phrase'>"{hero.catch_phrase}"</h1>
        
        <div className='hero_images'>
          {
            hero.images.map((img) => (
              <img key={img} src={img} alt="" />
            ))
          }
      </div>

        <p className='real_name'>{hero.nickname} ({hero.real_name})</p>
        <p className='superpowers'>superpowers: "{hero.superpowers}"</p>
        <p className='description'>description: "{hero.origin_description}"</p>

      </div>

      <div className='btn-containers'>
        <Link to={`/update/${hero._id}`}>
          <button className='btn'>Change Hero
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M23 4V10H17" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.49 15C19.84 16.8399 18.6096 18.4187 16.9842 19.4985C15.3588 20.5783 13.4265 21.1006 11.4784 20.9866C9.53038 20.8726 7.67216 20.1286 6.18376 18.8667C4.69536 17.6047 3.65743 15.8932 3.22637 13.9901C2.79531 12.0869 2.99448 10.0952 3.79386 8.31508C4.59325 6.53496 5.94954 5.06288 7.65836 4.12065C9.36717 3.17843 11.3359 2.81711 13.268 3.09116C15.2 3.3652 16.9906 4.25975 18.37 5.64001L23 10" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></button>
        </Link>
        <Link to={`/`}>
          <button onClick={() => handeDeleate()} className='btn' >Delete hero
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6H5H21" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 11V17" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14 11V17" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};