import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail(){
    const{ id } = useParams();

    const[post, setPost]=useState(null);
    const[author, setAuthor] = useState(null);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(res=> res.json())
       .then(data=>{
        setPost(data);
        return fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`);
       })
       .then(res => res.json())
       .then(user => setAuthor(user));
     }, [id]);


     if(!post){
        return <p>Loading....</p>
     };

    return(
        <div style={{width:"900px",border:"1px solid black",marginTop:"90px",marginLeft:"310px",padding:"30px"}}>
            <h1 style={{textAlign:"center"}}>Title<br/> {post.title}</h1>
            <p>Post: {post.body}</p>

            <h3 style={{textAlign:"center"}}>Author: {author?.name}</h3>
        </div>
    );
}
export default PostDetail;