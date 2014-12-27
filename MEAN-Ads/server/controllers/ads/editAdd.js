module.exports.editAdd = function (req, res) {

    var authorization = req.headers.authorization;
    var adsIdForEdit = req.params.id;

    var addId = req.params.id;
    var title = req.param('title');
    var text = req.param('text');
    var categoryId = req.param('categoryid');
    var townId = req.param('townid');

    var result = {
        addId:addId,
        title:title,
        text:text,
        categoryId:categoryId,
        townId:townId,
        authorization:authorization,
        adsIdForEdit:adsIdForEdit
    };

    res.send(result);
};