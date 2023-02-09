import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productAction';

function ProductsPage() {
  // category = props.match.params.id ? props.match.params.id : '';

  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);
  const handleAddToCart = () => {
    navigate('/cart/' + id);
  };

  return (
    <div className="container">
      <div className="row my-2 py-2">
        <div className="col-12 ms-2">
          <h1 className="display-6 fw-bolder"> Notre Game de produits</h1>
        </div>
        <hr className="bg-warning h-15" />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card">
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image} className="card-img-top h-45 w-50" alt="..." />
                  </Link>
                  <div className="card-body text-center">
                      <h5 className="card-title fs-5 fw-bolder mt-1">{product.name}</h5>
                      <p className="card-text fs-5 fw-normal">{product.description}</p>
                      <p className="card-text fs-5 fw-bold ">
                        {product.price}
                        {' '}
                        Fcfa
                      </p>
                      <button onClick={handleAddToCart} className="btn btn-warning fs-5 fw-bold mt-2">Ajouter Au Panier</button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
