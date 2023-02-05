import React from 'react'
import s from './style.module.css'

export default function Form({addCard}) {

    const setColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const onSubmit = event => {
        event.preventDefault();
        const {word, translation} = event.target;

        const new_card = {
            id: Date.now(),
            word: word.value,
            translation: translation.value,
            flip: true,
            show: true,
            color: setColor()
        };

        addCard(new_card);

        word.value = '';
        translation.value = '';
    }

  return (
    <div>
        <form className={s.form} onSubmit={onSubmit}>
            <input type="text" name='word' placeholder='слово' />
            <input type="text" name='translation' placeholder='перевод' />
            <button>Добавить</button>
        </form>
    </div>
  )
}
