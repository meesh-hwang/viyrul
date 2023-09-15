import Phone from './Phone'

const Hero = () => {
    return(
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
    )
}

export default Hero;