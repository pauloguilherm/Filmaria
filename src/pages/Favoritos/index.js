import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';

export default function Filme(){

    const [loading, setLoading] = useState(true)
    const [filmes, setFilmes] = useState([])
    useEffect(()=>{

            const local = JSON.parse(localStorage.getItem('filmes'));
            setFilmes(local)
            setLoading(false)
    }, [filmes])

    function excluir(id){
        
        filmes.forEach((filme)=>{

            if(filme.id === id){
                
                delete filmes.splice(filmes.indexOf(filme.nome))
                setFilmes(filmes)
                localStorage.setItem('filmes', JSON.stringify(filmes))
                
            }
        })
    }
    if(loading){
        
        return(
            <h1>Carregando favoritos...</h1>
        )

    }else{
        return(
            <div className="container">
                <h1>Página de favoritos</h1>
                <div>{filmes.map((filme)=>{

                    return(
                        <article className="filmes" key={filme.id}>
                            <h2>{filme.nome}</h2>
                            <button type="button" onClick={()=> excluir(filme.id)}>Excluir</button>
                            <Link to={`/filme/${filme.id}`}>Informações</Link>
                        </article>
                    )
                })}</div>
            </div>
        )
    }
   
}