import { getEnv, log } from "./lib.js"; // Load the .env file
import request from 'sync-request';
var token = getEnv().TOKEN;
var repo = getEnv().REPO;
var branch = getEnv().BRANCH || "articles";


/**
 * Lists the md files in the branch+repo
 */
export function listArticles() {
  const url = `https://api.github.com/repos/${repo}/git/trees/${branch}?recursive=1`;
  const res = request('GET', url, {
    headers: {
      'User-Agent': 'request'
    }
  });
  const body = JSON.parse(res.getBody('utf8'));
  const articles = body.tree.filter((item) => {
    return item.path.match(/\.md$/);
  }).map((item) => {
    return item.path;
  });
  return articles;


}
/**
 * @param {string} name - name of the article
 */
export function getArticle(name) {
  const url = `https://raw.githubusercontent.com/${repo}/${branch}/${name}`;
  const res = request('GET', url, {
    headers: {
      'User-Agent': 'request'
    }
  });
  const body = res.getBody('utf8');
  return body;
}