import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Home =()=>{  
    const navigator = useNavigate()
    const logout = async()=>{
    const resp = await axios.get("http://localhost:3001/auth/logout", {  withCredentials: true})
    if(resp){
        navigator("/login")
    }
  }

  useEffect( ()=>{
    const checker =async()=>{
      try {
        const resp = await axios.get("http://localhost:3001/user/user", {  withCredentials: true})
        console.log("resp", resp)
      } catch(err) {
        console.error("Error fetching user:", err.response?.data || err.message)
      }
    }
    checker()

  },[])
  return <div>
    <p>Hi</p>
    <button onClick={logout}>Logout</button>
  </div>
}

export default Home;