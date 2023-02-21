import mongoose, { plugin } from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const UserSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:String
})
autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin,'user')
 const User =mongoose.model('user',UserSchema);

export default User;