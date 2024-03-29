import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[]);

  return (
    <div className="w-full h-full flex flex-col gap-y-8 justify-center items-center overflow-hidden ">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );

}
