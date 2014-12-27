module.exports.getAddById = function (req, res) {

    var authorization = req.headers.authorization;
    var addId = req.params.id;

    res.send('Get add by id',[authorization,addId]);
};