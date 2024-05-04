import './App.css';
import Experience from './Components/Experience';
import HomeSection from './Components/HomeSection';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomeSection></HomeSection>
      <div id='about'>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default App;
