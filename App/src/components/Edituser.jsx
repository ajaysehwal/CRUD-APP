import {FormControl,FormGroup,InputLabel,Input,Button} from '@mui/material';
import {useState,useEffect} from 'react';
import { edituser } from './api';
import { getuser } from './api';
import { useParams ,useNavigate} from 'react-router-dom';
export default function Editusers(){
  const init={
    name:"",
    username:"",
    email:'',
    phone:''
}
const [newdata,setnewdata] =useState(init);

 const {id}=useParams()
 const navigate=useNavigate();
const onValueChange=(e)=>{
  setnewdata({...newdata,[e.target.name]:e.target.value})
   
}
const edituserdetails=async(e)=>{
  await edituser(newdata,id)
  navigate('/dashboard')
  // console.log(data)
}
useEffect(()=>{
    loadUserdetail();
},[])

const loadUserdetail=async()=>{
    const res=await getuser(id)
    setnewdata(res.data[0])
}

// const arr=[];
// arr.push(newdata)
// console.log(arr)
    return (
        <div style={{display:"grid",margin:"auto",width:"100%",gap:"10px"}}>
              <div></div>
            <FormGroup style={{display:"grid",margin:"auto",width:"40%",gap:"20px",marginTop:"20px"}}>
                <FormControl>
             
           <InputLabel>
               Name
                 </InputLabel>
                 <Input value={newdata.name}  name='name' onChange={(e)=>onValueChange(e)}/>
                </FormControl>
                <FormControl>
           <InputLabel>
               Username
                 </InputLabel>
                 <Input value={newdata.username} name="username" onChange={(e)=>onValueChange(e)}/>
                </FormControl>
                <FormControl>
           <InputLabel>
               Email
                 </InputLabel>
                 <Input onChange={(e)=>onValueChange(e)} value={newdata.email} name="email"/>
                </FormControl>
                <FormControl>
           <InputLabel>
               Phone
                 </InputLabel>
                 <Input onChange={(e)=>onValueChange(e)} value={newdata.phone} name="phone"/>
                </FormControl>
              <FormControl>
               <Button onClick={()=>edituserdetails()} variant='contained'>Edit User</Button>
              </FormControl>
            </FormGroup>
        </div>
    )
}