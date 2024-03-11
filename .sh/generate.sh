mkdir ./flyfetch
openapi-generator-cli generate \
-i ./machines-openapi.json \
-c ./flyfetch-openapi-config.json \
-g typescript-fetch \
-o ./flyfetch
cp package.json ./flyfetch
cp README.md ./flyfetch
cp index.ts ./flyfetch