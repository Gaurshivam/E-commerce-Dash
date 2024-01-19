import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Common.css'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const navigate = useNavigate();

  const collectData = async () =>{
    console.log(name,email,password);
    let result = await fetch("http://localhost:5000/register",{
      method:"POST",
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      },
    });
    let data = await result.json();
    console.log(data);
    localStorage.setItem('user',JSON.stringify(data.result));
    localStorage.setItem('token',JSON.stringify(data.result));
    navigate('/');
  }

  return (
    <div className='Login'>
      <h2 style={{marginLeft:"20px"}}>Register Page</h2>
      <input className="form-control w-50 m-3" id="validationDefault01" type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />
      <input className="form-control w-50 m-3" id="validationDefault01" type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
      <input className="form-control w-50 m-3" id="validationDefault01" type='password' value={password} onChange={(e)=>setPass(e.target.value)} placeholder='Enter Password' />
      <button className='btn btn-primary w-25 m-3 p-1 ' onClick={collectData} type='button'>SignUp</button>
    </div>
  );
}

export default Signup;