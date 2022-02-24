import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import './filme.css';
import api from '../../services/api';

export default function Filme(){

    const {id} = useParams();

    const history = useNavigate();
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`)
            
            if(response.data.length === 0){
                toast.error('Filme não encontrado')
                history('/')
                return;
            }
            setFilmes(response.data)
            setLoading(false)
        }

        loadFilmes();

        return () => {
            
            console.log("componente desmontado")
        }
    }, [id])

    function salvaFilme(){

        const filme = localStorage.getItem('filmes');

        const minhaLista = JSON.parse(filme) || [];

        const hasFilme = minhaLista.some((filmeSalvo) =>  filmeSalvo.id === filmes.id)
        
        if(hasFilme){
            toast.error('Filme já salvo') 
            return
        } 

        minhaLista.push(filmes)

        localStorage.setItem('filmes', JSON.stringify(minhaLista))
        toast.success('Filme salvo com sucesso')

    
    }

    if(loading){
        
        return(
            <h1>Carregando seu filme...</h1>
        )

    }else{
        return(
            <div className="container">
                <h1>{filmes.nome}</h1>
                <img src={filmes.foto} alt={filmes.nome}/>
                <span>{filmes.sinopse}</span>
                <a className="trailer" target="blank" href={`https://www.youtube.com/results?search_query=${filmes.nome} trailer`}>Trailer</a>
                <a className="trailer" onClick={ salvaFilme } >Salvar</a>
            </div>
        )
    }
   
}