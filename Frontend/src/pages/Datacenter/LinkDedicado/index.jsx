import React, { useEffect } from "react"
import BtnContato from "../../../components/Contato"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import "./linkdedicado.css"
import HeadbandLinkDedicado from "../../../components/Headband/HeadbandLinkdedicado"
import linkdedicado from "../../../assets/linkdedicado.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleUnbalancedFlip } from '@fortawesome/free-solid-svg-icons';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';


const LinkDedicado = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandLinkDedicado />

            <div className="container containerh3">
                <h1>Links Dedicados</h1>

                <p>
                    À medida que a transformação digital se consolida como uma realidade nas empresas, a necessidade por serviços de internet de alta qualidade e desempenho tem crescido de forma constante. Nesse contexto, o Link Dedicado, também conhecido como Link IP, emerge como uma solução de extrema relevância. Esse serviço oferece uma conexão à internet totalmente dedicada e garantida, resultando na mais elevada qualidade de acesso disponível para as empresas.


                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Vantagens do Link Dedicado: Estabilidade, Velocidade e Segurança</h4>
                            <p>

                                O Link Dedicado se destaca por fornecer uma conexão exclusiva, o que significa que os recursos de banda larga são reservados exclusivamente para o uso da empresa. Isso elimina os problemas de compartilhamento de largura de banda com outros usuários, que podem ocorrer em conexões convencionais. Como resultado, a empresa desfruta de uma experiência de internet mais estável e de alto desempenho, que é fundamental para a eficiência de operações e a satisfação dos clientes.<br /><br />

                                Uma das principais vantagens do Link Dedicado é a garantia de velocidades de conexão consistentes. Enquanto em conexões comuns a velocidade pode variar de acordo com a demanda na rede, o Link Dedicado oferece velocidades constantes e previsíveis. Isso é fundamental para empresas que dependem de aplicações críticas que exigem um alto desempenho constante, como videoconferências, transferência de dados em grande escala e aplicativos baseados na nuvem.<br /><br />

                                Além disso, a segurança é uma consideração crucial no ambiente empresarial, e o Link Dedicado proporciona um nível extra de proteção. Ao não compartilhar a conexão com outros usuários, a empresa reduz os riscos de exposição a ameaças de segurança relacionadas a compartilhamento de rede. Isso é particularmente importante para empresas que lidam com informações sensíveis ou sigilosas.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={linkdedicado} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <h1>Vantagens de contar com Link Dedicado</h1><br />


                    <div className="line">
                        <div className="boxline">
                            <FontAwesomeIcon icon={faShield} size="2xl" style={{ color: "#005eff", }} />

                            <h5>Segurança Avançada</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faGaugeHigh} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Velocidade Consistente</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faExpand} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Eficiência Operacional</h5>

                        </div>
                        <div className="boxline">
                            <FontAwesomeIcon icon={faPhoneVolume} size="2xl" style={{ color: "#005eff", }} />
                            <h5>Suporte Especializado</h5>

                        </div>
                        <div className="boxline">
                        <FontAwesomeIcon icon={faScaleUnbalancedFlip} size="2xl" style={{color: "#005eff",}} />
                            <h5>Estabilidade</h5>

                        </div>
                    </div>

                </div>
            </div>



            <div className="container">
                <div className="qualidade">
                    <h1>Conectividade Confiável e Eficiente para Empresas </h1>
                    <p>
                        Em resumo, o Link Dedicado representa uma escolha sábia para empresas que buscam alta qualidade, desempenho consistente e segurança em sua conectividade à internet. Esse serviço oferece uma solução robusta para atender às crescentes demandas da transformação digital, garantindo que as empresas possam contar com uma conexão à internet confiável e eficiente para suas operações.


                    </p>
                </div>
            </div>
            <BtnContato/>
            <Footer />
        </>
    )
}

export default LinkDedicado