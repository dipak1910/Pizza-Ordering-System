import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function Menuitem(props) {
  let { id, title, description, url, price } = props;
  let cart = useCartStore((state) => state.cart);
  let addToCart = useCartStore((state) => state.addToCart);
  let clearCart = useCartStore((state) => state.clearCart);

  function addpizza() {
    addToCart({...props,quantity:1,tprice:price})
    console.log(cart);
  }
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="product">
          <div className="favorite">
            <i className="far fa-heart" />
          </div>
          <Link  className="product-thumb" to={`/menu/${id}`}>
            <img src={url} alt="menu item" />
          </Link>
          <div className="product-body">
            <div className="product-desc">
              <h4>
                <a href="menu-item-v1.html">{title}</a>
              </h4>
              <p>{description}</p>
            </div>
            <div className="product-controls">
              <p className="product-price">{price}$</p>
              <button onClick={addpizza} className="order-item btn-custom btn-sm shadow-none">
                Order <i className="fas fa-shopping-cart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menuitem;
