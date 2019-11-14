const axios = require('axios');
const api = {
    getUserData(userName){
        return axios.get(`https://api.github.com/users/${userName}`)
    }
}
module.exports = api
//to make api useable in index.js
