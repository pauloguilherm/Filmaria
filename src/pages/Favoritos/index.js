import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './favoritos.css'

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

        toast.success('Filme excluido :)')
    }
    if(loading){
        
        return(
            <h1>Carregando favoritos...</h1>
        )

    }else{
        return(
            <div className="container-filmeID">
                <h1>Página de favoritos</h1>
                {filmes.length === 0 && <h1>Você não tem filmes salvos. :(</h1>}
                
                <div>{filmes.map((filme)=>{

                    return(
                        <article className="filmes" key={filme.id}>
                            <h2>{filme.nome}</h2>

                            <div>

                            <Link to={`/filme/${filme.id}`}>Informações</Link>
                            <button type="button" className="excluir" onClick={()=> excluir(filme.id)}>Excluir</button>
                            </div>
                        </article>
                    )
                })}</div>
            </div>
        )
    }
   
}