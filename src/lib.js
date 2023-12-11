import { config } from "./config.js";
import express from "express";
var app = express();
var port = config.port;
export function send(src, path) {
    app.get(path, (req, res) => {
        res.send(src);
        return res;
    });

}
export function listen(msg) {
    app.listen(port, () => {
        if (msg) {
            console.log(msg);
        } else {
            console.log(`0.0.0.0:${port}`);
        }
    });

}
