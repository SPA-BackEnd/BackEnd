module.exports.getAds = function (req, res) {

    //filter
    var orderBy = req.param('orderby');
    var status = req.param('status');
    var categoryId = req.param('categoryid');
    var townId = req.param('townid');
    var startPage = req.param('startpage');
    var pageSize = req.param('pagesize');
    var fromUser = req.param('fromuser');

    var result = {
        orderBy:orderBy,
        status:status,
        categoryId:categoryId,
        townId:townId,
        startPage:startPage,
        pageSize:pageSize,
        fromUser:fromUser
    };

    res.send('Adsssssssssssss')
};