import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import CorPrimaria from './pages/CorPrimaria'
import Ingresso from './pages/IngressoCinema'

export default function SiteRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/CorPrimaria' element = {<CorPrimaria />} />
            <Route path='/IngressoCinema' element = {<Ingresso />} />
        </Routes>
        </BrowserRouter>
    )
}
