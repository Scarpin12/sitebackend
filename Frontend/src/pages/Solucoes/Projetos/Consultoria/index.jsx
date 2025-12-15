import React, { useEffect } from "react"
import BtnContato from "../../../../components/Contato"
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import HeadbandConsultoria from "../../../../components/Headband/HeadbandConsultoria"
import consultoria from "../../../../assets/consultoria.webp"



const Consultoria = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandConsultoria />

            <div className="container containerh3">
                <h1>Consultoria </h1>

                <p>Fornecemos uma análise completa e profunda da sua operação de TI
                    A Tecnologia da Informação é uma área que tem grande valor nas empresas atualmente. Por isso, muitas companhias estão investindo em TI, com o objetivo de otimizar processos internos, para melhor atender seus clientes e gerar mais receita. A TC do Brasil é especializada neste setor conta com profissionais especializados em vários setores do âmbito da tecnologia, fato que garante um atendimento abrangente, contemplando inúmeras soluções.




                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Consultoria de TI para empresas</h4>
                            <p>


                                A consultoria em segurança da informação desempenha um papel crucial na eficácia operacional de sua empresa. Além de implementar soluções de segurança, nosso serviço é projetado para prever ameaças, salvaguardar dados e garantir a proteção abrangente de sua infraestrutura.<br/><br/>

                                Somos líderes na prestação de serviços de segurança abrangentes, desde consultoria especializada em segurança da informação até operações totalmente gerenciadas. Os benefícios incluem proteção de dados, aprimoramento do atendimento ao cliente e mitigação de riscos.<br/><br/>

                                Nossa abordagem começa com uma análise abrangente de seu ambiente, compreendendo infraestrutura, aplicativos e processos, juntamente com o histórico de incidentes e conformidade regulatória. Identificamos vulnerabilidades e riscos para planejar ações que aprimoram a segurança da informação, garantindo que sua empresa opere com eficiência e agilidade.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={consultoria} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <div className="qualidade">
                        <h1>Eleve sua operação de TI ao próximo nível.</h1>
                        <p>
                        Nossa consultoria, baseada em casos reais de sucesso, acelera a modernização, transformação de processos e inovação, gerando benefícios práticos, redução de custos operacionais e maior agilidade na gestão de TI. Proporcionamos diagnósticos para otimizar a infraestrutura existente, identificando oportunidades de melhoria e ações para alcançar resultados superiores.<br /><br />


                        </p>
                    </div>
                </div>
            </div>

            <BtnContato/>

            <Footer />
        </>
    )
}

export default Consultoria