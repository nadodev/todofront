import React, { useMemo } from 'react'
import { format } from 'date-fns'
import typeIcons from '../../utils/typeIcons'
import * as S from './style';
export default function TaskCard({ type, title, when, done }) {
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));
  return (
    <S.Container done={done}>
      <S.TopCard>
        <img src={typeIcons[type]} alt="tarefa" />
        <h3>{title}</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>{date}</strong>
        <span>{hour + 3}</span>
      </S.BottomCard>
    </S.Container>
  )
}
