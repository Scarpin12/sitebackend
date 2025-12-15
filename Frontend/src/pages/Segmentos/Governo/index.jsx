import React, { useEffect } from "react"
import HeadbandGoverno from "../../../components/Headband/HeadbandGoverno"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import "./governo.css"
import governo from "../../../assets/governo.webp"
import BtnContato from "../../../components/Contato"


const Governo = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandGoverno />

            <div className="container containerh3">
                <h1>Tecnologia na gestão pública</h1>

                <p>
                    A transformação digital já é uma realidade em diversos setores e a gestão pública não fica de fora dessa evolução necessária. Órgãos governamentais, secretarias, prefeituras e outras entidades também devem investir nesse segmento para garantir a otimização dos serviços e evitar que se tornem obsoletos em um mundo cada vez mais conectado e tecnológico.



                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Transformação Digital no Setor Público</h4>
                            <p>

                                A implementação de tecnologias no setor público pode melhorar significativamente a forma como os atendimentos e serviços são prestados à população. Com a maioria das pessoas já conectadas, a utilização de recursos tecnológicos pode tornar os processos mais ágeis e eficientes. Essa modernização não beneficia apenas a administração pública, mas também a população em geral, que passa a desfrutar de serviços de melhor qualidade e a ver seus impostos sendo aplicados de maneira mais eficaz.<br/><br/>

                                Os ganhos da tecnologia na gestão pública são inúmeros, destacando-se a eficiência e produtividade. A automatização de processos e tarefas burocráticas possibilita a alocação de recursos de forma mais inteligente e a redução do tempo gasto em atividades manuais. Isso resulta em uma gestão mais eficiente, produtiva e focada no que realmente importa: atender às necessidades da população de forma ágil e precisa. A TC do Brasil oferece diversos serviços, como Service Desk, Field Service, NOC (Network Operations Center), IT Asset Management e Networking Infrastructure, para apoiar a gestão pública nessa jornada de transformação digital.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={governo} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <div className="qualidade">
                        <h1> A Revolução que Todos Precisam</h1>
                        <p>
                        Em resumo, a transformação digital no setor público é uma necessidade que traz benefícios tanto para a administração quanto para a sociedade, resultando em uma gestão mais eficiente, produtiva e alinhada com as demandas do mundo moderno.


                        </p>
                    </div>
                </div>
            </div>




            <BtnContato/>
            <Footer />
        </>
    )
}

export default Governo