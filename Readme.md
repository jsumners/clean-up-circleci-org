1. Create a GitHub token with access to read the organizations repos list
2. Create a CircleCI personal token in your CCI settings
3. Add the tokens to a `.env` file using the `.env.sample` as a template
4. `npm i && node index.js > repos.txt`
5. `./deactivate.sh repos.txt`

https://discuss.circleci.com/t/remove-projects-that-were-accidentally-added/28966/5
