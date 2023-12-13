import { config } from "./config.js";
import express from "express";
import fs from "fs";
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
export function getenv() {
    try {
        const data = fs.readFileSync(".env", "utf8"); // why does this get pissed when ran from src
        const array = {}
        for (const line of data.split("\n")) {
            if (line.startsWith("#")) {
                continue;
            } else {
                const [key, value] = line.split("=");
                array[key] = value;
            }
        }
        return array;
    } catch (err) {
        console.error(err);
    }
}
// im extremely lazy
export function log(text) {
    console.log(text);
}