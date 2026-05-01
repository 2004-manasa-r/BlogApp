import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav style={{display:"flex", gap:"60px", padding:"15px", backgroundColor:"black"}}>
            <NavLink to="/" style={{textDecoration:"none", color:"white",fontWeight:"900px",fontSize:"20px"}}>Home</NavLink>
            <NavLink to="/posts" style={{textDecoration:"none", color:"white",fontWeight:"900px",fontSize:"20px"}}>Posts</NavLink>
            <NavLink to="/authors" style={{textDecoration:"none", color:"white",fontWeight:"900px",fontSize:"20px"}}>Authors</NavLink>
        </nav>
    )

}
export default Navbar;