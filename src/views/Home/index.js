import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import * as S from './style'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'
import { Link, Redirect } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import isConnected from '../../utils/isConnected'
export default function Home() {
  const [filterActived, setFilterActived] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function loadTask() {
    api.get(`/task/filter/${filterActived}/${isConnected}`)
      .then(response => {
        setTasks(response.data);
      })
  }


  function Notification() {
    setFilterActived('late');
  }

  useEffect(() => {
    loadTask();
    if (!isConnected) {
      setRedirect(true);
    }
  }, [filterActived, loadTask])

  return (
    <>

      <S.Container>
        {redirect && <Redirect to="/sincronizar" />}
        <Header clickNotification={Notification} />

        <S.FilterArea>
          <button onClick={() => setFilterActived('all')} type="button">
            <FilterCard title="Todos" actived={filterActived == 'all'} />
          </button>

          <button type="button" onClick={() => setFilterActived('today')} >
            <FilterCard title="Hoje" actived={filterActived == 'today'} />
          </button>

          <button type="button" onClick={() => setFilterActived('week')} >
            <FilterCard title="Semana" actived={filterActived == 'week'} />
          </button>

          <button type="button" onClick={() => setFilterActived('month')} >
            <FilterCard title="Mes" actived={filterActived == 'month'} />
          </button>

          <button type="button" onClick={() => setFilterActived('year')} >
            <FilterCard title="Ano" actived={filterActived == 'year'} />
          </button>

        </S.FilterArea>
        <S.Title>
          <h3>{filterActived == 'late' ? 'Tarefas atrasadas' : 'Tarefas'}</h3>
        </S.Title>
        <S.Content>
          {tasks.map(task => (
            <Link to={`/task/${task._id}`}>
            <>
          
            <TaskCard type={task.type} title={task.title} when={task.when} done={task.done} />
            </>
            </Link>
          ))}
        </S.Content>
        <Footer />
      </S.Container>
    </>
  )
}
