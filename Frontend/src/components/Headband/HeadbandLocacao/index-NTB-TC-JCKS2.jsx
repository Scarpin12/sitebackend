import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandLocacao = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Locação de mão de obra especializada</h1>
          <div className="box-p">
            <p>
            "A locação e terceirização de mão-de-obra especializada é uma solução vantajosa para sua empresa que busca reduzir custos e otimizar a gestão de recursos humanos, especialmente quando se trata de profissionais altamente capacitados em áreas específicas, como a Tecnologia da Informação (TI)."
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

export default HeadbandLocacao


