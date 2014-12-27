module.exports.editTown = function (req, res) {
    var authorization = req.headers.authorization;
    var townIdForEdit = req.params.id;
    var name = req.param('name');

    var result = {
        authorization:authorization,
        townIdForEdit:townIdForEdit,
        name:name
    };

    res.send(result);
};