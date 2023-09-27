import React from 'react';
import './loginSignup.css'

inport user_icon from '../Assets/name.png'
inport email_icon from '../Assets/email.png'
inport password_icon from '../Assets/password.png'

const loginSignup = () => {
  return (

    <div className='container'>
        <div className='header'>
         <div className="text">sign up</div> 
         <div className="underline"></div>   
         </div>
         <div className="inputs">  
         <div className="input">
            <img src='' alt=''/>
            <input type='text'/>
         </div>
         <div className="inputs">  
         <div className="input">
            <img src='' alt=''/>
            <input type='text'/>
         </div>
         <div className="inputs">  
         <div className="input">
            <img src='' alt=''/>
            <input type='text'/>
            </div>
         </div>
         </div>  
    </div>
  );
};
export default loginSignup;
