import {registerUser} from '../services/authService.js';

//Register
const register = async (req,res) =>
{   
    const{username,email,password,confirmPassword, role} = req.body;
    try{
        const data = await registerUser(username,email,password,confirmPassword, role);
        
        res.json({success: true,
             data: {
                id: data._id,
                username: data.username,
                email: data.email,
            },
              message: 'Đăng ký thành công'});
    }catch(error){
        res.status(400).json({success: false, message: error.message});
    }
}

export {register};