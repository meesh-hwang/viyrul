import './styles/App.css';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import { useState, useEffect } from 'react';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
      }, 2000);
      }, []);

  return (
    <div className="App">
      {loading ? (
      <div className='app-container'>
        {document.body.style.overflow="hidden"}
        <Loader />
      </div>
        ) :
        <div className='app-container'>
          {document.body.style.overflowY="auto"}
          <Header /> 
          <Hero />
          <Services />
          <About />
          <Footer />
        </div>}
    </div>
  );
}

export default App;
