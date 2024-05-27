import { useState } from "react"

function Login(){
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')


    const onLogin= ()=>{
        if(email.length==0){
            alert("enter email")
        }
        else if(password.length ==0){
            alert("enter password")
        }

    }
    const onSignup= ()=>{

    }



    return <div>
      <h2 className="page-header">Login</h2>
      <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
       <div className="form">
       <div className="mb-3" >
            <label htmlFor="">Email</label>
            <input 
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email" className="form-control" />
        </div>
        <div className="mb-3" >
            <label htmlFor="">Password</label>
           <input 
            onChange={(e)=>{setPassword(e.target.value)}}
           type="password" className="form-control" />
        </div>
      </div>
        <div className="col-3"></div>

        <div onClick={onLogin} className="btn btn-primary me-3">
            Login
        </div>
        <div onClick={onSignup} className="btn btn-warning">
            Signup
        </div>

       </div>
      </div>
      </div>




}

export default Login 