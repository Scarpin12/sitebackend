import React, { useEffect } from "react"
import './headband.css';

import { Link } from "react-router-dom"

const HeadbandOutsourcing = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Outsourcing de Firewall</h1>
          <div className="box-p">
            <p>
            "Operamos em todo o território nacional, oferecendo soluções de Firewall que atendem às suas demandas tecnológicas com rapidez e eficiência. Dessa forma, sua empresa pode direcionar sua atenção para o que realmente importa: seu desenvolvimento e expansão!"
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

export default HeadbandOutsourcing


