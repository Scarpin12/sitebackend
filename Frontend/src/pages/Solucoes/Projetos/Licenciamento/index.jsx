import React, { useEffect } from "react"
import BtnContato from "../../../../components/Contato"
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import "./licenciamento.css"
import HeadbandLicenciamento from "../../../../components/Headband/HeadbandLicenciamento"
import licenciamento from "../../../../assets/licenciamento.webp"


const Contato = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandLicenciamento />
            <div className="container containerh3">
                <h1>Licenciamento de software </h1>

                <p>Alguma vez você já baixou um software na internet de forma pirata e, passado algum tempo o mesmo parou de funcionar por falta de uma tal licença? Só acha inútil um licenciamento para esses programas quem ainda não sabe o que é licença de software e sua importância.<br/><br/>

                    Antes de sabermos a importância do licenciamento de programas, vamos primeiro entender o que é licença de software. Algo que não é nada misterioso, mas que precisa ser entendido completamente devido a sua importância.<br/><br/>

                    A licença de software é um documento – geralmente digital – para garantir o direito de acesso, execução e modificação de um programa. Ela também protege a empresa legalmente, com mecanismos que podem ser usados para punir fraudadores e violações dos termos da licença.
                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>A importancia do software licenciado</h4>
                            <p>
                                Alguns usuários residenciais e empresas acreditam, mesmo hoje, que a diferença entre um software licenciado e um pirata está apenas no fato de que o pirata é gratuito. E isso é um grande erro.<br/><br/>

                                Utilizar um software licenciado é importante pois o usuário está garantindo que possíveis falhas e vulnerabilidades serão atualizadas. Isso sem falar que ter uma licença adquirida para um software permite cobrar da empresa desenvolvedora o suporte adequado para o software sempre que necessário.<br/><br/>

                                Além disso, se está usando um software para sua empresa, ter a sua licença é indispensável para evitar infrações que podem ser consideradas como crime.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={licenciamento} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <div className="qualidade">
                        <h1>Softwares que licenciamos:</h1>
                        <p>
                            • Microsoft Windows Server<br />
                            • Windows 10<br />
                            • Microsoft Office<br />
                            • Microsoft SQL Server<br />
                            • VMware vSphere<br />
                            • Veeam<br />
                            • ArcServe<br />
                            • Kaspersky<br />
                            • McAfee<br />
                            • Autodesk<br />
                            • Adobe<br />
                            • BitDefender<br />


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