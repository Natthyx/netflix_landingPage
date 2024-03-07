import React from 'react';
import logo from '../images/Netflix-logo-red-black-png.png';
import InputArea from './InputArea';
function Header(){
    return(
        <div className='opening'>
        <header>
        <img src={logo} alt='netflix-logo'></img>
        <button>Sign In</button>
        
        </header>
        <div className='intro'>
        <h1>Unlimited movies, TV shows, and <br></br>more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <InputArea />
        </div>
        
        </div>
       
    )
}

export default Header