import React, { useEffect } from "react"

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import HeadbandAplicacoes from "../../../components/Headband/HeadbandAplicacoes"
import "./aplicacoes.css"
import hospedagem from "../../../assets/hospedagem.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import BtnContato from "../../../components/Contato"


const Aplicacoes = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandAplicacoes />

            <div className="container containerh3">
                <h1>Hospedagem de Aplicações</h1>

                <p>

                    Hospedar seus aplicativos com a TC do Brasil é uma decisão que coloca a qualidade e o desempenho no cerne da sua estratégia de TI. Existem inúmeras razões para escolher nossos serviços de hospedagem de aplicativos que destacam nossa excelência e diferenciação no mercado.<br/><br/>

                    Nossa prioridade número um é o desempenho. Nossos servidores de última geração são equipados com hardware de alto nível, garantindo tempos de resposta rápidos e uma experiência de usuário excepcional. Isso significa que seus aplicativos funcionarão de maneira eficaz, independentemente da carga ou complexidade.


                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Segurança, Suporte e Velocidade</h4>
                            <p>

                                A segurança é um pilar fundamental de nossa oferta. Investimos em medidas de proteção avançadas, incluindo firewalls, monitoramento constante e backups regulares. Isso assegura que seus dados e aplicativos estejam resguardados contra ameaças cibernéticas, permitindo que você confie na integridade de suas informações. Nossa equipe de suporte altamente qualificada está à sua disposição 24/7. Estamos comprometidos em fornecer a assistência necessária para manter seus aplicativos em pleno funcionamento, respondendo rapidamente a quaisquer questões ou problemas que possam surgir.<br/><br/>

                                A conectividade de alta velocidade é uma característica central de nossos serviços. Isso garante que seus aplicativos sejam acessados de forma rápida e eficiente, independentemente da localização dos usuários, proporcionando uma experiência excepcional. Além disso, nossa flexibilidade é uma grande vantagem. Nossos planos de hospedagem de aplicativos podem ser adaptados às necessidades específicas do seu negócio. E nossa infraestrutura é escalável, permitindo que você expanda ou ajuste recursos de acordo com o crescimento de sua presença online.<br/><br/>

                                Por fim, nossos datacenters de alta qualidade oferecem a confiabilidade necessária para garantir a disponibilidade contínua de seus aplicativos, minimizando qualquer tempo de inatividade não planejado.

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
                    <h1>A Parceria Ideal para o Sucesso Online: Hospede suas aplicações com a TC do Brasil</h1>
                    <p>
                        Hospedar seus aplicativos com a TC do Brasil significa escolher uma parceria que valoriza o desempenho, a segurança e a satisfação do cliente. Permita-nos cuidar da infraestrutura de TI para que você possa se concentrar no desenvolvimento e sucesso de seus aplicativos, com a confiança de que estão em boas mãos.

                        Não perca mais tempo; hospede seus aplicativos conosco e experimente a diferença que a TC do Brasil pode fazer para o sucesso de sua aplicação.


                    </p>
                </div>
            </div>

            <BtnContato/>

            <Footer />
        </>
    )
}

export default Aplicacoes