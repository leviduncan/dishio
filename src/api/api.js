import axios from 'axios';

const api = axios.create({
  baseURL: 'www.themealdb.com/api/json/v1/1/search.php?s=',
});

export const searchRecipes = async (query) => {
  const response = await api.get('/recipes', {
    params: {
      query,
    },
  });
  return response.data;
};