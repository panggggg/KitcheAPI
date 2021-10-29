const mongoose = require('mongoose')
const Menu = mongoose.model('Menu')

exports.list_all_menu = (req, res) => {
    Menu.find({}, (err, menu) => {
        if(err)
            res.send(err)
        res.json(menu)

    })
}

exports.create_a_menu = (req, res) => {
    const new_menu = new Menu(req.body)
    new_menu.save((err, menu) => {
        if(err)
            res.send(err)
        res.json(menu)
    })
}

exports.read_a_menu = (req, res) => {
    Menu.findById({ _id: req.params.id }, (err, user) => {
        if(err)
            res.send(err)
        res.send(user)
    })
}
