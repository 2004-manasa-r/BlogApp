import { useEffect, useState } from "react";

function Home(){

  const[posts,setPosts]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=> res.json())
    .then(data=>setPosts(data.slice(0,5)));
  }, []);

    return(
        <div style={{marginTop:"0px"}}>
            <p style={{textAlign:"center",fontSize:"4rem",fontWeight:"bold"}}>Latest 5 Posts</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap: "60px",height:"400px",  padding:"25px"}}>
                 {posts.map(p=>(
                <p key={p.id} style={{border:"2px solid black", padding:"25px",borderRadius:"20px"}}><b>Title:</b><br/> {p.title}</p>
                
            ))}
            </div>
        </div>
    )
}
export default Home;