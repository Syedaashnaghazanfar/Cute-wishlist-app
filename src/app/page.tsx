'use client';

import { useState } from 'react';
import Confetti from 'react-confetti';
import styles from './page.module.css';

export default function WishesPage() {
  const [wishes, setWishes] = useState<{ text: string; visible: boolean }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showConfetti, setShowConfetti] = useState(false); // to manage confetti visibility


  const addWish = () => {
    if (inputValue) {
      setWishes([...wishes, { text: inputValue, visible: true }]);
      setInputValue(''); //clear input after adding
      setShowConfetti(true); //show confetti when a wish is added
      setTimeout(() => setShowConfetti(false), 5000); //hide confetti after 5 seconds
    }
  };


  const removeWish = (index: number) => {
    const newWishes = wishes.filter((_, i) => i !== index);
    setWishes(newWishes); //remove the wish at the specified index
  };

  const toggleWish = (index: number) => {
    const newWishes = [...wishes];
    newWishes[index].visible = !newWishes[index].visible; //toggle visibility of a single wish
    setWishes(newWishes);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Wishlists</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Write your wish..." 
        className={styles.input}
      />
      <div className={styles.buttonSection}>
        <button className={styles.addButton} onClick={addWish}>Add Wish</button>
      </div>
      {wishes.map((wish, index) => (
        <div key={index} className={styles.wishItem}>
          {wish.visible ? <p className={styles.wishText}>{wish.text}</p> : null}
          <div className={styles.buttons}>
            <button className={styles.toggleButton} onClick={() => toggleWish(index)}>
              {wish.visible ? 'Hide' : 'Show'}
            </button>
            <button className={styles.removeButton} onClick={() => removeWish(index)}>Remove</button>
          </div>
        </div>
      ))}
      {/* Confetti when a wish is added */}
      {showConfetti && <Confetti />}
      <div className={styles.flower}>
        <p>˚˖𓍢ִ໋🌷͙֒✧˚</p>
      </div>
      {/* Animated hearts in the background */}
      <div>
        <div className={styles.heart}></div>
        <div className={styles.heart}></div>
        <div className={styles.heart}></div>
        <div className={styles.heart}></div>
        <div className={styles.heart}></div>
        <div className={styles.heart}></div>
      </div>
      <p id='text'>May all your wishes come true..</p>
    </div>
   
  );
}
