import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandSaude = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Soluções para a área da Saúde</h1>
          <div className="box-p">
            <p>
              "A TC do Brasil é especializada em fornecer soluções de tecnologia da informação e comunicação de ponta para o setor de Saúde."
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

export default HeadbandSaude


