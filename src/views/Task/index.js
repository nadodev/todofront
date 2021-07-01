import React, { useState, useEffect } from 'react'
import * as S from './style'
import { Redirect } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import api from '../../services/api'
import isConnected from '../../utils/isConnected'
import { format } from 'date-fns'
import isPast from 'date-fns/isPast'
/* components */
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import typeIcons from '../../utils/typeIcons'

export default function Task({ match }) {
  const [redirect, setRedirect] = useState(false)
  const [type, setType] = useState()
  const [id, setId] = useState()
  const [done, setDone] = useState(false)
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()

  async function Save() {
    if (!type)
      return toast.error('voce precisa informar o Tipo da tarefa', {
        position: 'top-center',
        autoClose: 2000
      })
    else if (!description)
      return toast.error('voce precisa informar a descrição da tarefa', {
        position: 'top-center',
        autoClose: 2000
      })
    else if (!title)
      return toast.error('voce precisa informar o titulo da tarefa', {
        position: 'top-center',
        autoClose: 2000
      })
    else if (!date)
      return toast.error('voce precisa informar a data da tarefa', {
        position: 'top-center',
        autoClose: 2000
      })
    else if (!hour)
      return toast.error('voce precisa informar a hora da tarefa', {
        position: 'top-center',
        autoClose: 2000
      })

    /* validação dos dados */

    if (match.params.id) {
      await api
        .put(`/task/${match.params.id}`, {
          macaddress: isConnected,
          type,
          title,
          description,
          done,
          when: `${date}T${hour}:00.000`
        })
        .then(() => setRedirect(true))
    } else {
      await api
        .post('/task', {
          macaddress: isConnected,
          type,
          title,
          description,
          done,
          when: `${date}T${hour}:00.000`
        })
        .then(() => setRedirect(true))
    }
  }

  async function Remove() {
    const res = window.confirm('deseja realmente remover a tarefa ?')
    if (res == true) {
      api.delete(`/task/${match.params.id}`).then(() => setRedirect(true))
    } else {
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function LoadTaskDetail() {
    await api.get(`/task/${match.params.id}`).then(response => {
      setType(response.data.type)
      setDone(response.data.done)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when), 'HH:mm'))
    })
  }
  useEffect(() => {
    if (!isConnected) {
      setRedirect(true)
    }
    LoadTaskDetail()
  }, [])

  return (
    <S.Task>
      {redirect && <Redirect to="/" />}
      <ToastContainer autoClose={3000} />
      <Header />
      <S.Form>
        <S.TypeIcons>
          {typeIcons.map(
            (icon, index) =>
              index > 0 && (
                <button type="button" onClick={() => setType(index)}>
                  <img
                    src={icon}
                    alt="tipo da tarefa"
                    className={type && type != index && 'inative'}
                  />
                </button>
              )
          )}
        </S.TypeIcons>
        <S.Input>
          <span>Titulo</span>
          <input
            type="text"
            placeholder="Titulo da Tarefa"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </S.Input>
        <S.TextArea>
          <span>Descrição</span>
          <textarea
            rows={5}
            placeholder="Detalhe da tarefa"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
        </S.TextArea>
        <S.Input>
          <span>Data</span>
          <input
            type="date"
            onChange={e => setDate(e.target.value)}
            value={date}
          />
        </S.Input>
        <S.Input>
          <span>Hora</span>
          <input
            type="time"
            onChange={e => setHour(e.target.value)}
            value={hour}
          />
        </S.Input>
        <S.Options>
          <div>
            <input
              type="checkbox"
              checked={done}
              onChange={e => setDone(!done)}
            />
            <span>CONCLUIDO</span>
          </div>
          {match.params.id && (
            <button type="button" onClick={Remove}>
              Excluir
            </button>
          )}
        </S.Options>
        <S.Save>
          <button type="button" onClick={Save}>
            Salvar
          </button>
        </S.Save>
      </S.Form>
      <Footer />
    </S.Task>
  )
}
