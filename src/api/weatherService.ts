import request from '../service';

export const getWeather = (data: { lat: string, lon: string }) => {
  return request({
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
    data,
    method: 'get',
    headers: {
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      'X-RapidAPI-Key': '8d83a219efmshe9f157ab86c4944p1a64f0jsn4ec9490521321'
    }
  });
};
