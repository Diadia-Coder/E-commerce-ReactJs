import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productAction';

function ProductDetail() {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useNavigate();
   
  //const productId=;

  useEffect(() => {
    dispatch(detailsProduct(id));
    return () => {
      //
    };
  }, []);
  const handleAddToCart = () => {
    history(`/cart/${id}?qty=${qty}`)
  };
  return (
    <div className="bg-white">
      <div className="back-to-result m-5">
        <Link to="/" className="btn btn-success">Retour</Link>
      </div>
      <div className="row m-3 p-5">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>
            {error}
            {' '}
          </div>
        ) : (
          <>
            <div className="col-md-4">
              <a href={product.image}>
                <img src={product.image} className="img-fluid rounded-end" alt="produit" />
              </a>
            </div>
            <div className="col-md-8 text-start">
              <div className="card-body">
                <h4 className="card-title fw-bolder">{product.name}</h4>
                <h4 className="card-text mt-2 fw-bold">
                  {product.price}
                  {' '}
                  F cfa
                </h4>
                <p className="card-text mt-2">{product.description}</p>
                <h5 className="carrd-text mt-2 mb-4 fw-normal">
                  Qty:
                  {' '}
                  <select
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </h5>
                <button type="button" className="btn btn-warning w-50 h-30 text-center fw-bold fs-4 mt-4" onClick={handleAddToCart}>Ajouter Au Produit</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
