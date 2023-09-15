import logo from '../assets/img/logo.png';
import '../styles/loader.css'

const Loader = () => {

    return(
        <div className='container'>
            <img src={logo}/>
            <h1>THIS IS A LOADING SCREEN</h1>
            <h2>STILL CRAFTING</h2>
        </div>
    );
}

export default Loader