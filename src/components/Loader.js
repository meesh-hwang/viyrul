import logo from '../assets/img/logo.png';
import '../styles/loader.css'

const Loader = () => {
    
    return(
        <div className='loader-container'>
            <img alt='logo' src={logo}/>
        </div>
    );
}

export default Loader