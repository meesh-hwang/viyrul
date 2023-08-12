import logo from './assets/img/logo.png';
import './App.css';
import Phone from './components/Phone';
import handIcon from './assets/img/hand-holding-seeding.svg'

function App() {
  


  return (
    <div className="App">
      <div className='diagonal'></div>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <ul className='menu'>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Services</a></li>
        </ul>
      </header>

      <div className='hero'>
        <div className='hero-text'>
          <div className='hero-h1'>
            <h1>Big pussy you know <br></br>what it is yeah</h1>
          </div>
          <p>Heejab land is where it's at gang gang. If you <br></br>want your pussy snatched let us know. we have <br></br>the best pussy snatching solutions.</p>
          <a className='hero-btn' href='#'>Regular</a>
        </div>
        <Phone />
      </div>

      <div className='services'>
        <div className='service'>
          <img src={handIcon} className='service-icon'/>
          <h2>Pussy Marketing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lectus in quam dictum suscipit. Morbi ultrices malesuada arcu, in dictum ante vulputate ut. Donec eget nibh enim.</p>
        </div>
        <div className='service'>
          <img src={handIcon} className='service-icon'/>
          <h2>Pussy Marketing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lectus in quam dictum suscipit. Morbi ultrices malesuada arcu, in dictum ante vulputate ut. Donec eget nibh enim.</p>
        </div>
        <div className='service'>
          <img src={handIcon} className='service-icon'/>
          <h2>Pussy Marketing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lectus in quam dictum suscipit. Morbi ultrices malesuada arcu, in dictum ante vulputate ut. Donec eget nibh enim.</p>
        </div>
      </div>

    </div>
  );
}

export default App;
