
import mongoose from "mongoose";

const {Schema} = mongoose;

const UserSchema = new Schema({
   name:{
    type: String,
    required: true
   },
   email:{
    type: String,
    required: true,
    unique: true
   },
   phone:{
    type: Number,
    required: true
   },
   password:{
    type: String,
    required: true
   }

});


const User = mongoose.model('user', UserSchema);


export default User;
