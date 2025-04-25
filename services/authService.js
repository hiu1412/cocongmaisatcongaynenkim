import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.js';
import env from '../common/env.js';
import validator from 'validator';

//Register 
export const registerUser = async (username, email, password, confirmPassword) => {
    try{
        const exists = await User.findOne({email});
        if(exists)
        {
            throw new Error('Email đã tồn tại');
        }

        if (!username || !email || !password || !confirmPassword) {
            throw new Error('Vui lòng điền đầy đủ thông tin');
        }

        if(!validator.isEmail(email))
        {
            throw new Error('Email không hợp lệ');
        }
        
        if(password.length<6)
        {
            throw new Error('Mật khẩu phải có ít nhất 6 ký tự');
        }

        if(password !== confirmPassword)//cái confirmPassword này không nhất cần phải có trong model useruser
        {
            throw new Error('Mật khẩu không khớp');
        }

        //băm
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create
        const newUser = new User ({
            username,
            email,
            password: hashedPassword,
            role: 'user',
            isActive: true
        })
        await newUser.save();
        return newUser;
    }catch(error){
        throw new Error(error.message, "Không đăng ký được người dùng");
    }
}

