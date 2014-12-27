module.exports.createTown = function (req, res) {

    var authorization = req.headers.authorization;
    var name = req.body.name;

    var result = {
        authorization:authorization,
        name:name
    };

    res.send(result);
};