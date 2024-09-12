import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase/firebaseConfig"
import { error, success } from "../utilis/message"

function CommentForm(){
  let[name,setName]=useState()
  let[email,setEmail]=useState()
  let[comment,setComment]=useState()

  let [stars,setStars] = useState(0)


  let {id}=useParams()

  async function addreview(e){
    e.preventDefault()

    let colref = collection(db,"reviews")
    try{
      await addDoc(colref,{
        id:Number(id),
        name,
        email,
        comment,
        stars
      })
      success("Thank for review")

      setName("")
      setEmail("")
      setComment("")
    }catch(err){
      console.log(err)
      error("Review Failed")
    }
  }
      
    return(
      
        <>
         <h4>Leave a Review</h4>
            <div className="ct-rating-wrapper">
              <div className="ct-rating">
                <i className={`fas fa-star ${stars>=1 && 'activestars'}`} onClick={()=>setStars(1)} />
                <i className={`fas fa-star ${stars>=2 && 'activestars'}`} onClick={()=>setStars(2)} />
                <i className={`fas fa-star ${stars>=3 && 'activestars'}`} onClick={()=>setStars(3)} />
                <i className={`fas fa-star ${stars>=4 && 'activestars'}`} onClick={()=>setStars(4)} />
                <i className={`fas fa-star ${stars>=5 && 'activestars'}`} onClick={()=>setStars(5)} />
                
              </div>
              <span>Your Review</span>
              </div>
        <div className="comment-form">
              <form onSubmit={addreview}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" className="form-control" placeholder="Full Name" name="fname" value={name} onChange={(e)=>setName(e.target.value)} />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" className="form-control" placeholder="Email Address" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea className="form-control" placeholder="Type your comment..." name="comment" rows={7} value={comment} onChange={(e)=>setComment(e.target.value)} />
                  </div>
                </div>
                <button type="submit" className="btn-custom primary" name="button">Post Review</button>
              </form>
            </div>
        </>
    )
}
export default CommentForm