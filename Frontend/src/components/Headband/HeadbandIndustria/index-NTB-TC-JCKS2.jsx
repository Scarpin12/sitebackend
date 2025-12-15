import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandIndustria = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Soluções para Indústria</h1>
          <div className="box-p">
            <p>
              "
              A TC do Brasil está pronta para auxiliar sua empresa em sua jornada de Transformação Digital, oferecendo um amplo portfólio de soluções que abrangem automação e robotização com RPA, serviços de cibersegurança e soluções em nuvem."
            </p>
            <div className="botaoapp">
              <div className="a">
                <Link to="https://api.whatsapp.com/send/?phone=5511913155845&text&app_absent=0"> CONSULTE NOSSOS ESPECIALISTAS</Link>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default HeadbandIndustria


