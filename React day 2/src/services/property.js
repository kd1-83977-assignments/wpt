export async function getProperties() {
    try {
      const token = sessionStorage['token']
      const response = await axios.get(`${config.serverUrl}/property`, {
        headers: { token },
      })
      return response.data
    } catch (ex) {
      console.log(`exception: `, ex)
    }
  
    return null
  }



  