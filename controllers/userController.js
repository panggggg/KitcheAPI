const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')

exports.list_all_user = (req, res) => {
    User.find({}, (err, user) => {
        if(err)
            res.send(err)
        res.json(user)
    })
}

exports.create_a_user = (req, res) => {
    const new_user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        mobile_no: req.body.mobile_no,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    new_user.save(err => {
        if(err){
            return res.status(400).json({
                title: 'error',
                error: '*อีเมลนี้มีผู้ใช้งานแล้ว'
            })
        }
        return res.status(200).json({
            title: 'signup success'
        })
    })
    console.log(new_user)
}

exports.read_a_user_by_id = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err)
            res.send(err)
        res.send(user)
    })
}

exports.read_a_email = (req, res) => {
    User.findOne(req.params.email, (err, email) => {
        if(err)
            res.send(err)
        res.send(email)
    })
}

exports.user_info = (req, res) => {
    let token = req.headers.token
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if(err){
            return res.status(401).json({
                title: 'unauthorized'
            })
        }
        User.findOne({_id: decoded.userId}, (err, user) => {
            if(err)
                return console.log(err)
            return res.status(200).json({
                title: 'user info',
                user: {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    username: user.username
                }
            })
        })
    })
}