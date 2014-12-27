module.exports.deleteCategory = function (req, res) {

    var authorization = req.headers.authorization;
    var categoryIdForDelete = req.params.id;

    var result = {
        authorization:authorization,
        categoryIdForDelete:categoryIdForDelete
    };

    res.send(result);
};