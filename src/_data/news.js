const axios = require('axios');

module.exports = async function() {
  try {
    const response = await axios.get('-----');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
