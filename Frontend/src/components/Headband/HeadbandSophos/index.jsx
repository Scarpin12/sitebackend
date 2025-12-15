import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandSophos = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Parceiro Sophos</h1>
          <div className="box-p">
            <p>
              "Para oferecer as melhores soluções aos nossos clientes, contamos com a Sophos"
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

export default HeadbandSophos


