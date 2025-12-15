import React, { useEffect } from "react"
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import HeadbandFieldService from "../../../../components/Headband/HeadbandFieldService"
import "./fieldserver.css"
import FieldService1 from "../../../../assets/FieldService.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import {faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import BtnContato from "../../../../components/Contato"




const FieldService = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandFieldService />

            <div className="container containerh3">
                <h1>Field Service TC do Brasil</h1>

                <p>O Field Service (ou serviço de campo) refere-se a atividades de suporte técnico que são executadas no local, no ambiente do cliente. Isso envolve o envio de técnicos e especialistas para o local onde o problema está ocorrendo, geralmente quando não é possível resolver o problema remotamente. O field service lida com questões mais complexas que exigem intervenção física ou configuração no local, como reparos de hardware, instalação de equipamentos, manutenção preventiva, entre outros. É comum em setores como tecnologia, telecomunicações, equipamentos médicos, entre outros.
                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>O projeto certo para sua empresa</h4>
                            <p>
                                Os projetos de Field Service da Tecnocomp são personalizados de acordo com as necessidades individuais de cada empresa. Oferecemos a flexibilidade de designar técnicos residentes, que fazem parte de nossa equipe interna, ou de operar sob demanda através de chamados avulsos ou franquia de chamados, que podem envolver tanto nossa equipe interna quanto parceiros credenciados.<br /><br />

                                Nossos clientes desfrutam de um acompanhamento em tempo real de suas operações. Além disso, fornecemos acesso a relatórios e dashboards que permitem a análise de métricas e o gerenciamento dos serviços prestados.<br /><br />

                                Os profissionais de Field Service da Tecnocomp são continuamente treinados, atualizados, avaliados e reconhecidos por seus excelentes resultados. Esse comprometimento resulta em uma baixa taxa de rotatividade. Para garantir a eficiência das operações em campo, contamos com uma equipe de suporte que cobre eventuais ausências, incluindo férias, e implementa uma gestão de conhecimento abrangente e treinamentos para minimizar qualquer impacto nas operações de nossos clientes.
                            </p>

                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={FieldService1} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

           

            <div className="diferenciais">
                <div className="container">
                    <h1>Nossos diferenciais</h1>
                    <p>Veja quais são os beneficios do Service Desk </p>

                    <div className="line">
                        <div className="boxline">
                        <FontAwesomeIcon icon={faMap} size="2xl" style={{color: "#005eff",}} />
                            <h5>Capilaridade nacional</h5>

                        </div>
                        <div className="boxline">
                        <FontAwesomeIcon icon={faChartSimple} size="2xl" style={{color: "#005eff",}} />
                            <h5>Cumprimento do SLAs</h5>

                        </div>
                        <div className="boxline">
                        <FontAwesomeIcon icon={faUser} size="2xl" style={{color: "#005eff",}} />
                            <h5>Analista alocados ou sob demanda</h5>

                        </div>
                        <div className="boxline">
                        <FontAwesomeIcon icon={faServer} size="2xl" style={{color: "#005eff",}} />
                            <h5>Backup com cobertura toral ou parcial de peças</h5>

                        </div>
                        <div className="boxline">
                        <FontAwesomeIcon icon={faHeadset} size="2xl" style={{color: "#005eff",}} />
                            <h5>Operação 24x7x365</h5>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="qualidade">
                    <h1>Qualidade e expertise técnica</h1>
                    <p>
                        A TC do Brasil se dedica a fornecer soluções e serviços sob medida que satisfazem integralmente as demandas dos clientes. Nossa abordagem é baseada na agilidade e responsabilidade, sustentada por tecnologias inovadoras, colaboradores altamente capacitados, parcerias sólidas com fornecedores e um sistema de gestão de qualidade focado na eficiência e constante aprimoramento. Como resultado desse comprometimento, nossa empresa conquistou diversas certificações e prêmios em reconhecimento à excelência de nossos serviços.
                    </p>
                </div>
            </div>

            <BtnContato/>
            <Footer />
        </>
    )
}

export default FieldService