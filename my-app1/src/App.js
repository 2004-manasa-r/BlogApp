import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authors from "./pages/Author";
import PostDetail from "./pages/PostDetail";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";


function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route  path="/"  element={<Home/>}/>
    <Route  path="/posts"  element={<Posts/>}/>
    <Route  path="/posts/:id"  element={<PostDetail/>}/>
    <Route  path="/authors"  element={<Authors/>}/>
    <Route  path="*"  element={<NotFound/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
