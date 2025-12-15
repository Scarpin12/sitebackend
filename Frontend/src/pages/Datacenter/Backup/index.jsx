import React, { useEffect } from "react"
import BtnContato from "../../../components/Contato"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import HeadbandBackup from "../../../components/Headband/HeadbandBackup"
import "./backup.css"
import offsite from "../../../assets/off-site.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';

const Backup = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandBackup />
            <div className="container containerh3">
                <h1>Backup Off-site</h1>

                <p>
                    A estratégia de backup off-site é uma parte essencial da gestão de dados corporativos, visando a garantir a segurança e disponibilidade das informações em cenários de falhas ou desastres imprevistos. Essa prática envolve a criação de cópias dos dados em uma instalação remota, desempenhando um papel crucial na proteção e recuperação de dados críticos.


                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Estratégias Essenciais para a Alta Disponibilidade de Informações</h4>
                            <p>

                                Uma das abordagens mais comuns para o backup off-site é a replicação remota de dados. Nesse método, as informações são copiadas em tempo real ou em intervalos programados e enviadas para uma localização remota por meio de serviços online. Isso resulta em uma sincronização constante entre o Data Center principal e o local de backup remoto, garantindo que qualquer atualização ou mudança nos dados seja refletida automaticamente no local de armazenamento remoto. Dessa forma, os dados mais recentes estão sempre prontamente disponíveis em caso de necessidade.<br/><br/>

                                Além disso, a replicação em nuvem, seja em nuvens públicas ou privadas, é outra opção valiosa para garantir a alta disponibilidade dos dados em situações de falha no Data Center principal. Essa abordagem oferece uma recuperação rápida e eficiente, permitindo que a empresa mantenha suas operações mesmo quando ocorre um problema no local principal de armazenamento.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={offsite} width={"650px"} alt="" />


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
                    <h1>Investindo em Estratégias de Backup Off-Site </h1>
                    <p>
                        Investir em estratégias de backup off-site é uma medida proativa que proporciona tranquilidade e segurança, assegurando que os dados corporativos essenciais estejam protegidos e acessíveis, independentemente de eventos inesperados. Essas abordagens podem ser personalizadas para atender às necessidades específicas da sua empresa, permitindo que você se concentre no crescimento e no sucesso do seu negócio, sabendo que seus dados estão devidamente resguardados.


                    </p>
                </div>
            </div>
            <BtnContato/>

            <Footer />
        </>
    )
}

export default Backup