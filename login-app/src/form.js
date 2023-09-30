import React, { useEffect, useState } from 'react';

const Form = () => {

 const data={ name:'',  email:'', password:'', phone:''};
 const [inputData, setInputData] = useState(data)
 const [flag, setFlag]=useState(false)
 useEffect(()=>{
  console.log("Registered")}, [flag])

 function handleData(e){
  setInputData({...inputData, [e.target.name]:e.target.value})
 console.log(inputData)
 }

  function hanleSubmit(e)
  {
    e.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password || !inputData.phone)
    {
      alert("All fields are Mendatory")
    }
    else
    {
      setFlag(true)
    }
  }
  

  return (
    <>
    <pre>{(flag)?<h2 className='ui-define'> Hello {inputData.name}, You've successfully Registered</h2>:"" }</pre>
        <div>
        <form className='container' onSubmit={hanleSubmit}>
            <div className='header'> 
                <h1> Registration form</h1>
                <div>
                <label for="fname">Name:</label><br></br>
                <input type ="text" placeholder='enter your name' name='name' value={inputData.name} onChange={handleData}></input>
                </div>
                <div> 
                <label for="email">Email:</label><br></br>
                <input type ="text" placeholder='enter your email' name='email' value={inputData.email} onChange={handleData}></input>
                </div>
                <div>
                <label for="password">password:</label><br></br>
                <input type ="password" placeholder='enter your password' name='password' value={inputData.password} onChange={handleData}></input>
                </div>
                <div>
                <label for="phone">Phone:</label><br></br>
                <input type ="text" placeholder='enter your phone' name='phone' value={inputData.phone} onChange={handleData}></input>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </form>  
    </div>
    </>

  );
}

export default Form;
