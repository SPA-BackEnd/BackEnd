module.exports.editUser = function (req, res) {

    var authorization = req.headers.authorization;
    var userIdForEdit = req.params.id;
    var password = req.body.password;
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var townId = req.body.townid;

    var result = {
        password:password,
        name:name,
        email:email,
        phone:phone,
        townId:townId,
        userIdForEdit:userIdForEdit,
        authorization:authorization
    };

    res.send(result);
};