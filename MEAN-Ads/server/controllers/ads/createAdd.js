module.exports.createAdd = function (req, res) {

    var authorization = req.headers.authorization;

    var title = req.body.title;
    var text = req.body.text;
    var categoryId = req.body.categoryid;
    var townId = req.body.townid;

    var result = {
        title:title,
        text:text,
        categoryId:categoryId,
        townId:townId,
        authorization:authorization
    };

    res.send(result);
};