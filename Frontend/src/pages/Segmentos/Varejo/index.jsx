import React, { useEffect } from "react"
import BtnContato from "../../../components/Contato"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import "./varejo.css"
import varejo from "../../../assets/varejo.webp"
import HeadbandVarejo from "../../../components/Headband/HeadbandVarejo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';


const Contato = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandVarejo />
            <div className="container containerh3">
                <h1>Experiência no setor varejista</h1>

                <p>
                    Para o sucesso no segmento varejista atual, oferecer um serviço de excelência é essencial. Isso vai além da simples compra, envolvendo experiências únicas para os clientes, enriquecidas por tecnologias inovadoras. A TC do Brasil compreende as demandas específicas desse setor em constante evolução e disponibiliza um portfólio customizado de serviços para atender às suas necessidades.

                    Dentro desse contexto, o serviço de consultoria em TI da TC do Brasil auxilia o varejista na gestão de projetos, como a instalação de novas lojas, garantindo configurações adequadas e testes de conectividade. Além disso, oferecemos uma variedade de serviços, incluindo Service Desk, Field Service, NOC (Network Operations Center), IT Asset Management e Networking Infrastructure.



                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Soluções Personalizadas para o Varejo</h4>
                            <p>

                                Em nosso portfólio sob medida, oferecemos uma gama de serviços, como Consultoria de TI, Service Desk, Field Service e NOC - Centro de Operações de Rede, criados para atender às necessidades específicas do setor varejista.<br/><br/>

                                Desde a administração de projetos para a inauguração de novas lojas, incluindo configuração, testes de conectividade e gestão de ativos, até a implementação de um Service Desk com suporte telefônico e remoto de Nível 1, 2 e 3, juntamente com assistência presencial em âmbito nacional por meio do Field Service, e monitoramento 24/7 em tempo real de toda a infraestrutura de TI, estamos prontos para assegurar a melhor experiência de compra para seus clientes.<br/><br/>

                                Converse com nossos especialistas e descubra como nossas soluções podem alavancar suas vendas.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={varejo} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <h1>Serviços TC do Brasil para Varejo</h1><br />


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



            <div className="container">
                <div className="qualidade">
                    <h1>Tecnologia no Varejo</h1>
                    <p>
                        Essa segmentação do atendimento facilita as operações, permitindo que as empresas se concentrem na otimização de fatores individuais. Possuímos acesso direto aos principais fabricantes e fornecedores, com equipes certificadas para implementar soluções de forma rápida. A grande vantagem reside na análise individualizada de cada negócio por nossos especialistas, que têm uma visão ampla dos resultados almejados.

                        Atualmente, os clientes que visitam lojas físicas esperam mais do que uma simples compra. Marcas inovadoras investem em campanhas eficazes de retenção e fidelização, combinadas com tecnologias que proporcionam novas experiências e auxiliam nas vendas presenciais. Como resultado desse foco no cliente, o varejo tem apresentado um crescimento anual superior a 40% em comparação ao cenário pré-pandemia em março de 2020."


                    </p>
                </div>
            </div>

            <BtnContato/>
            <Footer />
        </>
    )
}

export default Contato