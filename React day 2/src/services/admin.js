import axios from "axios"

export async function register(firstName,lasName,email,password,phone){
    try{
        const body={firstName,lasName,email,password,phone}

        const response= await axios.post(`${config.serverUrl}/user/register`)

        return response.data        
    }catch(ex){
        console.log(`exception: `,ex)
    }
    return null
}

export async function login(email, password) {
    const body = { email, password }
    try {
      const response = await axios.post(`${config.serverUrl}/user/login`, body)
      return response.data
    } catch (ex) {
      console.log(`exception: `, ex)
    }
  
    return null
}