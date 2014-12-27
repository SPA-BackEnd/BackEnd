module.exports.deleteTown = function (req, res) {
    var authorization = req.headers.authorization;
    var townIdForEdit = req.params.id;

    var result = {
        authorization:authorization,
        townIdForEdit:townIdForEdit
    };

    res.send(result);
};