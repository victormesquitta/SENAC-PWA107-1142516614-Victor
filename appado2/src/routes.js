import { BrowserRouter,
        Routes,
        Router, 
        Route} 
        from "react-router-dom";
//
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import ContaCorrente from "./pages/ContaCorrente";
import SobreNos from "./pages/SobreNos";
import Erro from "./pages/Erro";
import Header from "./components/Header";
import Financiamento from "./pages/Financiamento"
//criar componente de roteamento
function RouterApp(){
    return(
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path = "/financiamento" element={<Financiamento/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/contacorrente" element={<ContaCorrente/>}/>
        <Route path="/sobrenos" element={<SobreNos/>}/>
        <Route path="*" element={<Erro/>}/>


    </Routes>
    </BrowserRouter>
    )
}
export default RouterApp;
