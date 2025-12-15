import React, { useEffect } from "react"
import BtnContato from "../../../components/Contato"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import HeadbanAreadetrabalho from "../../../components/Headband/HeadbandAreadetrabalho"
import "./areadetrabalho.css"
import areadetrabalho from "../../../assets/areadetrabalho.webp"
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
            <HeadbanAreadetrabalho />

            <div className="container containerh3">
                <h1>Hospedagem de área de trabalho remota</h1>

                <p>

                    A hospedagem de área de trabalho remota com a TC do Brasil é uma escolha estratégica que combina excelência e eficiência, tornando sua experiência de trabalho mais flexível e produtiva. Existem diversas razões pelas quais nossos serviços se destacam, ressaltando o motivo pelo qual você deve optar por nós como seu provedor de hospedagem de área de trabalho remota.


                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Experiência de área de trabalho remota TC do Brasil</h4>
                            <p>

                                Em primeiro lugar, nossa infraestrutura de servidores é de última geração. Equipada com hardware de alto desempenho e mantida com cuidado constante, nossos servidores oferecem uma experiência de área de trabalho remota ágil e responsiva. Isso garante que você possa acessar seus aplicativos e arquivos com rapidez, independentemente de sua localização ou dispositivo.<br/><br/>

                                A segurança é uma prioridade central em nossos serviços. Investimos em medidas avançadas de proteção, incluindo firewalls, monitoramento constante e backups regulares. Isso significa que seus dados e informações comerciais estão seguros contra ameaças cibernéticas, proporcionando a tranquilidade necessária para conduzir seus negócios.<br/><br/>

                                Nossa equipe de suporte altamente qualificada está disponível 24/7 para auxiliá-lo em quaisquer questões ou problemas que possam surgir. Estamos comprometidos em fornecer o suporte necessário para garantir que sua área de trabalho remota funcione sem interrupções, para que você possa manter sua produtividade.

                                A conectividade de alta velocidade é uma característica fundamental de nossos serviços. Isso significa que você pode acessar sua área de trabalho remota de forma eficiente, independentemente de sua localização, garantindo que suas operações comerciais ocorram sem problemas.

                                

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={areadetrabalho} width={"650px"} alt="" />


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
                    <h1>Hospede sua área de trabalho remota com a TC do Brasil</h1>
                    <p>
                        Ao escolher a TC do Brasil como seu provedor de hospedagem de área de trabalho remota, você está fazendo uma parceria que valoriza o desempenho, a segurança e a satisfação do cliente. Deixe-nos cuidar da infraestrutura de área de trabalho remota para que você possa se concentrar no crescimento e no sucesso de seus negócios, sabendo que sua presença online está em boas mãos.<br /><br />

                        Não perca mais tempo; hospede sua área de trabalho remota conosco e experimente a diferença que a TC do Brasil pode fazer para a produtividade e eficiência de sua empresa.


                    </p>
                </div>
            </div>
            <BtnContato/>
            <Footer />
        </>
    )
}

export default Contato