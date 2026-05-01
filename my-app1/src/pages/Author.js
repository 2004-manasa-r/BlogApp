import { useEffect, useState } from "react";

function Authors(){

    const[users,setUsers] = useState([]);
    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users")
       .then(res=> res.json())
       .then(data=>setUsers(data));
     }, []);
    
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Authors</h1>
            <div style={{border:"1px solid black",display:"grid",gridTemplateColumns:"repeat(2,1fr)",margin:"80px",padding:"30px"}}>
                {users.map(u=>(
                <p style={{fontSize:"25px",paddingLeft:"160px"}} >{u.name}</p>
            ))}
            </div>
           
        </div>
    )
}
export default Authors;