import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String, required: true},
    email: {type: String, required: true},
    role: {type: String, enum: ["admin","user"], default: 'user'},
    isActive: {type: Boolean, default: true},
    vefiryEmail: {type: Boolean, default: false, },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

const User = mongoose.model('User', userSchema);
export default User;