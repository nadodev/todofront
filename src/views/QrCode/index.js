import React, { useState } from 'react'
import * as S from './style'
import { Redirect } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Qr from 'qrcode.react'
import { toast } from 'react-toastify'
export default function QrCode() {
  const [mac, setMac] = useState();
  const [redirectt, setRedirectt] = useState(false);
  async function SaveMac() {
    if (!mac)
      alert('Voce precisa Informar o codigo do celular')
    else {
      await localStorage.setItem('@todo/macaddress', mac);
      setRedirectt(true)
      window.location.reload();
    }
  }

  return (
    <S.Container>
      {redirectt && <Redirect to="/" />}
      <Header />
      <S.Content>
        <h1>Cadastre uma senha</h1>
        <p>Sua atividades serão sincronizadas apartir dessa Senha</p>
        <p>Utilize essa mesma senha para entrar e visualizar suas tarefas</p>

        <S.QrCodeArea>
          {/* <Qr value='getmacaddres' size={350} /> */}
          <S.ValidationCode>
           {/*  <span>Digite o codigo do celular</span> */}
            <input type="text" value={mac} onChange={e => setMac(e.target.value)} placeholder="Digite sua Senha"/>

          
            <button type="button" onClick={SaveMac}>Sincronizar</button>
          </S.ValidationCode>
   
        </S.QrCodeArea>
      </S.Content>
      <S.obs>Não tem cadastro? digite uma senha e clique em sincronizar</S.obs>
      <Footer />
    </S.Container>
  )

}