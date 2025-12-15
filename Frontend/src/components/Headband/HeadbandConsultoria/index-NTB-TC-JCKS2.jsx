import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandConsultoria = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Consultoria</h1>
          <div className="box-p">
            <p>
              "A consultoria em TI é um serviço fundamental para otimizar a infraestrutura tecnológica das empresas, identificando soluções inovadoras e estratégias para melhorar a eficiência operacional"
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

export default HeadbandConsultoria


