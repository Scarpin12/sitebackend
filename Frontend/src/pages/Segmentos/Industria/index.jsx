import React, { useEffect } from "react"
import BtnContato from "../../../components/Contato"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import "./industria.css"
import industria from "../../../assets/industria.webp"
import HeadbandIndustria from "../../../components/Headband/HeadbandIndustria"


const Contato = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandIndustria />

            <div className="container containerh3">
                <h1>Soluções Customizadas para sua Indústria</h1>

                <p>
                    A sua empresa pode contar com a nossa expertise na jornada da Transformação Digital, aproveitando nossas soluções em cibersegurança e computação em nuvem, especialmente projetadas para atender às demandas da sua indústria ou fábrica. As tecnologias disponíveis possibilitam melhorias em diversos níveis, transformando processos de fabricação existentes, estabelecendo fluxos de informações integrados em toda a cadeia de valor e introduzindo novos serviços e modelos de negócios.


                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Preparando sua Empresa para a Indústria 4.0</h4>
                            <p>

                                A busca pelo pleno aproveitamento da Indústria 4.0 exige a implementação de novos serviços e soluções para garantir a continuidade e segurança dos processos. A automação de processos repetitivos, que crescem de volume devido ao aumento do compartilhamento de dados, é viabilizada por tecnologias como a Automação Robótica de Processos (RPA), resultando em simplificação de fluxos de trabalho, redução de custos, maior precisão e operações mais eficientes.<br/><br/>

                                A segurança cibernética é uma preocupação crítica, visto que regulamentações rígidas de proteção de dados estão vigentes em âmbito global. Nossos especialistas da Tecnocomp estão prontos para identificar as melhores soluções em arquiteturas Zero Trust, implementando as melhores práticas de defesa e segurança para infraestrutura crítica.<br/><br/>

                                Complementando sua jornada em direção à Indústria 4.0, desenvolvemos soluções em ambientes de nuvem nas principais infraestruturas globais, proporcionando um futuro mais seguro e eficiente. Vamos avançar juntos rumo a esse novo cenário.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={industria} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <div className="qualidade">
                        <h1>Potencialize sua empresa com os serviços gerenciados de TI</h1>
                        <p>
                            Nós da TC do Brasil estamos aptos a fornecer serviços e soluções que garantem a continuidade e segurança de todos os seus processos. Isso inclui a automação de tarefas repetitivas, que tendem a crescer devido ao compartilhamento crescente de dados. Através de tecnologias inovadoras, simplificamos fluxos de trabalho, reduzimos custos e agilizamos as operações. Nossa gama de serviços abrange desde Service Desk e Field Service até NOC - Network Operations Center, Gerenciamento de Ativos de TI e Infraestrutura de Redes. Estamos prontos para atender às necessidades específicas da sua indústria e ajudá-lo a alcançar eficiência e excelência operacional.<br /><br />


                        </p>
                    </div>
                </div>
            </div>




            <BtnContato/>
            <Footer />
        </>
    )
}

export default Contato