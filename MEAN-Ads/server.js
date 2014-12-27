var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var dbPort = 27017;
//Mongodb server
mongoose.connect('mongodb://localhost:' + dbPort + '/ads');

var app = express();
var serverPort = 1234;

app.use(bodyParser());

var controllers = {
    // Ads routes
    getAds:require('./server/controllers/ads/getAds.js'),
    createAdd:require('./server/controllers/ads/createAdd.js'),
    editAdd:require('./server/controllers/ads/editAdd.js'),
    deleteAdd:require('./server/controllers/ads/deleteAdd.js'),
    deactivateAdd:require('./server/controllers/ads/deactivateAdd.js'),
    publishAdd:require('./server/controllers/ads/publishAdd.js'),
    getAddById:require('./server/controllers/ads/getAddById.js'),
    approveAdd:require('./server/controllers/ads/approveAdd.js'),
    rejectAdd:require('./server/controllers/ads/rejectAdd.js'),
    // User routes
    registerUser:require('./server/controllers/user/registerUser.js'),
    login:require('./server/controllers/user/login.js'),
    editUser:require('./server/controllers/user/editUser.js'),
    deleteUser:require('./server/controllers/user/deleteUser.js'),
    // Category routes
    createCategory:require('./server/controllers/category/createCategory.js'),
    getCategories:require('./server/controllers/category/getCategories.js'),
    editCategory:require('./server/controllers/category/editCategory.js'),
    deleteCategory:require('./server/controllers/category/deleteCategory.js'),
    // Town routes
    createTown:require('./server/controllers/town/createTown.js'),
    getTowns:require('./server/controllers/town/getTowns.js'),
    editTown:require('./server/controllers/town/editTown.js'),
    deleteTown:require('./server/controllers/town/deleteTown.js')
};

// Ads
app.get('/api/ads',controllers.getAds.getAds); // get all ads
// user requests
app.get('/api/user/ads',controllers.getAds.getAds); // get all ads
app.post('/api/user/ads',controllers.createAdd.createAdd); // create add
app.put('/api/user/ads/:id',controllers.editAdd.editAdd); // edit add
app.del('/api/user/ads/:id',controllers.deleteAdd.deleteAdd); // delete add by id
app.put('/api/user/ads/deactivate/:id',controllers.deactivateAdd.deactivateAdd); // deactivate add by id
app.put('/api/user/ads/publish/:id',controllers.publishAdd.publishAdd); // publish add by id
// admin requests
app.get('/api/admin/ads',controllers.getAds.getAds); // get all ads
app.get('/api/admin/ads/:id',controllers.getAddById.getAddById); // get add by id
app.put('/api/admin/ads/:id',controllers.editAdd.editAdd); // edit add
app.del('/api/admin/ads/:id',controllers.deleteAdd.deleteAdd); // delete add by id
app.put('/api/admin/ads/approve/:id',controllers.approveAdd.approveAdd); // approve add by id
app.put('/api/admin/ads/reject/:id',controllers.rejectAdd.rejectAdd); // reject add by id

//User
// user requests
app.post('/api/user/register',controllers.registerUser.registerUser);
app.post('/api/user/login',controllers.login.login);
app.post('/api/user/edit/:id',controllers.editUser.editUser);
app.del('/api/user/:id',controllers.deleteUser.deleteUser);
// admin requests
app.post('/api/admin/user/edit/:id',controllers.editUser.editUser);
app.del('/api/admin/user/:id',controllers.deleteUser.deleteUser);

// Category
app.get('/api/category',controllers.getCategories.getCategories);
app.post('/api/admin/category',controllers.createCategory.createCategory);
app.put('/api/admin/category/:id',controllers.editCategory.editCategory);
app.del('/api/admin/category/:id',controllers.deleteCategory.deleteCategory);

//Town
app.get('/api/town',controllers.getTowns.getTowns);
app.post('/api/admin/town',controllers.createTown.createTown);
app.put('/api/admin/town/:id',controllers.editTown.editTown);
app.del('/api/admin/town/:id',controllers.deleteTown.deleteTown);

app.listen(serverPort, function () {
   console.log('Server is running on port: ' + serverPort);
});