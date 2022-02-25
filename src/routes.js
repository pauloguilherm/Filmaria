import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import Filmes from './pages/Filmes'
import Favoritos from './pages/Favoritos'
import NotFound from './pages/notFound'

const Rotas = () => {

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/filme/:id" element={<Filmes />} />
                <Route exact path="/favoritos" element={<Favoritos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;