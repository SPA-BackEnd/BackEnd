module.exports.createCategory = function (req, res) {

    var name = req.body.name;
    var authorization = req.headers.authorization;

    var result = {
        name:name,
        authorization:authorization
    };
    res.send(result);
};