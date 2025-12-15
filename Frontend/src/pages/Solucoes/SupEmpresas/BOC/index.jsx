import React, { useEffect } from "react"
import BtnContato from "../../../../components/Contato"
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import HeadbandBOC from "../../../../components/Headband/HeadbandBOC"

import "./boc.css"
import NOC from "../../../../assets//NOC.webp"

const BOC = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandBOC />
            <div className="container containerh3">
                <h1>BOC TC do Brasil</h1>

                <p>O Backup Operations Center (BOC) é a espinha dorsal da segurança de seus dados. Com um compromisso inabalável com a integridade e disponibilidade, operamos com um nível de serviço mínimo de 99,99%. Além disso, nossa abordagem inclui ferramentas preditivas suportadas por inteligência artificial e automação para garantir que seus backups estejam sempre seguros e acessíveis. Sua tranquilidade é nossa prioridade.



                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>Segurança e Resiliência com o Backup Operations Center</h4>
                            <p>
                                O Backup Operations Center (BOC) é a salvaguarda essencial para seus dados. Nossa equipe de especialistas em BOC é dedicada a oferecer a mais alta qualidade em proteção de dados e recuperação de informações. Com um compromisso inabalável com a segurança, operamos com um nível de serviço mínimo de 99,99%.<br /><br />

                                Usamos tecnologias avançadas, incluindo ferramentas preditivas impulsionadas por inteligência artificial e automação para monitorar, gerenciar e garantir a integridade e disponibilidade de seus backups em todos os momentos. Sua tranquilidade é nossa prioridade.



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
                        <h1>Razões para escolher o BOC da TC do Brasil</h1>
                        <p>
                            Em um mundo cada vez mais digital, a segurança e a disponibilidade de dados são fundamentais para qualquer empresa. O Backup Operations Center (BOC) da TC do Brasil é a escolha inteligente para garantir a proteção, resiliência e a recuperação de informações essenciais. Aqui estão algumas razões poderosas para contar com nossos serviços de BOC:<br /><br />

                             <b>Segurança Inabalável:</b> Com um compromisso com um nível de serviço mínimo de 99,99%, o BOC da TC do Brasil utiliza tecnologias de ponta, incluindo inteligência artificial e automação, para garantir a segurança de seus dados e backups em todos os momentos.<br />

                             <b>Proteção contra Perdas:</b> Nossos especialistas dedicados mantêm seus dados protegidos contra perdas acidentais, falhas de hardware ou ameaças cibernéticas. Você nunca terá que se preocupar com a perda de informações vitais.<br />

                             <b>Rápida Recuperação:</b> Em caso de desastres ou situações inesperadas, o BOC da TC do Brasil permite uma recuperação rápida e eficaz, minimizando o tempo de inatividade e os impactos nos negócios.<br />

                             <b>Atendimento Personalizado:</b> Nossos serviços de BOC são adaptados às necessidades específicas da sua empresa, oferecendo soluções sob medida que se encaixam perfeitamente no seu ambiente.<br />

                             <b>Tranquilidade Garantida:</b> Com a TC do Brasil, você pode se concentrar no crescimento do seu negócio, sabendo que seus dados estão em boas mãos e que você tem um parceiro confiável para qualquer eventualidade.<br /><br />

                            Em resumo, o Backup Operations Center da TC do Brasil é mais do que uma solução de backup; é a garantia de que seus dados mais críticos estão sempre protegidos e prontos para qualquer situação. Sua empresa merece a segurança e tranquilidade que oferecemos.
                        </p>
                    </div>
                </div>
            </div>


            <BtnContato/>
            <Footer />
        </>
    )
}

export default BOC