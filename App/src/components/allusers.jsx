import { TableCell, TableHead, TableRow,Table, TableBody,Button } from "@mui/material"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import { getusers,deleteuser } from "./api"
import { useNavigate } from "react-router-dom";
export default function Allusers(){
    const [data,setdata]=useState([]);
    const navigate=useNavigate();
useEffect(()=>{
   getalluser();
},[])
 const getalluser=async()=>{
  let res=  await getusers();
  setdata(res.data);
  // navigate('/dashboard')
 }
 const deleteuser1=async(id)=>{
    await deleteuser(id)
    getalluser();
 }
 console.log(data)
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            ID
                        </TableCell>
                        <TableCell>
                          Name
                        </TableCell>
                        <TableCell>
                            Username
                        </TableCell>
                        <TableCell>
                            Email
                        </TableCell>
                        <TableCell>
                            Phone
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(user=>(
                        <TableRow key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                             <Button component={Link} to={`/edit/${user._id}`} variant="contained" style={{background:"blue",border:"1px solid blue",color:"white",marginRight}}> Edit</Button>
                             <Button onClick={()=>deleteuser1(user._id)} variant="contained" style={{background:"red",border:"1px solid red",color:"white"}}>Delete</Button>
                            </TableCell>
                        </TableRow>
                          
                    ))}

                </TableBody>
            </Table>
        </div>
    )
}