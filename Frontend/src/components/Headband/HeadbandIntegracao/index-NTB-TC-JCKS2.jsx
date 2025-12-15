import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandIntegracao = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Integração de Aplicativos e API's</h1>
          <div className="box-p">
            <p>
            "Na era digital, a busca constante por inovação é um elemento essencial, e a automação desempenha um papel fundamental na melhoria da eficiência, produtividade e experiência do cliente nas empresas."
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

export default HeadbandIntegracao


