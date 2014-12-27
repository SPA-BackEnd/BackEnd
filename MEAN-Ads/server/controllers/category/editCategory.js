module.exports.editCategory = function (req, res) {

    var authorization = req.headers.authorization;
    var categoryIdForEdit = req.params.id;
    var name = req.param('name');

    var result = {
        authorization:authorization,
        categoryIdForEdit:categoryIdForEdit
    };

    res.send(result);
};