import React, { useEffect } from "react"
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import BtnContato from "../../../../components/Contato"
import HeadbandHelpDesk from "../../../../components/Headband/HeadbandHelpDesk"
import "./helpdesk.css"
import Servicedesk1 from "../../../../assets/serviceDesk.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';



const HelpDesk = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>

        
            <Header />
            <HeadbandHelpDesk />
            <div className="container containerh3">
                <h1>HelpDesk TC do Brasil</h1>

                <p>O helpdesk é uma função ou equipe responsável por fornecer suporte técnico básico e resolver problemas técnicos dos usuários de um sistema, software, hardware ou serviço. O helpdesk geralmente lida com questões mais simples e rotineiras, como problemas de login, erros de software, configurações básicas e perguntas frequentes. É um serviço centralizado que fornece assistência por telefone, e-mail ou chat.


                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Prontos para atender</h4>
                            <p>
                                A TC do Brasil se destaca no mercado de HelpDesk para TI ao oferecer soluções ágeis e de alta qualidade. Com uma equipe altamente qualificada e foco no atendimento ao cliente, a empresa garante respostas rápidas e eficazes para os desafios de suporte técnico.<br /><br /> A constante capacitação de sua equipe assegura que eles estejam atualizados com as últimas tecnologias, garantindo um suporte de alto nível. <br /><br />

                                Além disso, a TC do Brasil mantém um compromisso firme com a qualidade e a satisfação do cliente, medindo constantemente sua eficácia e buscando melhorias. Se você busca um parceiro confiável para suporte de TI, a TC do Brasil é a escolha ideal para manter suas operações funcionando sem interrupções.



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
                            <h5>Abrangência nacional</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faUsers} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Equipe Qualificada</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faBolt} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Atendimento Ágil</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faMicrochip} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Ferramentas e Tecnologia Avançadas</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faHeadset} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Disponibilidade 24x7x365</h5>

                        </div>
                    </div>

                </div>
            </div>


            <div className="container">
                <div className="qualidade">
                    <h1>Qualidade e expertise técnica</h1>
                    <p>
                        Com uma equipe altamente qualificada e experiente, capaz de solucionar desafios com eficiência, um serviço de helpdesk garante que os problemas de TI sejam resolvidos de forma ágil, minimizando interrupções e mantendo a produtividade. Isso é essencial para atender às demandas tecnológicas em constante evolução e manter a satisfação dos clientes em níveis elevados. A expertise técnica é o diferencial que permite oferecer suporte confiável e soluções eficazes, tornando o helpdesk um ativo valioso para empresas de todos os tamanhos.
                    </p>
                </div>
            </div>

            <BtnContato/>



            <Footer />
        </>
    )
}

export default HelpDesk