import React, { useEffect } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HeadbandClientes from "../../components/Headband/HeadbandClientes"
import almaviva from "../../assets/clients/almaviva1.png"
import almawave from "../../assets/clients/almawave1.png"
import ambev from "../../assets/clients/ambev1.png"
import arw from "../../assets/clients/arw1.png"
import bradesco from "../../assets/clients/bradesco1.png"
import ca from "../../assets/clients/ca1.png"
import claro from "../../assets/clients/claro1.png"
import correios from "../../assets/clients/correios1.png"
import dataprev from "../../assets/clients/dataprev1.png"
import enel from "../../assets/clients/enel1.png"
import gafisa from "../../assets/clients/gafisa1.png"
import lbs from "../../assets/clients/lbs1.png"
import oetker from "../../assets/clients/oetker1.png"
import pelicano from "../../assets/clients/pelicano1.png"
import prix from "../../assets/clients/prix1.png"
import senai from "../../assets/clients/senai1.png"
import sesi from "../../assets/clients/sesi1.png"
import uniban from "../../assets/clients/uniban1.png"
import vale from "../../assets/clients/vale1.png"
import zedelivery from "../../assets/clients/zéDelivery1.png"



const Clientes = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />

            <HeadbandClientes />

            <div id="clientes">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={almaviva} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="almaviva" />
                         </div>
                        <div className="col-md-3">
                        <img src={almawave} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="almawave" />
                        </div>
                        <div className="col-md-3">
                        <img src={ambev} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="ambev" />
                        </div>
                        <div className="col-md-3">
                        <img src={arw} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="arw" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                        <img src={bradesco} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="bradesco" />
                        </div>
                        <div className="col-md-3">
                        <img src={ca} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="ca" />
                        </div>
                        <div className="col-md-3">
                        <img src={claro} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="claro" />
                        </div>
                        <div className="col-md-3">
                        <img src={correios} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="correios" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <img src={dataprev} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="dataprev" />
                        </div>
                        <div className="col-md-3">
                        <img src={enel} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="enel" />
                        </div>
                        <div className="col-md-3">
                        <img src={gafisa} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="gafisa" />
                        </div>
                        <div className="col-md-3">
                        <img src={lbs} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="lbs" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <img src={oetker} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="oetker" />
                        </div>
                        <div className="col-md-3">
                        <img src={pelicano} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="pelicano" />
                        </div>
                        <div className="col-md-3">
                        <img src={prix} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="prix" />
                        </div>
                        <div className="col-md-3">
                        <img src={senai} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="senai" />
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-md-3">
                        <img src={sesi} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="sesi" />
                        </div>
                        <div className="col-md-3">
                        <img src={uniban} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="uniban" />
                        </div>
                        <div className="col-md-3">
                        <img src={vale} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="vale" />
                        </div>
                        <div className="col-md-3">
                        <img src={zedelivery} width={"200px"} className="img-fluid animate__animated animate__bounceInUp" alt="zedelivery" />
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Clientes