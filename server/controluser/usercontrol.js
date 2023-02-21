import User from "../schema/schema.js";

export const Adduser=async(req,res)=>{
    const user1=req.body
    const newuser=new User(user1)
    console.log(newuser)
    try{
        await newuser.save();
        res.status(201).json(newuser)
    }catch(error){
       res.status(409).json({message:error.message}) ;
    }
}

export const getusers=async(req,res)=>{
    try{
 const users=  await  User.find()
 res.status(200).json(users);
    }catch(err){
  res.status(404).json("Message",err)
    }
}

export const getuser=async(req,res)=>{
 
    try{
 const user=  await  User.find({_id:req.params.id})
 res.status(200).json(user);
    }catch(err){
  res.status(404).json("Message",err)
    }
}

export const edituser=async(req,res)=>{
 let user=req.body;
 const edituser=new User(user);
  try{
  await  User.updateOne({_id:req.params.id},edituser)
res.status(200).json(edituser);
  }catch(err){
res.status(404).json("Message",err)
  }
}

export const deleteuser=async(req,res)=>{
try{
  await User.deleteOne({_id:req.params.id})
  res.status(200).json("Delete Successfully");

}catch(err){
  console.log(err)
}
}