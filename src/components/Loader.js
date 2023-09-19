import logo from '../assets/img/logo.png';
import '../styles/loader.css'

const Loader = () => {
    
    return(
        <div className='loader-container'>
            <img alt='logo' src={logo}/>
            <h1>THIS IS A LOADING SCREEN</h1>
            <h2>STILL CRAFTING</h2>
        </div>
    );
}

export default Loader