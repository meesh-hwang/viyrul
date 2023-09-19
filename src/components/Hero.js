import Phone from './Phone'

const Hero = () => {
    return(
        <div className='hero'>
            <div className='hero-text'>
                <div className='hero-h1'>
                    <h1>Go <span className='emph'>Viral</span> <br/> with <span className='emph'>Viyrul</span>.</h1>
                </div>
                <p>From online orders, client management, lead generation, <br/>and more, we do everything while you focus on providing the <br/>best products and services to your customers and clients. </p>
                <div className='cta-btns'>
                    <a className='hero-btn' href='#'>Book a Consultation</a>
                </div>
            </div>
            <Phone />
        </div>
    )
}

export default Hero;