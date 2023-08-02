import './App.css';
import Product from './Product';
import Data from './Data.json'
import './Header'

function App() {
  return (
    <div className="App">
      {


        Data.products.map((item,key) =>


        <Product key ={key} title={item.title} thumbnail={item.thumbnail} stock={item.stock}
        price={item.price} // price
        description = {item.description}  // description
        
        ></Product>
        )
      }
    </div>
  );
}

export default App;
