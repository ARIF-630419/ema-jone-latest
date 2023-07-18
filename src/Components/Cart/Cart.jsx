import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ cart, handleClearCart, children }) => {
  let totalprice = 0;
  let totalshipping = 0;
  let quantity = 0;
  for (const product of cart) {
    totalprice = totalprice + product.price * product.quantity;
    totalshipping = totalshipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalprice * 7) / 100;
  const grandTotal = totalprice + totalshipping + tax;
  return (
    <div className="cart-details">
      <h4>summary details</h4>
      <p>selected item: {quantity}</p>
      <p>Total price: {totalprice}</p>
      <p>Total shipping: {totalshipping}</p>
      <p>Tex: {tax.toFixed(2)}</p>
      <p>Grand Total: {grandTotal.toFixed(2)}</p>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
