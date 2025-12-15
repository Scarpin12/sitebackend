import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandClientes = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Nossos Clientes</h1>
          <div className="box-p">
            <p>
              "Conheça alguns dos clientes atendidos pela TC do Brasil"
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

export default HeadbandClientes