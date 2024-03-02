import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const {cart}=useSelector((state)=> state);
  return <div>
    <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
    <NavLink to='/'><img src="../logo.png" alt="" className="h-14" /></NavLink>
      
      <div className="flex flex-row justify-between items-center font-medium mr-5 space-x-6 text-slate-100">
      <NavLink to='/'><p className="hover:text-green-600">Home</p></NavLink>
      <NavLink to='/cart'>
      <div className="relative">
      <FaShoppingCart className="text-2xl hover:text-green-600" />
      {cart.length>0 && 
      <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center
      items-center animate-bounce rounded-full text-white">{cart.length}</span>}
      </div>
      </NavLink>
      </div>
    </div> 
  </div>;
};

export default Navbar;
