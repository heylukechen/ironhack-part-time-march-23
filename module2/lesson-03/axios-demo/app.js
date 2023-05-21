const axios = require('axios');

const randomFox = axios.get('https://randomfox.ca/floof/')
                    .then( response => console.log(response.data))
                    .catch(err => console.log(err))