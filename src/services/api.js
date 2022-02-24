import axios from 'axios';

//Base URL > https://sujeitoprogramador.com/

//r-api/?api=filmes/ (TODOS OS FILMES)

//r-api/?api=filmes/ID (FILME POR ID)

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default api;