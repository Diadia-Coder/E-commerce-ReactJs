import React from 'react';
import LogoWith from '../img/logowhite.png';

function footer() {
  return (
    <footer className="bd-footer pt-3 py-md-3 mt-1 bg-dark">
      <div className="container py-md-3 px-4 px-md-3 text-white">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <a className="d-inline-flex align-items-center mb-2 text-white text-decoration-none" href="/">
              <img src={LogoWith} className="logo-footer" alt="Footer" />
              <span className="fs-2">Sénégal</span>
            </a>
          </div>
          <div className="col-4 col-lg-3 offset-lg-1 mb-3 ">
            <h4>Navigation</h4>
            <ul className="list-unstyled fs-3">
              <li className="mb-2"><a href="/" className="text-warning text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="/produit" className="text-warning text-decoration-none">Produit</a></li>
              <li className="mb-2"><a href="/a-propos" className="text-warning text-decoration-none">A Propos</a></li>
              <li className="mb-2"><a href="/contact" className="text-warning text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-3 col-lg-3 mb-3">
            <h4>Me Contacter</h4>
            <ul className="list-unstyled fs-3">
              <li className="mb-2"><a href="/email" className="text-warning text-decoration-none">dioufmarahib1@gmail.com</a></li>
              <li className="mb-2"><a href="/email" className="text-warning text-decoration-none">+221 78 395 31 17</a></li>
              <li className="mb-2"><a href="/email" className="text-warning text-decoration-none">Hlm Grand Yoff</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-warning h-50 text-center m-0">
        <p>Tous droits réservés | Eyfel Sénégal | 2023</p>
      </div>
    </footer>
  );
}

export default footer;
