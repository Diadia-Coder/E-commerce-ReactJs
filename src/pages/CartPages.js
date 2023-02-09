import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

function CartPages() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart; 

  const { id } = useParams();
  const { search } = useLocation();
  const productId = id;
  const qty = search ? Number(search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);
  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>
              Panier d'expédition
            </h3>
            <div>
              Prix
            </div>
          </li>
          {
                cartItems.length === 0
                  ? (
                    <div>
                      Cart is empty
                    </div>
                  )
                  : cartItems.map((item) => (
                    <li>
                      <div className="cart-image">
                        <img src={item.image} alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div>
                          Qty:
                          <select>
                            {[...Array(item.countInStock).keys()].map((x) => <option key={x + 1} value={x + 1}>{x + 1}</option>)}
                          </select>
                          <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="cart-price">
                        F Cfa
                        {item.price}
                      </div>
                    </li>
                  ))
                }
        </ul>
      </div>

    </div>
  );
}

export default CartPages;
