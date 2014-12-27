var User = require('../../models/User');
var hat = require('hat');

module.exports.login = function (req, res) {

    var userName = req.body.username;
    var password = req.body.password;

    User.findOne({username:userName,password:password}, function (err, result) {

        if(err){
            res.status(400);
            res.json(err);
        }else if(!result){
            res.status(400);
            res.json({
                "error": "invalid_grant",
                "error_description": "The user name or password is incorrect."
            });
        }else{
            var accessToken = hat();
            res.status(200);
            res.json({
                "accessToken":accessToken,
                "expiresIn": 1209599,
                "objectId":result._id,
                "username":result.username
            });
        }
    })
};