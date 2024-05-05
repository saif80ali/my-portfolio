import './App.css';
import ContactMe from './Components/ContactMe';
import Experience from './Components/Experience';
import HomeSection from './Components/HomeSection';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomeSection></HomeSection>
      <Experience></Experience>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
