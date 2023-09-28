import React from 'react';

const form = () => {
  return (
    <div>
        <form className='container'>
            <div className='header'>
                <h1> Registration form</h1>
                <div>
                <label for="fname">Name:</label><br></br>
                <input type ="text" placeholder='enter your name' name='name'></input><br></br>
                </div>
                <div> 
                <label for="fname">Email:</label><br></br>
                <input type ="text" placeholder='enter your email' name='email'></input>
                </div>
                <div>
                <label for="fname">password:</label><br></br>
                <input type ="text" placeholder='enter your password' name='password'></input>
                </div>
                <div>
                <label for="fname">Phone:</label><br></br>
                <input type ="text" placeholder='enter your phone' name='phone'></input>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>




            </div>


        </form>

      
    </div>
  );
}

export default form;
