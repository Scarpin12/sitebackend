import React, { useEffect } from "react"

import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import HeadbandServGerenciados from "../../../../components/Headband/HeadbandServGerenciados"
import servgerenciados from "../../../../assets/servgerenciados.webp"
import "./serv-gerenciados.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUsersGear } from '@fortawesome/free-solid-svg-icons';
import BtnContato from "../../../../components/Contato"

const Servgerenciados = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandServGerenciados />

            <div className="container containerh3">
                <h1>Serviços Gerenciados da TC do Brasil </h1>

                <p>Os serviços gerenciados da TC do Brasil são um suporte fundamental para suas operações de TI. Com monitoramento e supervisão contínuos, garantimos que os processos funcionem sem interrupções. Escolher nossos serviços gerenciados de TI permite que sua empresa direcione seus recursos para iniciativas essenciais do seu negócio principal.



                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Otimize sua Operação com Serviços Gerenciados de TI</h4>
                            <p>

                                Aprimore seus processos operacionais com os Serviços Gerenciados de TI da TC do Brasil. Nossa equipe monitora, supervisiona e assegura o funcionamento contínuo de seus sistemas de TI, 24 horas por dia. Ao optar por nossos serviços gerenciados, sua empresa pode direcionar seus recursos para iniciativas que impulsionam seu core business.<br /><br />

                                Oferecemos um pacote completo de serviços, incluindo monitoramento proativo, suporte ágil e manutenção preventiva. Nossa equipe de especialistas está pronta para atender às suas necessidades e garantir o desempenho máximo de sua infraestrutura de TI.<br /><br />

                                Conte com os Serviços Gerenciados de TI da TC do Brasil para manter sua operação eficiente e focada em seus objetivos estratégicos."


                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={servgerenciados} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <h1>Rotinas inteligentes, eficazes e ágeis.</h1><br />


                    <div className="line">
                        <div className="boxline">
                            <FontAwesomeIcon icon={faTv} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Suporte e monitoramento 24×7</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faUpload} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Otimizar os seus processos internos </h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faTriangleExclamation} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Identificar e sanar previamente problemas </h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Empresa atualizada às mudanças do mercado</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faUsersGear} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Somar à atuação do seu time interno</h5>

                        </div>
                    </div>

                </div>
            </div>





            <div className="container">
                <div className="qualidade">
                    <h1>Potencialize sua empresa com os serviços gerenciados de TI</h1>
                    <p>
                        Ao optar pelos Serviços Gerenciados de TI da TC do Brasil, sua empresa está garantindo um suporte especializado para a gestão de seus sistemas de tecnologia. Nossa equipe altamente qualificada e experiente está pronta para monitorar e gerenciar seus sistemas de TI de forma eficaz, garantindo um ambiente de TI estável e seguro. O monitoramento constante, disponível 24/7, permite identificar e resolver problemas de TI de forma proativa, reduzindo significativamente as interrupções e minimizando o tempo de inatividade.<br/><br/>

                        Além disso, nossos serviços incluem manutenção preventiva, o que ajuda a evitar problemas antes que eles afetem suas operações. Ao escolher nossos serviços gerenciados, sua empresa pode concentrar recursos e esforços no que realmente importa. Adaptamos nossos serviços de acordo com as necessidades específicas de sua empresa, garantindo um suporte eficiente e personalizado.<br/><br/>

                        
                    </p>
                </div>
            </div>


            <BtnContato/>

            <Footer />
        </>
    )
}

export default Servgerenciados