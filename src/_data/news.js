const axios = require('axios');
require('dotenv').config();
const countries = require('./countries.json');

async function getNews(country) {
  try {
    const response = await axios.get(
      `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}`
    );
    return {
      country: country,
      articles: response.data.articles
    };
  } catch (error) {
    console.error(error);
  }
}

module.exports = async function() {
  var newsPromises = countries.map(getNews);
  return Promise.all(newsPromises).then(newObjects => {
    console.log('newObjects :-', newObjects);
    return [].concat.apply([], newObjects);
  });
};

// try {
//   const response = await axios.get(
//     `http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-17&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
//   );
//   console.log(response);
//   return response.data;
// } catch (error) {
//   console.error(error);
// }
