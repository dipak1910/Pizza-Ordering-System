import { useState } from "react"
import { error, success } from "../utilis/message"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

function Newsletter(){
  let[email,setEmail]=useState("")

  async function signup(e){
    e.preventDefault()
    if(email == ""){
      error("Please enter email for signup!")
      return
    }
    try{
      let colref = collection(db,"newsletter")
      await addDoc(colref,{email:"email"})
      success("Thank you for subscribing!")
      setEmail("")
    }catch(err){
      console.log(err)
    }
  }
    return(
        <>
  <section className="section bg-center bg-cover dark-overlay" style={{backgroundImage: 'url("/slices/assets/img/bg/1.jpg")'}}>
    <div className="container">
      <div className="ct-newsletter">
        <div className="section-title-wrap section-header">
          <h2 className="title">Join Our Newsletter</h2>
          <p className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <form onSubmit={signup}>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter your email address"  />
          <button type="submit" className="btn-custom primary" name="button"> Submit <i className="far fa-paper-plane" /> </button>
        </form>
      </div>
    </div>
  </section>
        </>
    )
}
export default Newsletter