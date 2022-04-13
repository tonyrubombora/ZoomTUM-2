import fetch from 'node-fetch';

fetch('http://localhost:10000/index.html').then(response => {
    console.log(response.text ());
});         
