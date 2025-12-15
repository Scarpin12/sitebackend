import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandLinkDedicado = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Links Dedicados</h1>
          <div className="box-p">
            <p>
            "Esse serviço oferece uma conexão à internet totalmente dedicada e garantida, resultando na mais elevada qualidade de acesso disponível para as empresas."
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

export default HeadbandLinkDedicado


