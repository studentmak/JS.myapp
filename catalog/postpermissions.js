let {post_users} = require('./post_users.js')

let {permissions} = require('./permissions.js')


module.exports.postpermissions = {
    [post_users.Developer]:[permissions.Manage_source_code, permissions.Financial_operations], // Связь между [разработчиком] и [исходным кодом]
    [post_users.Accountant]:[permissions.Financial_operations], // Связь между [бухгалтером] и [финансовыми операциями] 
    [post_users.Administrator]:[permissions.Change_personal_details, permissions.Manage_others_users]
}








