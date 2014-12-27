module.exports.approveAdd = function (req, res) {

    var authorization = req.headers.authorization;
    var addId = req.params.id;

    res.send(['Approve',authorization,addId]);
};