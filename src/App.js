import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Header from './Component/Header/Header.jsx'
import Product from './Component/Product/Product.jsx'
import {DataProvider} from './Component/data/DataProvider'
import Details from './Component/Details/Details.jsx'
import Cart from './Component/Cart/Cart.jsx'

function App() {
  return (
    <div className="App">
      <DataProvider>
          <Header />
          <section>
            <Routes>
              <Route path='Products' element ={ <Product /> } /> 
              <Route path='Products/:id' element ={ <Details /> } /> 
              <Route path='Cart' element ={ <Cart /> } /> 
            </Routes>
          </section>
      </DataProvider>
    </div>
  );
}
export default App;
