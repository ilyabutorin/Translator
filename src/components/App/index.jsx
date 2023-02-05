import { useEffect, useState } from "react";
import Cards from "../Cards";
import Form from "../Form";
import Search from "../Search";
import s from './style.module.css'


function App() {

  const [cards, setCards] = useState(() => JSON.parse(localStorage.getItem('cards')) ?? []);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);


  const addCard = (card) => {
    setCards([...cards, card]);
  }


  const changeWord = (id) => {
    const elem = cards.find(elem => elem.id === id);
    if(elem.flip === true){
      return elem.word;
    }else{
      return elem.translation;
    }
  }


  const changeFlip = (id) => {
    const elem = cards.find(elem => elem.id === id);
    elem.flip = !elem.flip;
    setCards([...cards])
  }


  const deleteCard = delId => setCards(pre => pre.filter(({ id }) => id !== delId));


  const search = (string) => {
    string = string.toLowerCase();
    const search_word = cards.map(card => {
        card.show = card.word.toLowerCase().startsWith(string) || card.translation.toLowerCase().startsWith(string);
        return card
    })
    setCards(search_word);
}



  return (
    <div>
      <div className={s.input_container}>
        <Form
          addCard={addCard}
        />
        <Search search={search}/>
      </div>
      <div className={s.cardContainer}>
        {
          cards
          .filter(({show})=> show)
          .map(card => 
          <Cards 
            key={card.id} 
            {...card} 
            changeWord={changeWord}
            changeFlip={changeFlip}
            deleteCard={deleteCard} />)
        }
      </div>
    </div>
  );
}

export default App;

