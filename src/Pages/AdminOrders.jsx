import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import SubHeader from "../components/SubHeader"
import TopNav from "../components/TopNav"
import { collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { useUserStore } from "../store/userStore"
import {success} from "../utilis/message"
function AdminOrder(){
  let user = useUserStore((state)=>state.user)


  let[orders,setOrders] = useState([])
  useEffect(()=>{
    getOrders()
  },[])

  async function getOrders(){
    let colref = collection(db,"orders")
    // let q = query(colref,where("uid","==",user.uid))

    onSnapshot(colref,function (snapShot){
      let result = []
      snapShot.docs.forEach((doc)=>{
        console.log(doc)
        result.push({id:doc.id,...doc.data()})
      })
      setOrders(result)
    })
  }

 async function updatestatus(id,status){
  console.log(id,status)
    let docref = doc(db,"orders",id)
    updateDoc(docref,{
      status:status
    })
    success("Order Status Updated")
  }
    return (
        <>
        
<TopNav/>
  <SubHeader pagetitle="Admin Order" />
  {/* Checkout Start */}
  <section className="section">
    <div className="container">
      <form method="post">
        <div className="row">
          <div className="col-xl-12 checkout-billing">
            <table className="ct-responsive-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Address</th>
                  <th>Total Price</th>
                  <th>Order Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders && orders.map((order)=>(
                  <tr>
                  <td data-title="Product">
                  {order.id}
                  </td>
                  <td data-title="Product">{order.fname}</td>
                  <td data-title="Quantity">{order.address}</td>
                  <td data-title="Total"> <strong>{order.total}$</strong> </td>
                  <td data-title="Total">
                    <select onChange={(e)=>{updatestatus(order.id,e.target.value)}}  value={order.status}>
                        <option value="Placed">Placed</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  </section>
 <Footer/>

        </>
    )
}
export default AdminOrder