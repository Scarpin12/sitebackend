import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandSites = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Hospedagem de Sites</h1>
          <div className="box-p">
            <p>
            "Hospedar seu site com a TC do Brasil é uma decisão estratégica que coloca a qualidade e a confiabilidade no centro da sua presença online."
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

export default HeadbandSites


