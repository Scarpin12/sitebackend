import React, { useEffect } from "react";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HeadbandEmpresa from "../../components/Headband/HeadbandEmpresa"
import './empresa.css';
import tctech from "../../assets/tctech.png"
import bitdefender from "../../assets/certificacoes/Bitdefender.jpeg"
import gold from "../../assets/certificacoes/gold.jpg"
import microsoft from "../../assets/certificacoes/Microsoft.jpeg"
import architect from "../../assets/certificacoes/sophos-architect.jpg"
import engineer from "../../assets/certificacoes/sophos-engineer.jpg"
import silver from "../../assets/certificacoes/Sophos-Silver-Partner.png"
import veeam from "../../assets/certificacoes/Veeam.jpeg"
import vm from "../../assets/certificacoes/VMware.jpeg"


const Empresa = () => {
    useEffect(() => {

        window.scrollTo(0, 0);


    }, []); // Use useEffect para executar a função após o carregamento da página

    return (
        <>
            <Header />
            <HeadbandEmpresa />

            <div id="sobre">



                <div className="container">

                    <h2>Sobre a TC do Brasil</h2>
                    <p>A TC do Brasil é uma empresa integradora e provedora de serviços de TI, fundada em 2008, com uma visão de tecnologia que visa inovar os conceitos e processos de nossos clientes, trazendo vantagens competitivas por meio do aproveitamento dos recursos e vantagens que a tecnologia pode oferecer há 15 anos. Somos uma empresa especializada em serviços e projetos de infraestrutura de tecnologia da informação e comunicação, atendemos a projetos e gerenciamos todo o ambiente tecnológico de nossos clientes. Nossa abordagem única combina expertise técnica com um profundo entendimento dos desafios e objetivos do seu setor.

                    </p>

                    <div className="row">
                        <div className="col-md-6 beneficios">
                            <p>
                                Nossos serviços gerenciados de TI oferecem uma gama completa de soluções, desde monitoramento e suporte proativo até a gestão completa de sua infraestrutura de TI.<br /><br />
                                Benefícios dos nossos serviços gerenciados de TI:<br /><br />

                                •	<b>Suporte especializado 24/7:</b> Nossa equipe dedicada está disponível para ajudar sempre que você precisar, garantindo um suporte confiável e responsivo a qualquer hora do dia.<br /><br />
                                •	<b>Monitoramento proativo:</b> Utilizamos tecnologias avançadas de monitoramento para identificar e resolver problemas antes mesmo que eles impactem suas operações, minimizando o tempo de inatividade e maximizando a eficiência.<br /><br />
                                •	<b>Segurança avançada:</b> Protegemos seus dados e informações valiosas com soluções robustas de segurança cibernética, garantindo a conformidade com as regulamentações aplicáveis e a tranquilidade dos seus clientes e parceiros.<br /><br />
                                •	<b>Escalabilidade e flexibilidade:</b> Nossos serviços são dimensionados de acordo com as necessidades do seu negócio, permitindo que você cresça e se adapte rapidamente às demandas do mercado, sem interrupções no suporte.<br /><br />
                                •	<b>Foco no seu core business:</b> Ao terceirizar suas necessidades de TI para nós, você pode direcionar seus recursos internos para as atividades essenciais e estratégicas, liberando sua equipe para se concentrar no crescimento e na inovação.


                            </p>

                        </div>
                        <div className="col-md-6">
                            <center> <img src={tctech} className="img-fluid" width={"400px"} alt="" />
                            </center>
                        </div>

                        <p>
                            A <b>HONESTIDADE, TRANSPARÊNCIA, COMPROMETIMENTO, PRÓ-ATIVIDADE, INTELIGÊNCIA e PARCERIA</b> regem a motivação de nossos colaboradores, onde buscamos ser sempre reconhecidos como o melhor dos fornecedores de nossos clientes, imbatíveis nas melhores ofertas de soluções de tecnologia.<br /><br />
                            Não importa o tamanho ou o setor da sua empresa, estamos prontos para ajudá-lo a alcançar seus objetivos de negócio por meio de soluções de TI sob medida e serviços gerenciados de excelência. Entre em contato conosco hoje mesmo e descubra como podemos impulsionar sua empresa para o sucesso por meio de nossos serviços gerenciados de TI confiáveis, eficientes e personalizados. Estamos ansiosos para embarcar nessa jornada tecnológica com você!

                        </p>
                    </div>
                </div>





                <div className="container">

                    <h2>Certificações </h2>

                    <div className="row">
                        <div className="col-md-3">
                            <center> <img src={bitdefender} className="img-fluid" width={"400px"} alt="" />
                            </center>
                        </div>
                        <div className="col-md-3">
                            <center> <img src={gold} className="img-fluid" width={"400px"} alt="" />
                            </center>
                        </div>
                        <div className="col-md-3">
                            <center> <img src={microsoft} className="img-fluid" width={"400px"} alt="" />
                            </center>
                        </div>
                        <div className="col-md-3">
                            <center> <img src={veeam} className="img-fluid" width={"400px"} alt="" />
                            </center>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <center> <img src={architect} className="img-fluid" width={"400px"} alt="" />
                            </center>
                        </div>
                        <div className="col-md-3">
                            <center> <img src={engineer} className="img-fluid" width={"400px"} alt="" />
                            </center>
                        </div>
                        <div className="col-md-3">
                            <center> <img src={silver} className="img-fluid" width={"400px"} alt="" />
                            </center>
                        </div>
                        <div className="col-md-3">
                            <center> <img src={vm} className="img-fluid" width={"400px"} alt="" />
                            </center>
                        </div>
                    </div>


                </div>

                

            </div>




            <Footer />

        </>

    )



}
export default Empresa