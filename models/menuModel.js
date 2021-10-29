const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
    menu_name: {
        type: String,
        required: 'กรุณากรอกชื่อเมนู'
    },
    ingredient: {
        type: String,
        required: 'กรุณากรอกวัตถุดิบ'
    },
    how_to: {
        type: String,
        required: 'กรุณากรอกวิธีทำอาหาร'
    },
    pic_url: {
        type: String
    },
    writer: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Menu', MenuSchema)