import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Catalogo from './pages/Catalogo';
import Dashboard from './pages/Dashboard';
import FormularioMercado from './pages/FormularioMercado';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/formulario-mercado" element={<FormularioMercado />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}