import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';

function OrderPage(props) {
    const orderDetails = useSelector(state => state.orderDetails);
    const { order } = orderDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(detailsOrder(props.match.params.id));
        return () => {
        };
      }, []);
    
    return (
        <div>
         <ul className="cart-list-container">
            <li>
                <h3>
                   Shopping Cart
                </h3>
                <div>
                    Price
                </div>
          </li>
           {
            order.orderItems.length === 0 ?
                <div>
                    Cart is empty
                </div>
            :
            order.orderItems.map(item =>
                <li key={item._id}>
                <div className="cart-image">
                    <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                    <div>
                    <Link to={"/product/" + item.product}>
                        {item.name}
                    </Link>

                    </div>
                    <div>
                    Qty: {item.qty}
                    </div>
                </div>
                <div className="cart-price">
                    ${item.price}
                </div>
                </li>
            )
        }
        </ul>
    </div>
    )
}

export default OrderPage
