var mongoose = require('mongoose');
mongoose.connect('mongodb://labike:2012.1.2.02@ds159707.mlab.com:59707/labike');

exports.mongoose = mongoose;
