// Q: Where is everything?
// A: Check aio.js
import { listArticles, listen, send, log, getArticle, renderArticle } from "./aio.js";

var article = getArticle("foobar.md");
var html = renderArticle(article);
send(html, "/foobar");
listen("foobar");
