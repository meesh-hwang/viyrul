import logo from './assets/img/logo.png';
import './App.css';
import Phone from './components/Phone';
import Service from './components/Service';

function App() {
  


  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <ul className='menu'>
          <li><a href='meeshhwang.ca'>Contact</a></li>
          <li><a href='meeshhwang.ca'>About</a></li>
          <li><a href='meeshhwang.ca'>Services</a></li>
        </ul>
      </header>

      <div className='hero'>
        <div className='hero-text'>
          <div className='hero-h1'>
            <h1>Memamomamoo <br></br>mameemomoomame</h1>
          </div>
          <p>Memamomemamomemamomemamomema <br></br>Memameomamemoamemaomeamemaoemameo <br></br>Mamemeomemaomemaemoemae</p>
          <div className='cta-btns'>
            <a className='hero-btn' href='#'>Book a Consultation</a>
            <a className='hero-btn' href='#'>Contact Us</a>
          </div>
        </div>
        <Phone />
      </div>
      <Service />
    </div>
  );
}

export default App;
