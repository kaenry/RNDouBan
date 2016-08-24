'use strict'

const ApiHost = 'http://api.github.com'

export default {
    status: `https://status.github.com/api.json`, // github status
    search_repos: `${ApiHost}/search/repositories`, // search repos
    repos: `${ApiHost}/repos`, // repos GET /repos/:name
	users: `${ApiHost}/users`, // users GET /users/:user
}