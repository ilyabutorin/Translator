import React from 'react'
import s from './style.module.css'

export default function Search({search}) {

    const search_word = event => {
        search(event.target.value)
    }

  return (
    <div className={s.search_container}>
        <input onChange={search_word} type="text" name='search' placeholder='поиск слова' />
    </div>
  )
}
