import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

const HomePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);
  return (
    <div>
      <div className="flex items-center justify-center">
        <img src={logo} alt="converseX logo" className="w-10 h-08 mr-2" />
        <h1 className='text-4xl text-center text-white mb-4'>converseX</h1>
      </div>
      <div className='flex sm:h-[500px] md:h-[550px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  )
}

export default HomePage
