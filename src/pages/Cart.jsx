import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Cart = () => {
  const {cart}=useSelector((state)=> state);
  const [totalamount,setTotalamount]=useState(0);

  useEffect(()=>{
    let amt=0;
    for (let item of cart){
      amt+=item.price;
    }

    setTotalamount(amt);
  },[cart]);
  return <div>
  {
    cart.length>0?(
      <div className="flex flex-row gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap h-full min-h-[100vh]">
        
          <div className="lg:w-[70%] transition-all duration-300 ease-in">
          {cart.map((item,index)=>{
            return (<CartItem item={item} index={index}></CartItem>)
          })}
          </div>

          <div className="md:w-[30%] flex flex-col justify-between">
          <div className="mt-10">
            <div className="text-green-700 text-xl uppercase font-[600]">Your cart</div>
            <div className="text-5xl font-[600] text-green-600 uppercase mb-4">Summary</div>

            <div className="font-[600] text-xl text-green-700">
              <span>Total Items: {cart.length}</span>
            </div>

          </div>

          <div className="mb-20">
            <p className="text-green-700 text-xl font-[600] mb-5">Total Amount: <span className="font-bold text-black ml-1">${totalamount.toFixed(2)}</span></p>
            <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-green-600
            border-2 border-green-600 hover:bg-white hover:text-green-600 transition-all duration-300 ease-in">Check out now</button>
          </div>
          </div>
          
        
      </div>
    ):
    (<div className="h-[100vh] w-full flex flex-col justify-center items-center gap-5">
      <h2 className="text-2xl text-green-700 font-[600]">Your cart is empty</h2>
      <Link to='/'><button className="bg-green-600 rounded-lg text-white
      py-2.5 px-2 w-full text-xl font-semibold border-2 border-green-600 hover:bg-white hover:text-green-600">Start shopping</button></Link>
    </div>)
  }
  </div>;
};

export default Cart;
