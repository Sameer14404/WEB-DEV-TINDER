import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../Utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../Utils/FeedSlice'
import Usercard from './Usercard'

const Feed = () => {
 const dispatch=useDispatch()
 const feed=useSelector((store)=>store.Feed)
 
  const fetchFeed=async()=>{
      try {
        const  res=await axios.get(BASE_URL+"feed",{withCredentials:true});
        dispatch(addFeed(res.data.data))
        
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(()=>{
   if(!feed){
    fetchFeed()
   }
  },[])
  if(feed===null){
    return <h1> Feed is closed</h1>
  }
  return (
    <div className='flex justify-center p-10 m-10'>
      
      <h1 className='text-3xl'>Feed</h1>
     {feed[0]? <Usercard user={feed[0]}/>:""}

    </div>
  )
}

export default Feed
