import React, { useState } from "react";
import logo from '../../assets/logo.png';
import './header.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (event, dropdownId) => {
    event.preventDefault();
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="custom-nav custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={logo} width="80px" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown
                title="HOME"
                id="home-dropdown"
                className={`custom-dropdown ${openDropdown === 'home-dropdown' ? 'show' : ''}`}
                onClick={(event) => handleDropdownToggle(event, 'home-dropdown')}
              >
                <NavDropdown.Item as={Link} to="/empresa">A Empresa</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/clientes">Clientes</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/parceiros">Parceiros</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="SOLUÇÕES"
                id="solutions-dropdown"
                className={`custom-dropdown ${openDropdown === 'solutions-dropdown' ? 'show' : ''}`}
                onClick={(event) => handleDropdownToggle(event, 'solutions-dropdown')}
              >
                <div className="custom-dropdown-content">
                  <div className="custom-dropdown-column">
                  <h6>Suporte ao usuário final</h6>
                    <NavDropdown.Item as={Link} to="/helpdesk">Helpdesk</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/servicedesk">Servicedesk</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/fieldservice">FieldService</NavDropdown.Item>
                  </div>
                  <div className="custom-dropdown-column">
                    <h6> &nbsp;Suporte a Empresas</h6>
                    <NavDropdown.Item as={Link} to="/noc">NOC - Network Operations Center</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/soc">SOC - Security Operations Center</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/boc">BOC – Backup Operations Center</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/datacenter">Gestão de Datacenter</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/redes">Gestão de Redes</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/outsourcing">Outsourcing de Firewall</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/sergerenciados">Serviços Gerenciados</NavDropdown.Item>
                  </div>
                  <div className="custom-dropdown-column">
                    <h6> &nbsp;Projetos em T.I</h6>
                    <NavDropdown.Item as={Link} to="/auditoria">Auditoria</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/consultoria">Consultoria</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/lgpd">LGPD</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/licenciamento">Licenciamento</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/locacao">Locação de mão de obra especializada</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/contingencia">Plano de Contingência</NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>

              <NavDropdown
                title="SEGMENTOS"
                id="segments-dropdown"
                className={`custom-dropdown ${openDropdown === 'segments-dropdown' ? 'show' : ''}`}
                onClick={(event) => handleDropdownToggle(event, 'segments-dropdown')}
              >
                <NavDropdown.Item as={Link} to="/financeiro">Financeiro</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/industria">Industria</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/governo">Governo</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/saude">Saúde</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/logistica">Logística</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/varejo">Varejo</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="TCLOUD - DATACENTER"
                id="tcloud-dropdown"
                className={`custom-dropdown ${openDropdown === 'tcloud-dropdown' ? 'show' : ''}`}
                onClick={(event) => handleDropdownToggle(event, 'tcloud-dropdown')}
              >
                <NavDropdown.Item as={Link} to="/armazenamento">Armazenamento de dados</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/backup">Backup Offsite</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/aplicacoes">Hospedagem de aplicações</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/sites">Hospedagem de sites</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/areadetrabalho">Hospedagem de área de trabalho remota</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/servfisicosvirtuais">Hospedagem de servidores físicos ou virtuais</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/integracao">Integração de aplicativos e API's</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/sobdemanda">Provisionamento de servidores sob demanda</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/linkdedicado">Links dedicados</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="CONTATO"
                id="contact-dropdown"
                className={`custom-dropdown ${openDropdown === 'contact-dropdown' ? 'show' : ''}`}
                onClick={(event) => handleDropdownToggle(event, 'contact-dropdown')}
              >
                <NavDropdown.Item as={Link} to="/contato">Imprensa</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trabalheconosco">Trabalhe Conosco</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="https://www.tcdobrasil.com" target="_blank">BLOG T.I</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
