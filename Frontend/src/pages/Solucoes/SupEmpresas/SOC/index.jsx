import React, { useEffect } from "react"
import BtnContato from "../../../../components/Contato"
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import HeadbandSOC from "../../../../components/Headband/HeadbandSOC"
import "./soc.css"
import NOC from "../../../../assets//NOC.webp"


const SOC = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandSOC />

            <div className="container containerh3">
                <h1>SOC TC do Brasil</h1>

                <p>O Security Operations Center (SOC) opera 24 horas por dia, 7 dias por semana, 365 dias por ano. Ele é responsável pela integração de dados críticos de segurança, correlação de eventos para detectar incidentes, e retenção de dados para conformidade e investigação forense quando necessário.



                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4> SOC: Proteção Cibernética para seu Negócio</h4>
                            <p>
                                A TC do Brasil mantém seu próprio Security Operations Center (SOC), onde especialistas conduzem análises, gerenciamento, controle e monitoramento da segurança cibernética.<br /><br />

                                Nossos clientes do SOC TC do Brasil recebem serviços adaptados às suas necessidades, combinando ferramentas de segurança de ponta, processos eficazes de gerenciamento de incidentes e um sistema de gestão de serviços.<br /><br />

                                Com o suporte da tecnologia, o SOC TC do Brasil inicia ações de segurança e, se necessário, aciona, monitora e controla a atuação de equipes especializadas e provedores externos de acordo com os SLAs acordados.<br /><br />

                                Nosso SOC opera com um compromisso de nível de serviço mínimo de 99,99% e utiliza ferramentas preditivas alimentadas por inteligência artificial e automação para monitorar e gerenciar a segurança da sua organização, garantindo sua integridade e proteção em todos os momentos.



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
                        <h1>Protegendo seus ativos digitais com expertise</h1>
                        <p>
                            A TC do Brasil é sua parceira de confiança para garantir a segurança e a proteção de seus ativos digitais. Com nosso dedicado Security Operations Center (SOC), oferecemos soluções completas de segurança de dados, fornecendo uma abordagem abrangente para proteger todas as suas cargas de trabalho, independentemente de onde residam - seja em ambientes físicos ou na nuvem.<br/><br/>

                            <b>Monitoramento Constante:</b> Nosso SOC mantém uma vigilância constante sobre seus sistemas e redes, identificando e respondendo rapidamente a qualquer atividade suspeita ou ameaças cibernéticas em tempo real.<br/>

                            <b>Defesa Proativa:</b> Nossos especialistas em segurança implementam medidas proativas para proteger seus ativos digitais, garantindo que estejam sempre um passo à frente de possíveis ataques cibernéticos.<br/>

                            <b>Adaptação às Necessidades:</b> Reconhecemos que cada empresa tem necessidades exclusivas de segurança. Portanto, personalizamos nossos serviços para atender às suas especificações e garantir que suas operações permaneçam seguras e eficientes.<br/>

                            <b>Recuperação Confiável:</b> Em caso de incidente de segurança, nosso SOC se destaca na gestão de incidentes e na recuperação eficaz, minimizando danos e garantindo a continuidade dos negócios.<br/>

                            <b>Expertise de Alto Nível:</b> Com uma equipe de especialistas altamente qualificados em segurança cibernética, você pode confiar que seus ativos digitais estão nas mãos dos melhores profissionais do setor.<br/><br/>

                            No ambiente de ameaças cibernéticas em constante evolução, a TC do Brasil está preparada para enfrentar os desafios de segurança digital. Conte conosco para proteger o que é mais importante para o seu negócio, mantendo-o seguro e resiliente em um mundo digital em constante mudança


                        </p>
                    </div>
                </div>
            </div>


            <BtnContato/>
            <Footer />
        </>
    )
}

export default SOC