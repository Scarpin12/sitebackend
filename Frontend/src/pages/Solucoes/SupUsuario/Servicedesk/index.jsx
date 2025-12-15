import React, { useEffect } from "react"
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import HeadbandServiceDesk from "../../../../components/Headband/HeadbandServiceDesk"
import "./servicedesk.css"
import Servicedesk1 from "../../../../assets/serviceDesk.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import BtnContato from "../../../../components/Contato"



const ServiceDesk = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandServiceDesk />
            <div className="container containerh3">
                <h1>Service Desk TC do Brasil</h1>

                <p>O service desk também é responsável por fornecer suporte técnico aos usuários, mas vai além das funções do helpdesk. O service desk é um ponto único de contato para os clientes e usuários finais, gerenciando solicitações de suporte, problemas e incidentes. Além de lidar com questões técnicas, o service desk também trata de solicitações de serviços, como provisionamento de contas, acesso a recursos específicos e solicitação de novos serviços. O service desk é mais abrangente em termos de serviços e demandas atendidas.

                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Projeto e consultoria técnica</h4>
                            <p>
                                Para iniciar uma operação de Service Desk, a TC do Brasil realiza um abrangente projeto que engloba consultoria técnica especializada, com foco na definição de processos, ferramentas e recursos essenciais.<br /><br />

                                Nossa estrutura de Service Desk é equipada com uma ferramenta própria de ITSM, embora também tenhamos a flexibilidade de empregar a solução preferida pelo cliente. Esse gerenciamento permite uma administração eficiente de Incidentes, Requisições e Projetos, com um histórico notável de cumprimento de 100% dos SLA's acordados, assegurando alta qualidade percebida pelo usuário final. Descubra mais sobre nossos canais de contato disponíveis.<br /><br />


                                 - Telefone com acesso via VPN<br />
                                 - E-mail<br />
                                 - Portal/web<br />
                                 - Chat<br />
                                 - WhatsApp<br />
                                 - Teams<br />
                            </p>

                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={Servicedesk1} width={"650px"} alt="" />


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
                            <FontAwesomeIcon icon={faMap} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Capilaridade nacional</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faChartSimple} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Cumprimento do SLAs</h5>

                        </div>
                        <div className="boxline">
                        <FontAwesomeIcon icon={faNoteSticky} size="2xl" style={{color: "#005eff",}} />
                            <h5>Elaboração de relatórios</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faServer} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Gestão de backupss</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faHeadset} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Produtividade 24x7x365</h5>

                        </div>
                    </div>
                   
                </div>
            </div>


            <div className="container">
                <div className="qualidade">
                    <h1>Qualidade e expertise técnica</h1>
                    <p>
                    A TC do Brasil tem um compromisso sólido de fornecer soluções e serviços que abrangem integralmente as necessidades de seus clientes. Essa dedicação se traduz em agilidade e responsabilidade, impulsionadas por tecnologias inovadoras, capacitação constante de seus colaboradores e um sólido fortalecimento de parcerias com fornecedores. Além disso, mantemos um sistema de gestão de qualidade focado na busca contínua pela eficiência e aprimoramento de nossos serviços.
                    </p>
                </div>
            </div>

            <BtnContato/>


            <Footer />
        </>
    )
}

export default ServiceDesk