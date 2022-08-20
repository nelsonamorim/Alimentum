import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Catalogo from './pages/Catalogo';
import FormularioMercado from './pages/FormularioMercado';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/formulario-mercado" element={<FormularioMercado />} />
            </Routes>
        </BrowserRouter>
    );
}