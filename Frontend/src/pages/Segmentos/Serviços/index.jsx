import React, { useEffect } from "react"
import BtnContato from "../../../components/Contato"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import HeadbandLogistica from "../../../components/Headband/HeadbandLogistica"
import "./servico.css"
import logistica from "../../../assets/logistica.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';


const Logistica = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandLogistica />
            <div className="container containerh3">
                <h1>Soluções para logística</h1>

                <p>
                    Soluções de TI para logística são ferramentas tecnológicas que visam otimizar o gerenciamento de operações logísticas. Isso inclui o uso de software e hardware para rastreamento de estoque, planejamento de rotas, monitoramento de entregas, gerenciamento de frota, entre outros. Essas soluções permitem que as empresas melhorem a eficiência de suas operações, reduzam custos e ofereçam um melhor serviço aos clientes, garantindo entregas mais rápidas e precisas. Elas desempenham um papel crucial na modernização da logística e ajudam as empresas a enfrentar os desafios de um mercado cada vez mais competitivo.



                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Serviços para Garantir Disponibilidade Total no Setor de Saúde</h4>
                            <p>


                                A transformação digital já é uma realidade, e se a automação dos processos logísticos é uma necessidade em sua empresa, conte com a TC do Brasil. A importância da tecnologia na logística é inquestionável, especialmente na era da transformação digital. As soluções tecnológicas oferecem inúmeras vantagens para o setor logístico, proporcionando maior eficiência, precisão e controle nas operações.<br/><br/>

                                Com o uso da tecnologia, o planejamento logístico se torna ágil, fornecendo acesso diário a informações valiosas para uma tomada de decisão mais assertiva. Nossos serviços ajudam sua empresa a desenvolver estratégias claras e precisas para otimizar sua logística.
                                <br/><br/>
                                Quando o processo de distribuição é otimizado e as entregas são realizadas com maior rapidez, a satisfação de seus clientes é conquistada. Essa satisfação, por sua vez, gera credibilidade e reconhecimento no mercado. A TC do Brasil oferece uma variedade de serviços, incluindo Service Desk, Field Service, NOC - Centro de Operações de Rede, Gerenciamento de Ativos de TI e Infraestrutura de Redes, para apoiar sua jornada rumo à excelência logística.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={logistica} width={"700px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <h1>Serviços TC do Brasil para logística</h1><br />


                    <div className="line">
                        <div className="boxline">
                            <FontAwesomeIcon icon={faServer} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Gestão de datacenters</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faUsersLine} size="2xl" style={{ color: "#005cfa", }} />
                            <h5>Equipes de NOC e SOC</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faCloud} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Cloud Gerenciada</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faPhoneVolume} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Service Desk</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faShield} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Cibersegurança</h5>

                        </div>
                    </div>

                </div>
            </div>



            
            <BtnContato/>

            <Footer />
        </>
    )
}

export default Logistica