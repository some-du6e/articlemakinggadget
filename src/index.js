import { listen, send } from "./aio.js";

send('Hello World!', '/');
listen()
