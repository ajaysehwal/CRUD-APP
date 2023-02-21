
import {AppBar,Toolbar,styled} from "@mui/material";
import { Link } from "react-router-dom";
export default function Navbar(){
    return (
        <div style={{display:'flex',justifyContent:"space-around",padding:"0px",background:"blue",color:"white"}}>
           <h1>CRUD APP</h1>
    <div style={{display:"flex",gap:"30px"}}>
      <p>Add New Users</p>
     <Link to="/dashboard"><p style={{color:"white"}}>Dashboard</p></Link> 
      <p>Login / Sign up</p>
    </div>
        </div>
    )
}