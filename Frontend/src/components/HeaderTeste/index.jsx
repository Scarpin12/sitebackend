import React, { useEffect, useState } from "react"
import logo from '../../assets/logo.png';
import './headerteste.css';




const Header = () => {




  useEffect(() => {

  }, [])

  return (

    <>
      <div className="container">
        <div className="navegacao">
          <div className="logonav">
            <img src={logo} width={"70px"} alt="" />
          </div>
          <div className="listanav">
            <ul>
              <li> HOME 
              
              </li>
              <li>SOLUÇÕES</li>
              <li>SEGMENTOS</li>
              <li>TCLOUD - DATACENTER</li>
              <li>CONTATO</li>
              <li>BLOG T.I</li>
              <li>BLACK FRIDAY</li>

            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header