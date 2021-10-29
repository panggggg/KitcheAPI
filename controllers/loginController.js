const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.user_login = (req, res) => {
   User.findOne({email: req.body.email}, (err, user) => {
       if(err){
           return res.status(500).json({
               title: 'error',
               error: err
           })
       }
       if(!user){
           return res.status(401).json({
               title: 'user not found',
               error: '*ไม่มีผู้ใช้งานนี้ในระบบ'
           })
       }
       console.log('user:', user)
       console.log("password:", user.password)
       console.log(req.body)

       //incorrect password
       if(!bcrypt.compareSync(req.body.password, user.password)){
           return res.status(401).json({
               title: 'login failed',
               error: '*รหัสผ่านไม่ถูกต้อง'
           })
       }

       let token = jwt.sign({userId: user._id}, 'secretkey')
       return res.status(200).json({
           title: 'login success',
           token: token
       })
   })
}