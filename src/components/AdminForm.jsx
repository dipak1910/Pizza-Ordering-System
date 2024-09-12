import { collection, getDocs, query, where } from "firebase/firestore"
import { useState } from "react"
import {error, success} from "../utilis/message"
import { db } from "../firebase/firebaseConfig"
import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/userStore"
function AdminForm(){

  let[unm,setUnm]=useState("")
  let[pwd,setPwd]=useState("")

  let login = useUserStore((state)=>state.login)

  let navigate = useNavigate()

  async function signin(e){
    e.preventDefault()

    let colref = collection(db,"admins")
    
    let q = query(colref,where("unm","==",unm),where("pwd","==",pwd))
    
    let snapShot = await getDocs(q)
    console.log(snapShot.docs)
    
    if(snapShot.docs.length>0){
      success("Admin Login Successfull")
      navigate("/adminorder")
      
    }
    else{
      error("Admin Login Failed")
    }
  }
    return(
        <>
        <div className="auth-form">
          <h2>Admin Log in</h2>
          <form onSubmit={signin}>
            <div className="form-group">
              <input value={unm} onChange={(e)=>setUnm(e.target.value)} type="text" className="form-control form-control-light" placeholder="Username" name="username"  />
            </div>
            <div className="form-group">
              <input value={pwd} onChange={(e)=>setPwd(e.target.value)} type="password" className="form-control form-control-light" placeholder="Password" name="password"  />
            </div>
            <button type="submit" className="btn-custom primary">Login</button>          
          </form>
        </div>
        </>
    )
}
export default AdminForm