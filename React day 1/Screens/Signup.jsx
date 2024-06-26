import { useState } from "react"

function Signup(){

    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [confirmPassword, setConfirmPassword]= useState('')
   
    const onSave= ()=>{
        console.log(`Firstname= ${firstName}`)
        console.log(`Lastname= ${lastName}`)
        console.log(`Email= ${email}`)
        console.log(`password= ${password}`)
        console.log(`Confirm password= ${confirmPassword}`)
    }
    const onCancel=() => {

    }

    return <div>
        <h2 className="page-header">Signup</h2>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="form">
                    <div className="mb-3">
                        <label htmlFor="">First name</label>
                        <input
                        onChange={ (e)=>  setFirstName(e.target.value)}
                         type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Last name</label>
                        <input
                        onChange={
                            (e)=>setLastName (e.target.value)}
                         type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Email</label>
                        <input 
                        onChange={ (e)=> setEmail(e.target.value)} 
                        type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Password</label>
                        <input 
                        onChange={(e)=> setPassword(e.target.value) }
                         type="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Confirm Password</label>
                        <input
                        onChange={(e)=> setConfirmPassword(e.target.value) } type="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                    <button onClick={onSave} className="btn btn-success me-3" >
                    Register</button>
                    
                    <button onClick={onSave} className="btn btn-danger">
                        Cancel</button>
                    </div>
                </div>
            </div>
            <div className="col-3"></div>
        </div>

    </div>
}


export default Signup
