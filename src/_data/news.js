import { get } from 'axios';
require('dotenv').config();

export default async function() {
  try {
    const response = await get(
      `http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-17&sortBy=publishedAt&apiKey=${process.env.API_KEY}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
