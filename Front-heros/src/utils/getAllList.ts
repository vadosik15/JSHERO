import { API_URL } from '../Api';
import { Hero } from '../HeroType';

export const getAllHeroes = async (page: number, pageSize: number): Promise<Hero[]> => {

  try {
    const response = await fetch(`${API_URL}?page=${page}&pageSize=${pageSize}`);
    const jsonData = await response.json();

    return jsonData.data
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);

    return [];
  }
};

export const createHero = async (hero: Hero): Promise<void> => {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hero),
    });

  } catch (error) {
    console.error('Помилка при створенні героя:', error);
  }
};

export const updateHero = async (hero: Hero): Promise<void> => {
  try {
    await fetch(`${API_URL}/${hero._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hero),
    });

  } catch (error) {
    console.error('Помилка при оновленні героя:', error);
  }
};

export const deleteHero = async (hero: Hero): Promise<void> => {
  try {
    await fetch(`${API_URL}/${hero._id}`, {
      method: 'DELETE',
    });

  } catch (error) {
    console.error('Помилка при видаленні героя:', error);
  }
};