import { useState, useRef, useEffect } from 'react';
import userImage from '../assets/person-with-laptop.svg';
import downloadIcon from '../assets/Icons/download.png';
import resume from '../assets/SaifAliResume.pdf';

export default function HomeSection() {
  const options = ['Saif', 'Developer'];
  const index = useRef(0);
  const [random, setRandom] = useState(options[index.current]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      index.current = (index.current + 1) % options.length;
      setRandom(options[index.current]);
    }, 1000);

    // cleanup when component unmounts
    return () => clearInterval(intervalId);
     // eslint-disable-next-line 
  }, []);

  return (
    <section id='about' className='banner'>
      <div className="container user-section banner">
        <div className="user-profile">
          <img src={userImage} alt="User with computer" />
        </div>
        <div className="user-info">
          <h1>
            Hey folks, I'm <span className="random-text">{random}</span>
          </h1>
          <p>
            With a fervent passion for user experience design, interfaces, and
            web development, I bring boundless energy to the table. My expertise
            lies in creating seamless digital experiences that captivate and
            engage users.
          </p>
          <a href={resume} className="btn custom-button" download>
            <img src={downloadIcon} alt="Download icon" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
