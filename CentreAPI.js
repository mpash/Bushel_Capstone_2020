require('dotenv').config({path:'./secrets.env'});
const dotenv = require('dotenv');
const axios = require('axios').default;

axios.defaults.headers.common['Authorization'] = 'Token ' + process.env.CENTRE_AUTH_TOKEN;
axios.defaults.headers.common['App-Installation-Id'] = '2182addf-fa28-408f-8cfe-0c55701c44b6';
axios.defaults.headers.common['App-Name'] = 'http://capstone-web.bw.localhost:8001';
axios.defaults.headers.common['App-Company'] = 'capstone';
axios.defaults.headers.common['App-Version'] = '1.0';
axios.defaults.headers.common['Accept'] = 'application/json';

//this method gets the response from centre 
function getData(){
    return axios.post('https://centre-r2.scaleticket.net/api/v3/tickets')
};

//this manipulates the data by using response.data, we can rename this to whatever
//is best, I'm just separating them for clarity
function manipulate(){
    getData().then(response => console.log(response.data));
}


module.exports.getData = function(){
    return getData();
}

