import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
const Signup = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('');
 

    const navigate = useNavigate();
const signup = async (e)=>{
    e.preventDefault();
    try{
        const usercred = await createUserWithEmailAndPassword(auth,email,password)
        await updateProfile(usercred.user,{displayName:name})
        alert("signup done")
        navigate('/login')

    }catch(err){
  alert(err.message)
    }
}

  return (
    <>
    <form onSubmit={signup}>
        <h2>Signup</h2>
         <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button>signup</button>
    </form>
    </>
  )
}

export default Signup
