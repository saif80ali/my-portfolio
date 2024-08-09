import './App.css';
import Certifications from './Components/Certifications';
import ContactMe from './Components/ContactMe';
import Experience from './Components/Experience';
import HomeSection from './Components/HomeSection';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomeSection></HomeSection>
      <Projects></Projects>
      <Experience></Experience>
      <Certifications></Certifications>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
