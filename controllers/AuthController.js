import {registerUser} from '../services/authService.js';

//Register
const register = async (req,res) =>
{   
    const{username,email,password,confirmPassword, role} = req.body;
    try{
        const user = await registerUser(username,email,password,confirmPassword, role);
        
        const data = {
            id: user._id,
            username: user.username,
            email: user.email,
        };
        
        res.json({success: true, data, message: 'Đăng ký thành công'});
    }catch(error){
        res.status(400).json({success: false, message: error.message});
    }
}

export {register};