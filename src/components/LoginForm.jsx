import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useState } from "react"
import {auth} from "../firebase/firebaseConfig"
import { error, success } from "../utilis/message"
import { useUserStore } from "../store/userStore"
import { NavLink, useNavigate } from "react-router-dom"
function LoginForm(){
 
  let[email,setEmail]=useState("")
  let[pwd,setPwd]=useState("")

  let login = useUserStore((state)=>state.login)
  let navigate = useNavigate()

  let provider = new GoogleAuthProvider();


  async function signin(e){
    e.preventDefault()

    if(email == "" || pwd == ""){
      error("All Fields Are Required")
      return
    }

    try{
      let userCredentials=await signInWithEmailAndPassword(auth,email,pwd)
      if(userCredentials.user){
        login(userCredentials.user)
        // console.log("Login")
        success("Login Successful")
        navigate("/")
      }
      console.log(userCredentials)
    }catch(err){
      error("Login Failed")
    }  
  }
  async function googlesignin(){
    let result = await signInWithPopup(auth,provider)
    if(result.user != null){
      login(result.user)
      console.log("Login")
      success("Login Successfull")
      navigate("/")
    }
  }
    return (
        <>
          <div className="auth-form">
          <h2>Log in</h2>
          <form onSubmit={signin}>
            <div className="form-group">
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control form-control-light" placeholder="Username" name="username" defaultValue />
            </div>
            <div className="form-group">
              <input value={pwd} onChange={(e)=>setPwd(e.target.value)} type="password" className="form-control form-control-light" placeholder="Password" name="password" defaultValue />
            </div>
            <a href="#">Forgot Password?</a>
            <button type="submit" className="btn-custom primary">Login</button>
            <div className="auth-seperator">
              <span>OR</span>
            </div>
            <div className="social-login">
              <button type="button" className="ct-social-login facebook"><i className="fab fa-facebook-f" /> Continue with Facebook </button>
              <button onClick={googlesignin} type="button" className="ct-social-login google"><i className="fab fa-google" /> Continue with Google</button>
            </div>
            <p>Don't have an account? <NavLink to="/register">Create One</NavLink> </p>
          </form>
        </div>
        </>
    )
}
export default LoginForm