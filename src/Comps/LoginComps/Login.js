import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })

    const HandleLogin = async ()=>{
        // console.log(email,password);
        let result = await fetch('http://localhost:5000/login',{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        let logindata = await result.json();
        // console.log(logindata);
        if(logindata.auth){
            localStorage.setItem("user",JSON.stringify(logindata.user));
            localStorage.setItem("token",JSON.stringify(logindata.auth));
            navigate('/')
        }else{
            alert("Please Enter correct Details")
        }
    }
  return (
    <div className='Login AddPruduct'>
      <h2 style={{margin:"20px"}}>Login Page</h2>
      <input className="form-control w-50 m-3" id="validationDefault01" type='text' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input className="form-control w-50 m-3" id="validationDefault01" type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPass(e.target.value)} />
      <button className='btn btn-primary m-3 p-1 w-25' type='button' onClick={HandleLogin}>Login</button>
    </div>
  );
}

export default Login;