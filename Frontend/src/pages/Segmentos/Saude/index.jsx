import React, { useEffect } from "react"
import BtnContato from "../../../components/Contato"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import "./saude.css"
import saude from "../../../assets/saude.webp"
import HeadbandSaude from "../../../components/Headband/HeadbandSaude"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';

const Saude = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandSaude />

            <div className="container containerh3">
                <h1>Saúde</h1>

                <p>
                    A TC do Brasil, ao oferecer serviços como Service Desk, Field Service, NOC - Network Operations Center, IT Asset Management e Networking Infrastructure, desempenha um papel fundamental na transformação digital do setor de saúde. A adoção de soluções digitais na área da saúde traz diversos benefícios, Nós estamos preparados para prover suporte e infraestrutura confiável para garantir o sucesso dessas inovações. Sempre com eficiente e agilidade sendo essencial para atender às demandas de suporte técnico dos profissionais de saúde e garantir a continuidade das operações. Isso ajuda a evitar nos serviços e permite uma resposta rápida a problemas e dúvidas dos usuários



                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Serviços para Garantir Disponibilidade Total no Setor de Saúde</h4>
                            <p>

                                Oferecemos uma gama de serviços que asseguram disponibilidade contínua para o setor de Saúde. Com nosso Service Desk, proporcionamos suporte telefônico e remoto 24 horas por dia, 7 dias por semana, para todos os usuários. Nossa equipe de Field Service, composta por técnicos especializados em todo o território nacional, está pronta para fornecer suporte abrangente, apoiada por uma vasta rede de parcerias.<br /><br />

                                O NOC opera 24/7 para monitorar o data center, produtos de alta criticidade, telefonia, links de dados e ativos de redes, todos gerenciados pela solução de IT Asset Management. Além disso, nosso serviço de Networking Infrastructure garante a implementação de cabeamento estruturado seguro, que compartilha dados por meio de redes de fibra ótica.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={saude} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <h1>Serviços TC do Brasil para Saúde</h1><br />


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
                    <h1>Transformação Digital no Setor de Saúde</h1>
                    <p>
                        O setor de Saúde está em constante evolução, adotando inovações digitais que têm o potencial de reduzir desigualdades e melhorar a qualidade de vida de inúmeros indivíduos. Essa revolução digital abrange uma variedade de avanços, como telemedicina, análise de exames com Inteligência Artificial, e prontuário eletrônico, entre outros. Essas inovações demandam o compartilhamento e a análise de dados em tempo real, destacando a necessidade de uma infraestrutura de TI confiável e sólida para dar suporte a esses processos.


                    </p>
                </div>
            </div>

            <BtnContato/>

            <Footer />
        </>
    )
}

export default Saude