import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type:String, required: true},
    class: {type: Number}

}
);

const User = mongoose.model('user',UserSchema);

export default User;