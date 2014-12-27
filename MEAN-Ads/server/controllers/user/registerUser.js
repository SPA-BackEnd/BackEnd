var User = require('../../models/User');
var hat = require('hat');

module.exports.registerUser = function (req, res) {

    var user = User(req.body);

    user.save(function (err, result) {
        if(err){
            res.status(400);
            res.json(err);
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
    });
};