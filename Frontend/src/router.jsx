import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Home from "./pages/Home"
import Empresa from "./pages/Empresa"
import Clientes from "./pages/Clientes"
import Parceiros from "./pages/Parceiros"
import Contato from "./pages/Contato"
import Auditoria from "./pages/Solucoes/Projetos/Auditoria"
import Consultoria from "./pages/Solucoes/Projetos/Consultoria"
import Contingencia from "./pages/Solucoes/Projetos/Contingencia"
import LGPD from "./pages/Solucoes/Projetos/LGPD"
import Licenciamento from "./pages/Solucoes/Projetos/Licenciamento"
import Locacao from "./pages/Solucoes/Projetos/Locacao"
import BOC from "./pages/Solucoes/SupEmpresas/BOC"
import Datacenter from "./pages/Solucoes/SupEmpresas/Datacenter"
import NOC from "./pages/Solucoes/SupEmpresas/NOC"
import Outsourcing from "./pages/Solucoes/SupEmpresas/Outsourcing"
import Redes from "./pages/Solucoes/SupEmpresas/Redes"
import ServGerenciados from "./pages/Solucoes/SupEmpresas/Serv-Gerenciados"
import SOC from "./pages/Solucoes/SupEmpresas/SOC"
import FieldService from "./pages/Solucoes/SupUsuario/FieldService"
import GerAtivos from "./pages/Solucoes/SupUsuario/GerAtivos"
import Helpdesk from "./pages/Solucoes/SupUsuario/Helpdesk"
import Servicedesk from "./pages/Solucoes/SupUsuario/Servicedesk"
import Financeiro from "./pages/Segmentos/Financeiro"
import Governo from "./pages/Segmentos/Governo"
import Industria from "./pages/Segmentos/Industria"
import Saude from "./pages/Segmentos/Saude"
import Servicos from "./pages/Segmentos/Serviços"
import Varejo from "./pages/Segmentos/Varejo"
import Aplicacoes from "./pages/Datacenter/Aplicacoes"
import AreaDeTrabalho from "./pages/Datacenter/AreaDeTrabalho"
import Armazenamento from "./pages/Datacenter/Armazenamento"
import Backup from "./pages/Datacenter/Backup"
import Integracao from "./pages/Datacenter/Integracao"
import LinkDedicado from "./pages/Datacenter/LinkDedicado"
import ServFisicosVirtuais from "./pages/Datacenter/ServFisicosVirtuais"
import Sites from "./pages/Datacenter/Sites"
import SobDemanda from "./pages/Datacenter/SobDemanda"
import TrabalheConosco from "./pages/TrabalheConosco"
import Politica from "./pages/Politica"
import Blackfriday from "./pages/BlackFriday"
import Login from "./pages/Login"
import Painel from "./pages/Painel"
import RotaProtegida from "./RotaProtegida"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home />}
                />
                <Route
                    exact
                    path="/empresa"
                    element={<Empresa />}
                />
                <Route
                    exact
                    path="/clientes"
                    element={<Clientes />}
                />
                <Route
                    exact
                    path="/parceiros"
                    element={<Parceiros />}
                />
                <Route
                    exact
                    path="/contato"
                    element={<Contato />}
                />
                <Route
                    exact
                    path="/auditoria"
                    element={<Auditoria />}
                />
                <Route
                    exact
                    path="/consultoria"
                    element={<Consultoria />}
                />
                <Route
                    exact
                    path="/contingencia"
                    element={<Contingencia />}
                />
                <Route
                    exact
                    path="/lgpd"
                    element={<LGPD />}
                />
                <Route
                    exact
                    path="/licenciamento"
                    element={<Licenciamento />}
                />
                <Route
                    exact
                    path="/locacao"
                    element={<Locacao />}
                />

                <Route
                    exact
                    path="/boc"
                    element={<BOC />}
                />
                <Route
                    exact
                    path="/datacenter"
                    element={<Datacenter />}
                />
                <Route
                    exact
                    path="/noc"
                    element={<NOC />}
                />
                <Route
                    exact
                    path="/outsourcing"
                    element={<Outsourcing />}
                />
                <Route
                    exact
                    path="/redes"
                    element={<Redes />}
                />
                <Route
                    exact
                    path="/sergerenciados"
                    element={<ServGerenciados />}
                />
                <Route
                    exact
                    path="/soc"
                    element={<SOC />}
                />
                <Route
                    exact
                    path="/fieldservice"
                    element={<FieldService />}
                />
                <Route
                    exact
                    path="/gerativos"
                    element={<GerAtivos />}
                />
                <Route
                    exact
                    path="/helpdesk"
                    element={<Helpdesk />}
                />
                <Route
                    exact
                    path="/servicedesk"
                    element={<Servicedesk />}
                />
                <Route
                    exact
                    path="/auditoria"
                    element={<Auditoria />}
                />
                <Route
                    exact
                    path="/consultoria"
                    element={<Consultoria />}
                />
                <Route
                    exact
                    path="/contingencia"
                    element={<Contingencia />}
                />
                <Route
                    exact
                    path="/lgpd"
                    element={<LGPD />}
                />
                <Route
                    exact
                    path="/licenciamento"
                    element={<Licenciamento />}
                />
                <Route
                    exact
                    path="/locacao"
                    element={<Locacao />}
                />
                <Route
                    exact
                    path="/financeiro"
                    element={<Financeiro />}
                />
                <Route
                    exact
                    path="/governo"
                    element={<Governo />}
                />
                <Route
                    exact
                    path="/industria"
                    element={<Industria />}
                />
                <Route
                    exact
                    path="/saude"
                    element={<Saude />}
                />
                <Route
                    exact
                    path="/logistica"
                    element={<Servicos />}
                />
                <Route
                    exact
                    path="/varejo"
                    element={<Varejo />}
                />
                <Route
                    exact
                    path="/aplicacoes"
                    element={<Aplicacoes />}
                />
                <Route
                    exact
                    path="/areadetrabalho"
                    element={<AreaDeTrabalho />}
                />
                <Route
                    exact
                    path="/armazenamento"
                    element={<Armazenamento />}
                />
                <Route
                    exact
                    path="/backup"
                    element={<Backup />}
                />
                <Route
                    exact
                    path="/integracao"
                    element={<Integracao />}
                />
                <Route
                    exact
                    path="/linkdedicado"
                    element={<LinkDedicado />}
                />
                <Route
                    exact
                    path="/servfisicosvirtuais"
                    element={<ServFisicosVirtuais />}
                />
                <Route
                    exact
                    path="/sites"
                    element={<Sites />}
                />
                <Route
                    exact
                    path="/sobdemanda"
                    element={<SobDemanda />}
                />
                <Route
                    exact
                    path="/trabalheconosco"
                    element={<TrabalheConosco />}
                />
                <Route
                    exact
                    path="/politica"
                    element={<Politica />}
                />
                <Route
                    exact
                    path="/blackfriday"
                    element={<Blackfriday />}
                />
                <Route
                    exact
                    path="/login"
                    element={<Login />}
                />
                <Route
                    exact
                    path="/painel"
                    element={
                        <RotaProtegida>
                            <Painel />
                        </RotaProtegida>
                    }
                />
              

            </Routes>
        </BrowserRouter>
    )
}

export default Router