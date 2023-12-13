import { getenv, log } from "./lib.js"; // Load the .env file
import request from 'sync-request';
var token = getenv().TOKEN;
var repo = getenv().REPO;
var branch = getenv().BRANCH || "articles";



export function listarticles() {
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

export function getarticle(name) {
  const url = `https://raw.githubusercontent.com/${repo}/${branch}/${name}`;
  const res = request('GET', url, {
    headers: {
      'User-Agent': 'request'
    }
  });
  const body = res.getBody('utf8');
  return body;
}