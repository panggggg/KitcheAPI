const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserShema = new Schema({
    first_name: {
        type: String,
        required: 'กรุณากรอกชื่อ'
    },
    last_name: {
        type: String,
        required: 'กรุณากรอกนามสกุล'
    },
    email: {
        type: String,
        unique: true,
        required: 'กรุณากรอกอีเมล'
    },
    mobile_no: {
        type: String,
        required: 'กรุณากรอกเบอร์โทร'
    },
    username: {
        type: String,
        required: 'กรุณากรอกชื่อผู้ใช้'
    },
    password: {
        type: String,
        required: 'กรุณากรอกรหัสผ่าน'
    },
    register_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserShema)