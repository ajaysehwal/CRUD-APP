import mongoose from "mongoose";
 const Connection=async(username,password)=>{
    const url=`mongodb+srv://${username}:${password}@cluster0.mxtfjo6.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        }).then((res)=>console.log("db done"))
    }catch(err){
        console.log(err)
    }
 }
 export default Connection
// import mongodb from  "mongodb";
// const MongoClient = mongodb().MongoClient;
// const uri = "mongodb+srv://ajaysehwal786:ajay@999@crud-app.drey6tj.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//   client.close();
// });
// export default client
