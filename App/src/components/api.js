
import axios from "axios";

const url='http://localhost:8001';

export const adduser=async(data)=>{
    try{
        return await axios.post(`${url}/add`,data).then((res)=>console.log(res));
    }catch(error){
        console.log('Error While calling add user Api',error)
    }
}


export  const getusers=async()=>{
    try{
  return await axios.get(`${url}/all`)
    }catch(err){
        console.log(err)
    }
}

export const getuser=async(id)=>{
    try{
   return await axios.get(`${url}/${id}`)
    }catch(err){
        console.log("message",err)
    }
}

export const edituser=async(newdata,id)=>{
 try{
  return await axios.put(`${url}/${id}`,newdata)
 }catch(err){
    console.log(err)
 }
}

export const deleteuser=async(id)=>{
    try{
        return await axios.delete(`${url}/${id}`)
    }catch(err){
        console.log(err)
    }
}