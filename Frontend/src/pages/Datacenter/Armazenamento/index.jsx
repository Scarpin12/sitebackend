import React, { useEffect } from "react"
import BtnContato from "../../../components/Contato"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import HeadbandArmazenamento from "../../../components/Headband/HeadbandArmazenamento"
import "./armazenamento.css"
import armazenamento from "../../../assets/armazenamento.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';

const Armazenamento = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandArmazenamento />

            <div className="container containerh3">
                <h1>Armazenamento de Dados</h1>

                <p>
                    Nosso Datacenter é uma escolha exemplar para o armazenamento de dados, oferecendo excelência em termos de segurança e desempenho. Com um compromisso inabalável com a proteção dos dados e uma infraestrutura de última geração, proporcionamos um ambiente ideal para guardar informações vitais para o seu negócio.


                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>A Segurança e Confiabilidade para Proteger Seus Dados</h4>
                            <p>

                                O aspecto mais notável do nosso Datacenter é a segurança. Investimos significativamente em sistemas de segurança avançados, que incluem vigilância 24/7, controle de acesso rigoroso e medidas contra ameaças cibernéticas. Isso garante que seus dados estejam protegidos de maneira incomparável contra qualquer risco potencial.<br /><br />

                                Além disso, nossa infraestrutura é altamente confiável, projetada para oferecer desempenho consistente e acesso rápido aos seus dados. Temos redundância de energia, sistemas de resfriamento eficazes e uma equipe altamente capacitada para garantir a operação contínua dos servidores.<br /><br />

                                Nossos servidores são atualizados regularmente e equipados com tecnologia de ponta, proporcionando a você a tranquilidade de que seus dados estão em boas mãos. Com uma infraestrutura confiável e medidas de segurança robustas, estamos preparados para atender às necessidades de armazenamento de dados de sua empresa de forma confiável e segura.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={armazenamento} width={"650px"} alt="" />


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
                        <FontAwesomeIcon icon={faGaugeHigh} size="2xl" style={{color: "#005eff",}} />
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
                        <FontAwesomeIcon icon={faMoneyBill} size="2xl" style={{color: "#005eff",}} />
                            <h5>Redução de Custos</h5>

                        </div>
                    </div>

                </div>
            </div>



            <div className="container">
                <div className="qualidade">
                    <h1>Priorize a Integridade, Segurança e Desempenho de Seus Dados </h1>
                    <p>
                        Ao escolher nosso Datacenter, você está fazendo a opção por um local onde a integridade, a segurança e o desempenho dos seus dados são prioridades absolutas. Deixe-nos cuidar do seu armazenamento de dados para que você possa se concentrar no crescimento e no sucesso do seu negócio."<br /><br />


                    </p>
                </div>
            </div>
            <BtnContato/>
            <Footer />
        </>
    )
}

export default Armazenamento