import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function Login(){
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [isEmailEmpty, setEmailEmpty] = useState(false)
    const [isPasswordEmpty, setPasswordEmpty] = useState(false)

    const navigate= useNavigate()

    const onLogin= async()=>{
        if(email.length==0){
            toast.error('Please enter email')
        }
        else if(password.length ==0){
            toast.error("Please enter password")
        }else{
          const result= await login(email,password)
          if(result['status']== 'success'){
            const data = result['data']

            sessionStorage['name']=data['name']
            sessionStorage['token']=data['token']

            navigate('/home')
          }else{
            toast.error(result['error'])
          }
        }
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
            onChange={(e)=>{
              if(e.target.value.length== 0){
                setEmailEmpty(true)
              }else{
                setEmailEmpty(false)
              }
              setEmail(e.target.value)}}
            type="email" className="form-control" />
            {isEmailEmpty &&(
                <p style={{ color: 'red' }}>Email is mandatory</p>
            )}
        </div>
        <div className="mb-3" >
            <label htmlFor="">Password</label>
           <input 
            onChange={(e)=>{
              if(e.target.length == 0){
                setEmailEmpty(true)
              }else{
                setEmailEmpty(false)
              }
              setPassword(e.target.value)}}
           type="password" className="form-control" />
           {isPasswordEmpty && (
                <p style={{ color: 'red' }}>Password is mandatory</p>
           )}
        </div>
      </div>
        <div className="col-3"></div>
        <div>
        Don't have account ? <Link to='/register'>Register here</Link>
        </div>
        <button onClick={onLogin} className="btn btn-primary me-3">
            Login
        </button>
        
       </div>
      </div>
      </div>




}

export default Login 