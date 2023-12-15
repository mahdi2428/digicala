
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './page/home';
import Category from './page/category';
import Product from './page/product';
import StickyBox from "react-sticky-box";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
