import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbanAreadetrabalho = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Hospedagem de área de trabalho remota</h1>
          <div className="box-p">
            <p>
            "A hospedagem de área de trabalho remota é um serviço que permite que os usuários acessem seu ambiente de trabalho, aplicativos e arquivos a partir de qualquer lugar com uma conexão à internet."
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

export default HeadbanAreadetrabalho


