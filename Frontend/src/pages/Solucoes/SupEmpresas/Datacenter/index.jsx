import React, { useEffect } from "react"

import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import HeadbandDataCenter from "../../../../components/Headband/HeadbandDataCenter"
import "./datacenter.css"
import Servidores from "../../../../assets/servidores.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Contato = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandDataCenter />


            <div className="container containerh3">
                <h1> Gestão de Datacenters</h1>

                <p>Possuímos ampla experiência na administração de Datacenters para empresas em todo o Brasil, atendendo às necessidades de armazenamento de dados e servidores. Isso assegura o mais alto desempenho para suas informações e sistemas, proporcionando total confiabilidade.


                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Como funciona e como podemos te ajudar!</h4>
                            <p>
                                Na área de Tecnologia da Informação, os datacenters desempenham um papel fundamental. Eles são projetados para dar suporte a uma ampla gama de aplicativos e atividades de negócios essenciais, incluindo e-mail, compartilhamento de arquivos, aplicativos de produtividade, ferramentas de CRM, sistemas de gestão empresarial (ERP), bancos de dados e muito mais.<br /><br />

                                Muitas empresas operam sistemas que não podem sofrer interrupções, pois processam grandes volumes de informações críticas. É vital que esses dados estejam sempre disponíveis para que toda a organização possa funcionar de maneira eficaz. Nesse contexto, a TC do Brasil se destaca ao garantir a segurança e redundância dos dados e serviços críticos em seu data center.<br /><br />

                                Isso significa que, mesmo em situações adversas, como falhas de hardware ou desastres naturais, os dados da sua empresa estão protegidos e disponíveis. A abordagem da Brain assegura a continuidade dos negócios e oferece tranquilidade, sabendo que seus ativos digitais estão em boas mãos.



                            </p>

                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={Servidores} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>



            <div className="diferenciais">
                <div className="container">
                    <h1>Soluções para Datacenters</h1><br/>


                    <div className="line">
                        <div className="boxline">
                            <FontAwesomeIcon icon={faServer} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Gestão e recursos de portais e nuvem</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faGlobe} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Gestão de plataformas de virtualização</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faSitemap} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Gestão de sistemas operacionais</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faUsersGear} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Gestão de gerenciadores de banco de dados</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faDatabase} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Gestão de armazenamento e backup de dados</h5>

                        </div>
                    </div>

                </div>
            </div>


            <div className="container">
                <div className="qualidade">
                    <h1>Qualidade e expertise técnica</h1>
                    <p>
                        A TC do Brasil disponibiliza uma equipe altamente especializada para oferecer suporte a redes com e sem fio. Nossos profissionais de gerenciamento de redes estão encarregados de manter o funcionamento ideal dos dispositivos que asseguram o fluxo de dados, imagens e comunicações por voz, desde o data center até as estações de trabalho (DC LAN, WAN, CAMPUS LAN, W-LAN).<br/><br/>

                        No serviço de gerenciamento de redes, nossos analistas trabalham em estreita colaboração com a equipe de engenharia que projeta, implementa e mantém a infraestrutura necessária para a transmissão de dados, seja por meio de cabeamento estruturado metálico ou óptico. Dessa forma, garantimos um ambiente de rede eficaz e confiável em toda a sua extensão.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contato