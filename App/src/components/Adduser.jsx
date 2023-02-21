import {FormControl,FormGroup,InputLabel,Input,Button} from '@mui/material';
import {useState} from 'react';
import { adduser } from './api';

export default function Adduser(){
  const init={
    name:"",
    username:"",
    email:'',
    phone:'',
}
const [data,setdata] =useState(init)                                                                                                                             ;

const onValueChange=(e)=>{
  setdata({...data,[e.target.name]:e.target.value})
   
}
const adduserdetails=async(e)=>{
  e.preventDefault();
  await adduser(data)

  console.log(data)
}

    return (
        <div style={{display:"grid",margin:"auto",width:"100%",gap:"10px"}}>
            <FormGroup style={{display:"grid",margin:"auto",width:"40%",gap:"20px",marginTop:"20px"}}>
                <FormControl>
           <InputLabel>
               Name
                 </InputLabel>
                 <Input value={data.name}  name='name' onChange={(e)=>onValueChange(e)}/>
                </FormControl>
                <FormControl>
           <InputLabel>
               Username
                 </InputLabel>
                 <Input value={data.username} name="username" onChange={(e)=>onValueChange(e)}/>
                </FormControl>
                <FormControl>
           <InputLabel>
               Email
                 </InputLabel>
                 <Input onChange={(e)=>onValueChange(e)} value={data.email} name="email"/>
                </FormControl>
                <FormControl>
           <InputLabel>
               Phone
                 </InputLabel>
                 <Input onChange={(e)=>onValueChange(e)} value={data.phone} name="phone"/>
                </FormControl>
              <FormControl>
               <Button onClick={adduserdetails} variant='contained'>Add User</Button>
              </FormControl>
            </FormGroup>
        </div>
    )
}