import React, { useState, useRef } from 'react';
import userImage from '../assets/person-with-laptop.svg';


export default function HomeSection() {
  const options = ['Saif','Developer','Cloud Guy'];
  const intervalRef = useRef(null);
  const index = useRef(0);
  const [random, setRandom] = useState(options[index.current]);
  
  clearInterval(intervalRef.current);
  intervalRef.current = setInterval(() => {
    index.current = index.current + 1;
    if (index.current > 2) {
      index.current = 0;
    }
    setRandom(options[index.current]);
  }, 1000);

  return (
    <section className='banner'>
        <div className="container user-section">
        <div className='user-profile'>
                <img src={userImage} alt='User with computer' />
            </div>
            <div className='user-info'>
                <h1>Hey folks, I'm <span className='random-text'>{random}</span></h1>
                <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                <button type="button" className="btn custom-button">Get a free quote</button>
            </div>
            
        </div>
    </section>
  )
}
