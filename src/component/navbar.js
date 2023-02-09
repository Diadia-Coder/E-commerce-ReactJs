import React from 'react';
import Logo from '../img/logo.png';
import 'font-awesome/css/font-awesome.min.css';

function navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-warning py-3  border-0 shadow-sm">
      <div className="container align-content-center">
        <a className="navbar-brand fs-2 fw-bold" href="/">
          <img src={Logo} className="logo" alt="logoEyfel" />
          Sénégal
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto mb-3 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"> Accueil </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/products">
                Produit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/a-propos">A Propos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/a-propos">Contact</a>
            </li>
          </ul>
          <div className="d-flex align-item-center fs-1">
            <a className="btn btn-outline-dark me-1 ms-2" href="/signin">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-box-arrow-in-right me-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
              Se Connecter
            </a>
            <a className="btn btn-outline-dark me-1 ms-2" href="/register">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-person-add me-2" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
              </svg>
              Se m'inscrire
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
