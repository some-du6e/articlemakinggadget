import { getenv, log} from './lib.js'; // Load the .env file
var token = getenv().TOKEN
var repo = getenv().REPO
var branch = getenv().BRANCH || "articles"
log(token)
log(repo)
log(branch)
log(getenv())