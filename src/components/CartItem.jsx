import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/cartSlice";
import toast from "react-hot-toast";
const CartItem = ({item}) => {
  const dispatch=useDispatch();
  const removeitem=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed")
  }
  return (
    <div className="flex flex-col w-[450px] mt-6  justify-center items-center gap-16 h-[180px] rounded-[30px] 
    transition-all duration-300 ease-in shadow-2xl shadow-blue-500/20">
      <div className="flex justify-between gap-8 h-[200px] w-[400px]">

<div>
  <img src={item.image} alt="" className='h-[120px] mt-4' />
</div>
<div className="h-[180px]">
  <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
  <h2 className="w-40 text-gray-500 font-normal text-[12px] text-left">{item.description.split(" ").slice(0,10).join(" ")+"..."}</h2>
  <div className="flex justify-between mt-4">
    <p className="text-green-600 font-semibold">${item.price}</p>
    <div><button onClick={removeitem}><MdDelete className="text-2xl hover:text-red-600" /></button>
    </div>
  </div>
</div>
</div>
    </div>
  )
};

export default CartItem;
