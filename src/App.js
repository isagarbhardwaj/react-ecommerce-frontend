import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Landing />} />
          <Route path={'/login'} element={<LoginSignup />} />
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/all'} element={<Category category='all' />} />
          <Route path={'/men'} element={<Category category='men' />} />
          <Route path={'/women'} element={<Category category='women' />} />
          <Route path={'/kids'} element={<Category category='kids' />} />
          <Route path={'/product'} element={<Product />} >
            <Route path=':productId' element={<Product />}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
