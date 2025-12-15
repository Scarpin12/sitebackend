import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandServiceDesk = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>ServiceDesk</h1>
          <div className="box-p">
            <p>
            "A TC do Brasil possui ampla reputação no mercado, destacando-se como uma das principais fornecedoras de serviços de Service Desk. Nossa atuação em todo o território nacional, excelência técnica e agilidade são apenas alguns dos diferenciais que oferecemos."
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

export default HeadbandServiceDesk


