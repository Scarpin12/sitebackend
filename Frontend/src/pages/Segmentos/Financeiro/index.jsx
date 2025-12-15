import React, { useEffect } from "react"
import BtnContato from "../../../components/Contato"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import "./financeiro.css"
import financeiro from "../../../assets/financeiro.webp"
import HeadbandFinanceiro from "../../../components/Headband/HeadbandFinanceiro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';

const Financeiro = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandFinanceiro />


            <div className="container containerh3">
                <h1>Capilaridade e Tecnologia no Financeiro</h1>

                <p>
                    O setor financeiro lida com um alto volume de processos repetitivos que demandam agilidade e confiabilidade. A capacidade de otimizar fluxos de trabalho de forma impecável é o que transforma as empresas em organizações mais lucrativas, flexíveis e ágeis, ao mesmo tempo em que envolve seus funcionários de maneira mais engajada.<br /><br />

                    Com a TC do Brasil, você pode transferir todos esses processos para a nuvem, contando com o suporte de nossa equipe de consultoria e projetos de Cloud Services. Estamos prontos para otimizar seus custos operacionais e garantir a continuidade de seus negócios com soluções personalizadas para os principais ambientes de infraestrutura em nuvem, com operações 24/7.


                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Acompanhando a Jornada da Transformação Digital</h4>
                            <p>

                                Na TC do Brasil, reconhecemos que todos os seus processos podem ser executados na nuvem. Nossas equipes de consultoria e projetos de Cloud Services estão preparadas para apoiar a sua jornada, resultando na otimização dos custos operacionais.<br /><br />

                                Com a nossa assistência, você pode garantir a continuidade dos negócios, aproveitando soluções adaptadas aos mais relevantes ambientes de infraestrutura em nuvem. Tudo isso é entregue com operações ininterruptas, 24 horas por dia, 7 dias por semana, 365 dias por ano.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={financeiro} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <h1>Soluções para o segmento Financeiro</h1><br />


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
                    <h1>Potencialize sua empresa com os serviços gerenciados de TI</h1>
                    <p>
                        Portanto, a auditoria em TI desempenha um papel crítico na governança de TI e no sucesso geral das organizações, ajudando a identificar e abordar possíveis riscos e aprimorar a segurança e o desempenho dos sistemas de informação. Ela fornece a garantia de que os ativos de TI estão alinhados com as estratégias de negócios e cumprem com as melhores práticas da indústria.<br /><br />


                    </p>
                </div>
            </div>

            <BtnContato/>
            <Footer />
        </>
    )
}

export default Financeiro