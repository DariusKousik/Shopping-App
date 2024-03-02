import { useState } from "react";
import { products } from "../data";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts,setPosts]=useState(products);

  console.log(posts);
  return <div>{
    posts.length > 0 ? (
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {
          posts.map((post)=>{return (<Product post={post}></Product>)})
        }
      </div>
    ):(
      <div className="flex justify-center items">Data Not Found</div>
    )
  }</div>
};

export default Home;
