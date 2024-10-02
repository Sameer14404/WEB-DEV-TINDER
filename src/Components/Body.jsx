
import axios from 'axios'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../Utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../Utils/UserSlice'
import { useEffect } from 'react'

const Body = () => {
  const disPatch=useDispatch()
  const UserData=useSelector(store=>store.User)
  const navigate=useNavigate()
  
  const fetchUser=async()=>{
        if(UserData) return;
      
      try {
        const res= await axios.get(BASE_URL+"profile/view");
         disPatch(addUser(res.data))
        console.log(res.data)
      } catch (err) {
        if(err.status === 401){
          navigate("/login")
        }
        console.log(err)
      }
  }
   useEffect(()=>{
    fetchUser()
   },[])

  return (
    <>
   <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Body
