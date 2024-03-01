import { Routes, Route, HashRouter } from "react-router-dom";
import App from "App";
import Videos from "App";
import Contato from "App";

function RoutesApp() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/home' element={<App/>}/>
                <Route path='/videos' element={<Videos/>}/>
                <Route path='/contato' element={<Contato/>}/>
            </Routes>
        </HashRouter>
    )
}
export default RoutesApp;