var config = require("./config");
var express = require("express");
var app = express();
var port = config.port;
module.exports = {
    send: function (src, path) {
        app.get(path, (req, res) => {
            res.send(src);
            return res;
        });

    },
        listen: function () {
                app.listen(port, () => {
                console.log(`Example app listening at http://localhost:${port}`);
                });
        
        }
};
