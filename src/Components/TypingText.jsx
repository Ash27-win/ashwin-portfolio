// import React from 'react'
// import { useState, useEffect } from 'react';

// const useTypingEffect = (text, speed = 100, delay = 2000) => {
//   const [displayedText, setDisplayedText] = useState('');
//   const [index, setIndex] = useState(0);  

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev + text[index]);
//         setIndex((prev) => prev + 1);
//       }, speed);
//       return () => clearInterval(timeout);
//     } else{
//       const reset = setTimeout(() => {
//         setDisplayedText('');
//         setIndex(0);
//       }, delay);
//       return () => clearInterval(reset);
//     }
//   }, [index, text, speed, delay]);
//   return displayedText;
// }

// export default useTypingEffect

// src/Components/TypingText.js
import { useEffect, useState } from 'react';

const useTypingEffect = (texts, speed = 150, pause = 1000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    let timeout;

    if (typing) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + currentText[charIndex]);
          setCharIndex(prev => prev + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        }, speed / 2);
      } else {
        setTyping(true);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, texts, currentTextIndex, speed, pause]);

  return displayedText;
};

export default useTypingEffect;
