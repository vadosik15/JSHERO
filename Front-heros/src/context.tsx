import React, { createContext, useEffect, useState } from 'react';
import { Hero } from './HeroType';
import { API_URL } from './Api';


interface HeroContextProps {
  heros: Hero[];
  getAllHeros: (page: number, pageSize: number) => Promise<Hero[]>;
}

const HeroContext = createContext<HeroContextProps>({
  heros: [],
  getAllHeros: async () => [],
});

const HeroContextProvider: React.FC<any> = ({ children }) => {
  const [heros, setHeros] = useState<Hero[]>([]);
  const currentPage = 1 ;

  const getAllHeros = async (page: number, pageSize: number): Promise<Hero[]> => {
    try {
      const response = await fetch(`${API_URL}?page=${page}&pageSize=${pageSize}`);
      const jsonData = await response.json();

      setHeros(jsonData.data);

      return jsonData.data;
    } catch (error) {
      console.error('Помилка при отриманні даних:', error);
      
      return [];
    }
  };

  useEffect(() => {
    getAllHeros(currentPage, 5);
  }, [currentPage]);

  return (
    <HeroContext.Provider
      value={{
        heros,
        getAllHeros,
        // deleteHero,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export { HeroContext, HeroContextProvider };