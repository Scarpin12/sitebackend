import React, { useEffect } from "react"
import BtnContato from "../../../components/Contato"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import "./servfisicosvirtuais.css"
import HeadbandServfisicosvirtuais from "../../../components/Headband/HeadbandServfisicosvirtuais"
import servfisicosvirtuais from "../../../assets/servfisicosvirtuais.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';

const Servfisicosevirtuais = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandServfisicosvirtuais />

            <div className="container containerh3">
                <h1>Hospedagem de Servidores Físicos e Virtuais </h1>

                <p>
                    Nossa abordagem permite a escolha entre servidores físicos tradicionais e servidores virtuais baseados em nuvem, oferecendo a flexibilidade necessária para atender às demandas específicas de cada carga de trabalho ou aplicativo. Isso significa que você pode optar por servidores físicos quando precisa de desempenho dedicado e consistente, ou servidores virtuais para uma solução mais flexível e econômica.


                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Estratégias Essenciais para a Alta Disponibilidade de Informações</h4>
                            <p>

                                A escalabilidade é uma característica fundamental de nossos serviços. Você pode adicionar ou remover servidores conforme necessário, acompanhando o crescimento de sua empresa e adaptando a infraestrutura de acordo. Além disso, nossos serviços incluem redundância e alta disponibilidade para garantir que seus servidores estejam sempre disponíveis e minimizar o tempo de inatividade. Isso é fundamental para manter a continuidade dos negócios.
                                <br/><br/>
                                Nossa equipe altamente qualificada e o suporte 24/7 garantem que você tenha assistência prontamente em caso de problemas ou dúvidas, permitindo que você se concentre em suas atividades principais. A segurança dos servidores é uma prioridade. Implementamos medidas avançadas de proteção em nossos data centers, garantindo que seus dados estejam protegidos contra ameaças cibernéticas.
                                <br/><br/>
                                Por fim, nossos serviços de hospedagem de servidores físicos e virtuais podem proporcionar economia de custos, especialmente quando se opta por servidores virtuais, reduzindo os custos de hardware e manutenção.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={servfisicosvirtuais} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <h1>Vantagens de contar com nosso Datacenter</h1><br />


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
                    <h1>Personalização de Hospedagem para sua Tranquilidade Empresarial </h1>
                    <p>
                        Independentemente de suas necessidades específicas, a TC do Brasil oferece soluções de hospedagem que podem ser personalizadas para atender a sua infraestrutura de TI. Isso proporciona a tranquilidade de que seus servidores estão sendo cuidados, permitindo que você se concentre em seu sucesso empresarial.


                    </p>
                </div>
            </div>
            <BtnContato/>
            <Footer />
        </>
    )
}

export default Servfisicosevirtuais