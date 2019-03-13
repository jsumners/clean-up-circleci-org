'use strict'

require('dotenv').config()
const got = require('got')

const reposRequest1 = got.get(`https://api.github.com/orgs/${GH_ORG}/repos?access_token=${process.env.GH_TOKEN}&type=all&per_page=100&page=1`)
const reposRequest2 = got.get(`https://api.github.com/orgs/${GH_ORG}/repos?access_token=${process.env.GH_TOKEN}&type=all&per_page=100&page=2`)

async function doIt() {
  const repos = []
  let reposResponse = await reposRequest1
  Array.prototype.push.apply(repos, JSON.parse(reposResponse.body))

  reposResponse = await reposRequest2
  Array.prototype.push.apply(repos, JSON.parse(reposResponse.body))

  for (const repo of repos) {
    try {
      await got.get(`https://api.github.com/repos/${GH_ORG}/${repo.name}/contents/.circleci?access_token=${process.env.GH_TOKEN}`)
    } catch (error) {
      if (error.statusCode === 404) {
        console.log(repo.name)
      }
    }
  }
  // console.log(repos.length)
}

doIt().then(()=>{}).catch(console.error)
