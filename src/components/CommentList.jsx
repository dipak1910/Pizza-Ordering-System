import { collection, doc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/firebaseConfig"

function CommentList(){
  let[reviews,setReviews] = useState([])
  useEffect(()=>{
    getReviews()
  },[reviews])

  async function getReviews(){
    let colref = collection(db,"reviews")
    onSnapshot(colref,function(snapShot){

      let result = []
      snapShot.docs.forEach(function(doc){
        result.push({id:doc.id,...doc.data()})
      })
      setReviews(result)
    })
  }
    return(

        <div className="comments-list">
              <ul>
                {reviews.map((review)=>{
                  return (
                  <li className="comment-item">
                  <img src="/slices/assets/img/people/1.jpg" alt="comment author" />
                  <div className="comment-body">
                    <h5>{review.name}</h5>
                    <div className="ct-rating">
                <i className={`fas fa-star ${review.stars>=1 && 'activestars'}`} onClick={()=>setStars(1)} />
                <i className={`fas fa-star ${review.stars>=2 && 'activestars'}`} onClick={()=>setStars(2)} />
                <i className={`fas fa-star ${review.stars>=3 && 'activestars'}`} onClick={()=>setStars(3)} />
                <i className={`fas fa-star ${review.stars>=4 && 'activestars'}`} onClick={()=>setStars(4)} />
                <i className={`fas fa-star ${review.stars>=5 && 'activestars'}`} onClick={()=>setStars(5)} />
                
              </div>
                    <span>Posted on: January 13 2020</span>
                    <p>{review.comment}</p>
                  </div>
                </li>
                )
                })}
              
              </ul>
            </div>
    )
}
export default CommentList