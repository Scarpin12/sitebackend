import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandFinanceiro = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Soluções para Finanças</h1>
          <div className="box-p">
            <p>
            "Melhore a eficiência e agilize suas operações financeiras com tecnologias de ponta. Descubra como a TC do Brasil pode assegurar a continuidade de seus negócios e a confiabilidade de seus processos."
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

export default HeadbandFinanceiro


