import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Nav from "./components/Navbar";
const App = () => {
  return (
    <div>
    <div className="bg-slate-900"><Nav></Nav></div>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  )
};

export default App;
