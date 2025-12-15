import React, { useEffect } from "react"

import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import HeadbandOutsourcing from "../../../../components/Headband/HeadbandOutsourcing"
import "./outsourcing.css"
import outsourcing from "../../../../assets/outsuorcing.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import BtnContato from "../../../../components/Contato"


const Outsuorcing = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandOutsourcing />

            <div className="container containerh3">
                <h1>Outsourcing de Firewall</h1>

                <p>Ao adotar nosso serviço de outsourcing de firewall, oferecemos suporte e expertise para gerenciar e proteger sua infraestrutura de segurança digital. Além disso, garantimos a manutenção contínua dos firewalls, assegurando que sua empresa esteja sempre protegida contra ameaças cibernéticas e que sua segurança esteja sempre atualizada, evitando possíveis impactos decorrentes de vulnerabilidades ou desatualizações.



                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Otimize sua Segurança com o Outsourcing de Firewall da TC do Brasil</h4>
                            <p>
                                Você pode estar se perguntando como o Outsourcing de Firewall pode melhorar os processos internos da sua empresa. De forma resumida as empresas que utilizam o Outsourcing de Firewall ganham mais tempo para se concentrar no que realmente importa: o crescimento de seus negócios.<br /><br />

                                A maioria das empresas, não possui uma estrutura de TI totalmente adequada para lidar com contratempos de segurança. É aqui que o Outsourcing de Firewall entra em cena, com o principal objetivo de organizar e gerenciar todos os aspectos relacionados à segurança cibernética da sua empresa. Isso permite que sua equipe, em caso de necessidade, possa continuar operando com o apoio de um profissional especializado em Outsourcing de Firewall.<br /><br />

                                O Outsourcing de Firewall melhora a qualidade na gestão da segurança, influenciando diretamente no aprimoramento dos serviços de segurança cibernética. Com a infraestrutura preservada, as soluções de segurança tornam-se mais robustas e o serviço é administrado por especialistas qualificados.<br /><br />

                              

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={outsourcing} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <h1>Vantagens do outsourcing firewall</h1><br/>
                    

                    <div className="line">
                        <div className="boxline">
                        <FontAwesomeIcon icon={faBrain} size="2xl" style={{color: "#005eff",}} />
                            <h5>Expertise Especializada</h5>

                        </div>
                        <div className="boxline">
                        <FontAwesomeIcon icon={faBusinessTime} size="2xl" style={{color: "#005eff",}} />
                            <h5>Foco no Core Business</h5>

                        </div>
                        <div className="boxline">
                        <FontAwesomeIcon icon={faArrowRotateRight} size="2xl" style={{color: "#005eff",}} />
                            <h5>Atualização Contínua</h5>

                        </div>
                        <div className="boxline">
                        <FontAwesomeIcon icon={faDollarSign} size="2xl" style={{color: "#005eff",}} />
                            <h5>Redução de Custos</h5>

                        </div>
                        <div className="boxline">
                        <FontAwesomeIcon icon={faShuffle} size="2xl" style={{color: "#005eff",}} />
                            <h5>Flexibilidade</h5>

                        </div>
                    </div>

                </div>
            </div>


            

           
                <div className="container">
                    <div className="qualidade">
                        <h1>Por que Escolher o Outsourcing de Firewall?</h1>
                        <p>
                            

                            Profissionais terceirizados gerenciam os processos de segurança em um curto espaço de tempo, trazendo foco e expertise para esse serviço específico. Isso elimina a necessidade de despesas com recursos internos que podem se tornar subutilizados, dependendo do volume de demanda.<br/><br/>

                            É por essas razões que a Asuris desempenha um papel essencial no serviço de Outsourcing de Firewall, criando uma equipe interna atualizada e focada em fornecer soluções de segurança eficazes para a área de TI, entre outras vantagens mencionadas. Com o Outsourcing de Firewall da Asuris, sua empresa estará preparada para enfrentar os desafios de segurança cibernética de forma eficiente e focada em resultados.

                        </p>
                    </div>
                </div>
          
                <BtnContato/>

            <Footer />
        </>
    )
}

export default Outsuorcing