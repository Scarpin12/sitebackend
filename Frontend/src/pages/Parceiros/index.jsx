import React, { useEffect } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HeadbandParceiros from "../../components/Headband/HeadbandParceiros"
import azure from "../../assets/parceiros/Azure.png"
import bit from "../../assets/parceiros/bitdefender1.png"
import dell from "../../assets/parceiros/dell.png"
import huawei from "../../assets/parceiros/huawei.png"
import lenovo from "../../assets/parceiros/lenovo1.png"
import microsoft from "../../assets/parceiros/microsoft1.png"
import sonicwall from "../../assets/parceiros/sonicwall.png"
import sophos from "../../assets/parceiros/sophos1.png"
import veeam from "../../assets/parceiros/veeam1.png"
import vmware from "../../assets/parceiros/wmware1.png"



const Clientes = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />

            <HeadbandParceiros />

            <div id="clientes">
                <div className="container">
                 <center>   <div className="row">
                        <div className="col-md-2">
                            <img src={azure} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="almaviva" />
                        </div>
                        <div className="col-md-2">
                            <img src={bit} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="almawave" />
                        </div>
                        <div className="col-md-2">
                            <img src={dell} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="ambev" />
                        </div>
                        <div className="col-md-2">
                            <img src={huawei} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="arw" />
                        </div>
                        <div className="col-md-2">
                            <img src={lenovo} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="arw" />
                        </div>
                        <div className="col-md-2">
                            <img src={microsoft} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="arw" />
                        </div>
                    </div></center>

                    <center>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={sonicwall} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="bradesco" />
                        </div>
                        <div className="col-md-3">
                            <img src={sophos} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="ca" />
                        </div>
                        <div className="col-md-3">
                            <img src={veeam} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="claro" />
                        </div>
                        <div className="col-md-3">
                            <img src={vmware} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="correios" />
                        </div>
                    </div>
                    </center>
                   
                    

                   

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Clientes