import React, { useEffect } from "react"
import BtnContato from "../../../../components/Contato"
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import HeadbandNOC from "../../../../components/Headband/HeadbandNOC"
import "./noc.css"
import NOC from "../../../../assets//NOC.webp"


const Noc = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandNOC />

            <div className="container containerh3">
                <h1>NOC TC do Brasil</h1>

                <p>Network Operations Center, nos operamos com um nível de serviço mínimo de 99,99% e usa ferramentas preditivas apoiadas por inteligência artificial e robotização para monitorar e gerenciar sua rede para garantir sua integridade e segurança em todos os momentos.



                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Agilidade para o seu negócio</h4>
                            <p>
                                A TC do Brasil possui seu próprio Centro de Operações de Rede (NOC), onde especialistas conduzem análises, gerenciamento, controle e monitoramento das comunicações e conexões de rede.<br /><br />

                                Nossos clientes do NOC TC do Brasil recebem serviços adaptados às suas necessidades, combinando ferramentas de monitoramento de ponta, processos eficazes de Gerenciamento de Eventos e Incidentes e um sistema de gestão de serviços.<br /><br />

                                Com o suporte da tecnologia, o NOC TC do Brasil inicia ações de suporte e, se necessário, aciona, monitora e controla a atuação de equipes especializadas e provedores externos de acordo com os SLAs acordados.<br /><br />

                                Nosso NOC opera com um compromisso de nível de serviço mínimo de 99,99% e utiliza ferramentas preditivas impulsionadas por inteligência artificial e automação para monitorar e gerenciar sua rede, garantindo sua integridade e segurança em todos os momentos.



                            </p>

                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={NOC} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>





            <div className="diferenciais">
                <div className="container">
                    <div className="qualidade">
                        <h1>Operação ágil</h1>
                        <p>
                            Nossa equipe desempenha o papel de solucionador de incidentes ou despachante, ativando as equipes de especialistas dos "Grupos Solucionadores" de acordo com um escalonamento predefinido.<br /><br />

                            Realizamos o acompanhamento de todo o ciclo de vida de eventos e tickets, detectando desvios de comportamento, respondendo a alarmes de incêndio e monitorando sensores ambientais. Além disso, nossa equipe gerencia recursos e serviços de servidores, garantindo o controle de métricas e o cumprimento de SLAs previamente estabelecidos.
                        </p>
                    </div>
                </div>
            </div>



            <BtnContato/>
            <Footer />
        </>
    )
}

export default Noc