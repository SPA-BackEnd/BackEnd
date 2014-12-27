module.exports.publishAdd = function (req, res) {

    var authorization = req.headers.authorization;
    var addId = req.params.id;

    var result = {
        authorization:authorization,
        addId :addId
    };

    res.send(result);
};
