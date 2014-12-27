module.exports.deleteUser = function (req, res) {

    var authorization = req.headers.authorization;
    var userId = req.params.id;

    var result = {
        authorization:authorization,
        userId :userId
    };

    res.send(result);
};