import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import isConnected from '../../utils/isConnected'
import * as S from './style'
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'
export default function Header({ clickNotification }) {
  const [late, setLate] = useState()

  async function lateVerify() {
    api.get(`/task/filter/late/${isConnected}`).then(response => {
      if (response.data.length == 0) {
      } else {
        setLate(response.data.length)
      }
    })
  }
  useEffect(() => {
    lateVerify()
  }, [])

  async function Logout() {
    localStorage.removeItem('@todo/macaddress')
    window.location.reload()
  }
  return (
    <S.Container>
      <header>
        <img src={logo} alt="" />
        <nav>
         
        

          {isConnected ? (
            <>
              <Link to="/">Inicio</Link>
              <span className="divider" />
            </>
          ) : (
            ''
          )}

          {!isConnected ? (
         ''
          ) : (
            <>
  <Link to="/task">Nova Tarefa</Link>
  <span className="divider" />
            <button type="button" onClick={Logout} className="sair">
              Sair
            </button>
            </>
          )}
          {late && (
            <>
              <span className="divider" />
              <button
                type="button"
                id="notification"
                onClick={clickNotification}
              >
                <img src={bell} alt="notificacao" className="not" />
                <span>{late}</span>
              </button>
            </>
          )}
        </nav>
      </header>
    </S.Container>
  )
}
