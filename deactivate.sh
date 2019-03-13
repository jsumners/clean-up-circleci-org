source .env
TOKEN="${CCI_TOKEN}"
ORG="${CCI_ORG}"
URL_SUFFIX="/enable?circle-token="$TOKEN
URL_PREFIX="https://circleci.com/api/v1.1/project/github/"$ORG"/"

while IFS='' read -r repo || [[ -n "$repo" ]]; do
    sleep 2
    curl -X "DELETE" $URL_PREFIX$repo$URL_SUFFIX
done < "$1"
