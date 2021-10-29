module.exports = (app) => {
    const menuList = require('../controllers/menuListController')
    const userList = require('../controllers/userController')
    const login = require('../controllers/loginController')

    app.route('/menus')
    .get(menuList.list_all_menu)
    .post(menuList.create_a_menu)

    app.route('/menus/:id')
    .get(menuList.read_a_menu)

    app.route('/user')
    // .get(userList.list_all_user)
    .get(userList.user_info)
    .post(userList.create_a_user)

    app.route('/user/:id')
    .get(userList.read_a_user_by_id)

    app.route('/login')
    .post(login.user_login)

} 