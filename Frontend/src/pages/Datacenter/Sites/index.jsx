import React, { useEffect } from "react"

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import HeadbandSites from "../../../components/Headband/HeadbandSites"
import "./sites.css"
import hospedagem from "../../../assets/hospedagem.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';
const Contato = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandSites />

            <div className="container containerh3">
                <h1>Hospedagem de Sites</h1>

                <p>
                    Hospedar seu site com a TC do Brasil é uma decisão estratégica que coloca a qualidade e a confiabilidade no centro da sua presença online. Nossa empresa se destaca por uma série de razões que tornam nossa hospedagem de sites uma escolha notável. Em primeiro lugar, nosso foco no desempenho é inquestionável. Nossos servidores de última geração são equipados com hardware de alto desempenho, garantindo tempos de carregamento rápidos e uma experiência de usuário excepcional para seus visitantes.


                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Segurança, Suporte e Velocidade</h4>
                            <p>

                                A segurança é uma preocupação constante. Investimos em medidas avançadas de proteção, incluindo firewalls, monitoramento contínuo e backups regulares, para manter seus dados seguros e protegidos contra ameaças cibernéticas.<br/><br/>

                                Nosso suporte é uma extensão de nossa dedicação. Nossa equipe de suporte altamente qualificada está disponível 24/7 para auxiliá-lo com quaisquer problemas ou perguntas que possam surgir. Estamos comprometidos em fornecer o suporte necessário para manter seu site em pleno funcionamento. A velocidade é fundamental. Oferecemos conectividade de alta velocidade para garantir que seu site seja acessado rapidamente em qualquer lugar do mundo, garantindo uma experiência excepcional para seus visitantes.<br/><br/>

                                Nossa flexibilidade é uma vantagem adicional. Nossos planos de hospedagem podem ser adaptados às necessidades específicas do seu site, e nossa infraestrutura é escalável para acompanhar o crescimento da sua presença online. Por fim, nossos datacenters de alta qualidade oferecem a confiabilidade necessária para garantir a disponibilidade contínua do seu site.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={hospedagem} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <h1>Vantagens de contar com nossa hospedagem</h1><br />


                    <div className="line">
                        <div className="boxline">
                            <FontAwesomeIcon icon={faShield} size="2xl" style={{ color: "#005eff", }} />

                            <h5>Segurança Avançada</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faGaugeHigh} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Desempenho Otimizado</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faExpand} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Escalabilidade:</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faPhoneVolume} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Suporte Especializado</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faMoneyBill} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Redução de Custos</h5>

                        </div>
                    </div>

                </div>
            </div>



            <div className="container">
                <div className="qualidade">
                    <h1>A Parceria Ideal para o Sucesso Online: Hospede seu Site com a TC do Brasil </h1>
                    <p>
                        Ao escolher a TC do Brasil como seu provedor de hospedagem, você está fazendo uma escolha que prioriza o desempenho, a segurança e a satisfação do cliente. Permita-nos gerenciar a sua presença online, liberando tempo e recursos para você se concentrar no crescimento e no êxito do seu negócio, com a confiança de que seu site está em mãos especializadas.<br /><br />

                        Não hesite mais. Hospede o seu site conosco e experimente o impacto positivo que a TC do Brasil pode trazer para o seu sucesso na internet.


                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contato