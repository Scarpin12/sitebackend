import React, { useEffect } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HeadbandSophos from "../../components/Headband/HeadbandSophos"
import "./sophos.css"



const Sophos = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />

            <HeadbandSophos />

            <div className="container">

            <div className="centro">
            <iframe title="site Sophos" src='https://www.sophos.com/pt-br/site-in-a-box?partner_referral_id=0013Z00001fSx7k&partner_name=SIBELL+DO+BRASIL+TECNOLOGIA+E+CONSULTORIA+EM+TI+LTDA' frameborder='0' style={{ width: "100%", height: "100%" }}></iframe>

            </div>
            
            </div>

            

            <Footer />
        </>
    )
}

export default Sophos