import React, {useState} from "react";
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/front/Routes/Routes";

const App = () => {
  const { productsItems } = data;
  const [cartItems, setCartItems] = useState([]);
const handleAddProduct = (product)=>{
 
   const productExist =  cartItems.find((item)=>item.id === product.id);
  if(productExist){
    setCartItems(
      cartItems.map((item)=>item.id === product.id?
      {...productExist, quantity: productExist.quantity + 1}
      :item
      ))
    
  }else{
    setCartItems([...cartItems, {...product, quantity:1}])
  }
  }

  const handleRemoveProduct = (product)=>{

    const productExist =  cartItems.find((item)=>item.id === product.id);
    if(productExist.quantity === 1){
      setCartItems(cartItems.filter((item)=>item.id !==product.id));
    }else{
      setCartItems(
        cartItems.map((item)=> item.id === product.id?
        {...productExist, quantity: productExist.quantity - 1}:item
      )
      );
    }
  }
  return (
    <div>
      <Router>
        <Header />
        <Routes productItems={productsItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
      </Router>
    </div>
  );
};

export default App;
