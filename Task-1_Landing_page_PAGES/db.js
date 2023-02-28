const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/pbp', {useNewUrlParser: true, useUnifiedTopology: true});    // qq- database name

    var db = mongoose.connection;
    db.on("error",console.error.bind(console,'connection error:'));


    // const pageSchema = new mongoose.Schema({
    //     myname: String,
    //     mypass: String
    // });

    // var pagelogin = mongoose.model("pagelogin",pageSchema);
    // module.exports = pagelogin;