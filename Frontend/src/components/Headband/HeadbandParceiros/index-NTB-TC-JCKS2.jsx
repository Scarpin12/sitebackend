import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandParceiros = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Nossos parceiros</h1>
          <div className="box-p">
            <p>
              "Para oferecer as melhores soluções aos nossos clientes, contamos com parceiros fabricantes de softwares e hardware de abrangência global"
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

export default HeadbandParceiros


