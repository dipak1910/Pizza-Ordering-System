import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import TopNav from "../components/TopNav"
import { useCartStore } from "../store/cartStore"
import SubHeader from "../components/SubHeader"

function UserCart(){
  // let {cart,clearCart}=useUserStore((state)=>({
  //   cart : state.cart,
  //   clearCart: state.clearCart
  // }))

  let cart = useCartStore((state)=>state.cart)
  let updateCart = useCartStore((state)=>state.updateCart)
  let removeFromCart = useCartStore((state)=>state.removeFromCart)
  let total = useCartStore((state)=>state.total)

  let navigate = useNavigate()
    return(
        <>
 
 
<Navbar/>
  <div className="aside-overlay aside-trigger" />
  <TopNav/>
  <SubHeader pagetitle="Cart"/>
  {/*Cart Start */}
  <section className="section">
    <div className="container">
      {/* Cart Table Start */}
      <table className="ct-responsive-table">
        <thead>
          <tr>
            <th className="remove-item" />
            <th>Product</th>
            <th>Price</th>
            <th>Qunantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart && cart.map((cartitem,index)=>{
            return(
              <tr>
              <td className="remove">
                <button onClick={()=>{
                  removeFromCart(cartitem.id)
                }} type="button" className="close-btn close-danger remove-from-cart">
                  <span />
                  <span />
                </button>
              </td>
              <td data-title="Product">
                <div className="cart-product-wrapper">
                  <img src="/slices/assets/img/prods-sm/1.png" alt="prod1" />
                
                </div>
              </td>
              <td data-title="Price"> <strong>{cartitem.price}$</strong> </td>
              <td className="quantity" data-title="Quantity">
                <input type="number" className="qty form-control" value={cartitem.quantity} onChange={(e)=>{
                  updateCart(index,Number(e.target.value))
                }} />
              </td>
              <td data-title="Total"> <strong>{cartitem.tprice}$</strong> </td>
            </tr>
            )
          })}
         
          {/* <tr>
            <td className="remove">
              <button type="button" className="close-btn close-danger remove-from-cart">
                <span />
                <span />
              </button>
            </td>
            <td data-title="Product">
              <div className="cart-product-wrapper">
                <img src="/slices/assets/img/prods-sm/5.png" alt="prod1" />
                <div className="cart-product-body">
                  <h6> <a href="#">Vegetarian</a> </h6>
                  <p>14 Inch</p>
                </div>
              </div>
            </td>
            <td data-title="Price"> <strong>9.99$</strong> </td>
            <td className="quantity" data-title="Quantity">
              <input type="number" className="qty form-control" defaultValue={1} />
            </td>
            <td data-title="Total"> <strong>9.99$</strong> </td>
          </tr> */}
          {/* <tr>
            <td className="remove">
              <button type="button" className="close-btn close-danger remove-from-cart">
                <span />
                <span />
              </button>
            </td>
            <td data-title="Product">
              <div className="cart-product-wrapper">
                <img src="/slices/assets/img/prods-sm/3.png" alt="prod1" />
                <div className="cart-product-body">
                  <h6> <a href="#">Four Cheese</a> </h6>
                  <p>21 Inch</p>
                  <p>Extra Cheese</p>
                </div>
              </div>
            </td>
            <td data-title="Price"> <strong>13.99$</strong> </td>
            <td className="quantity" data-title="Quantity">
              <input type="number" className="qty form-control" defaultValue={1} />
            </td>
            <td data-title="Total"> <strong>13.99$</strong> </td>
          </tr> */}
        </tbody>
      </table>
      {/* Cart Table End */}
      {/* Coupon Code Start */}
      <div className="row">
        <div className="col-lg-5">
          <div className="form-group mb-0">
            <div className="input-group mb-0">
              <input type="text" className="form-control" placeholder="Enter Coupon Code" aria-label="Coupon Code" />
              <div className="input-group-append">
                <button className="btn-custom shadow-none" type="button">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Coupon Code End */}
      {/* Cart form Start */}
      <div className="row ct-cart-form">
        <div className="offset-lg-6 col-lg-6">
          <h4>Cart Total</h4>
          <table>
            <tbody>
              <tr>
                <th>Subtotal</th>
                <td>{total}$</td>
              </tr>
              <tr>
                <th>Tax</th>
                <td> 0$ <span className="small">(0%)</span> </td>
              </tr>
              <tr>
                <th>Total</th>
                <td> <b>{total}$</b> </td>
              </tr>
            </tbody>
          </table>
          <button onClick={()=>{
            navigate("/checkout")
          }} className="btn-custom primary btn-block">Proceeed to Checkout</button>
        </div>
      </div>
    </div>
  </section>
<Footer/>



        </>
    )
}
export default UserCart 