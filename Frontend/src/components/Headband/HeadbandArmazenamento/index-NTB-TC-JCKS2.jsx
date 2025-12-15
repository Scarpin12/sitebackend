import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandArmazenamento = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Armazenamento de Dados</h1>
          <div className="box-p">
            <p>
            "A TC do Brasil disponibiliza servidores dedicados exclusivamente para as necessidades da sua empresa. Aproveite a segurança e desempenho excepcionais do hardware de qualidade Enterprise para desenvolver seus projetos com confiança."
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

export default HeadbandArmazenamento


