import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts(){
   const[posts,setPosts]=useState([]);
   const[search,setSearch]= useState("");
   
     useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/posts")
       .then(res=> res.json())
       .then(data=>setPosts(data));
     }, []);

     const filtered= posts.filter(p=>
        p.title.toLowerCase().includes(search.toLowerCase())
     ) ; //danvinci
   
       return(
           <div >
               <h1 style={{textAlign:"center"}}>All Posts</h1>
               <input
               style={{padding:"10px", width:"570px",marginLeft:"480px",border:"1px solid black",borderRadius:"30px"}}
               type="text"
               placeholder="Search by tittle"
               onChange={(e)=> setSearch(e.target.value)}
               />
               <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"60px",marginTop:"70px"}} >
              
                    {filtered.map(p=>(
                  <div key={p.id} style={{ border:"1px solid black", padding:"25px",borderRadius:"10px",textAlign:"center",margin:"20px"}}>
                     <Link to={`/posts/${p.id}`} style={{textDecoration:"none"}}><b>Title:</b><br/> {p.title}</Link>
                  </div> 
                 
               ))}
           </div>
            </div>
       );
}
export default Posts;