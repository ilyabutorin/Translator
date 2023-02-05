import React from 'react'
import s from './style.module.css'

export default function Cards({changeWord, id, changeFlip, color, deleteCard}) {
  return (
    <div className={s.card} style={{backgroundColor: color}}>
        <button onClick={()=>deleteCard(id)}>X</button>
        <p onClick={()=>changeFlip(id)}>{changeWord(id)}</p>
    </div>
  )
}
