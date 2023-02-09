import React from 'react';
import Cardlogo from '../img/logo.png';
import './apropos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function apropos() {
  return (
    <div className="card text-bg-black">
      <div className="card-img">
        <h1 className="pb-2 mb-4 text-black m-15">A Propos de Nous</h1>
        <p className="traits" />
        <img src={Cardlogo} className="img-card" alt="Cardimage" />
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>
  );
}

export default apropos;
