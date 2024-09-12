import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserRegister from './Pages/UserRegister'
import UserLogin from './Pages/UserLogin'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './Pages/AdminLogin'
import UserHome from './Pages/UserHome'
import UserMenu from './Pages/UserMenu'
import { Route, Routes } from 'react-router-dom'
import UserCart from './Pages/UserCart'
import UserMenuDetails from './Pages/UserMenuDetails'
import UserCheckout from './Pages/UserCheckout'
import UserOrder from './Pages/UserOrder'
import AdminOrder from './Pages/AdminOrders'
import UserAbout from './Pages/UserAbout'
import UserContact from './Pages/UserContact'

function App() {



  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<UserHome/>} />
      <Route path='/login' element={<UserLogin/>} />
      <Route path='/register' element={<UserRegister/>} />
      <Route path='/about' element={<UserAbout/>} />
      <Route path='/menu' element={<UserMenu/>} />
      <Route path='/cart' element={<UserCart/>} />
      <Route path='/checkout' element={<UserCheckout/>} />
      <Route path='/order' element={<UserOrder/>} />
      <Route path='/contact' element={<UserContact/>} />
      <Route path='/menu/:id' element={<UserMenuDetails/>}/>

      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/adminorder'element={<AdminOrder/>}/>
    </Routes>
    </>
  )
}

export default App
