import React, { useEffect } from "react"

import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"



const GerAtivos = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />

            <h1>COLETAR INFORMAÇÔES PARA MONTAR A PAGINA</h1>

            

            <Footer />
        </>
    )
}

export default GerAtivos