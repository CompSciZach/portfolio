import './App.css';
import ParticleBackground from './components/particle-background';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="app-container">
      <ParticleBackground />
      <main className="main-content">
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;