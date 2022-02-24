import api from '../../services/api';
import { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom';

export default function Home(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get('r-api/?api=filmes/')
            setFilmes(response.data)
        }

        loadFilmes();
    }, [])
    return(
        <div className="container">
            <div className="lista-filmes">

               {filmes.map((filme)=>{

                   return(
                       <article key={filme.id}>
                           <h1>{filme.nome}</h1>
                           <img src={filme.foto} alt={filme.nome}/>
                           <Link to={`/filme/${filme.id}`}>Acessar</Link>
                       </article>
                   )
               })}
            </div>
        </div>
    )
}