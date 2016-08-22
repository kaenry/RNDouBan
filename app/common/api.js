'use strict'

const ApiHost = 'http://api.github.com'

export default {
    status: `https://status.github.com/api.json`, // github status
    repositories: `${ApiHost}/search/repositories`, // search repos
	users: `${ApiHost}/users`, // users GET /users/:user
}