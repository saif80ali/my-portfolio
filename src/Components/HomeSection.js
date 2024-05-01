import React from 'react'
import '../Stylesheets/style.css';
import userImage from '../assets/person-with-laptop.svg'


export default function HomeSection() {
  return (
    <section className='banner'>
        <div className="container user-section">
        <div className='user-profile'>
                <img src={userImage} />
            </div>
            <div className='user-info'>
                <h1>Hey folks, I'm Saif</h1>
                <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                <button type="button" class="btn custom-button">Get a quote</button>
            </div>
            
        </div>
    </section>
  )
}
