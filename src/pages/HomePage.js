import React from 'react';
import Toujours from '../img/Toujours.png';
import Product from './ProductsPage';

function HomePage() {
  return (
    <div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" />
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1" />
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/accueil2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/accueil.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/imgproduct.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="toujous w-100 h-95 bg-white text-center">
        <img src={Toujours} alt="LogoMain" />
      </div>
      <Product />
    </div>
  );
}

export default HomePage;
