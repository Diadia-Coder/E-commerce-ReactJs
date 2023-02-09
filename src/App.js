import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import DetailProduct from './pages/ProductDetail';
import ProductListe from './pages/ProductsPage';
import Products from './pages/Product';
import Commande from './pages/OrdersPage';
import Header from './component/navbar';
import Footer from './component/footer';
import CartPages from './pages/CartPages';

function App() {
  return (
    <BrowserRouter className="container container-scroller" >
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/products" element={<ProductListe />} />
          <Route path="/productsliste" element={<Products />} />
          <Route path="/cart/:id " element={<CartPages />} />
          <Route path="/orders" element={<Commande />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
