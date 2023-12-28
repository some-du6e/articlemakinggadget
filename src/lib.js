import { config } from "./config.js";
import express from "express";
import fs from "fs";
var app = express();
var port = config.port;
/**
* @param {string} src - thing to print
* @param {string} path - path to host stuff
*/
export function send(src, path) {
  app.get(path, (req, res) => {
    res.send(src);
    return res;
  });
}
/**
 * @param {string} msg - prints 0.0.0.0 and the port if msg is undefined
 */
export function listen(msg) {
  app.listen(port, () => {
    if (msg) {
      console.log(msg);
    } else {
      console.log(`0.0.0.0:${port}`);
    }
  });
}

/**
 * Returns .env in json
 */
export function getEnv() {
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

/**
 * @param {string} text - this is exactly console.log, im lazy :p
 */
export function log(text) {
    console.log(text);
}