const axios = require('axios');
require('dotenv').config();

module.exports = async function() {
  try {
    const response = await axios.get(
      `http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-17&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
