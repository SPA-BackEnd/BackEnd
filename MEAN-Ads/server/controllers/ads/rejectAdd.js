module.exports.rejectAdd = function (req, res) {

    var authorization = req.headers.authorization;
    var addId = req.params.id;
    res.send(['Reject',authorization,addId]);
};