import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'

export default function notFound(){

    return(
        <div class="notFound">
            <h1>404</h1>
            <p>Página não encontrada</p>
            <Link to="/">Home</Link>
        </div>
    )
}