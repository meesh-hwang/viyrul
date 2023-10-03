import './styles/App.css';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
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
          <HashRouter>
            <Header />
            <Routes>
              <Route>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<About />} />
              </Route>
            </Routes>
            <Footer />
          </HashRouter>    
        </div>}
    </div>
  );
}
//HASH ROUTER ONLY FOR GHPAGES. FOR ACTUAL DEPLOYMENT USE BROWSERROUTER
export default App;
