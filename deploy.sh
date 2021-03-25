 #!/bin/bash

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.spatialize.dk' > CNAME

git init
git add -A
git commit -m 'deploy'

cd -

#npm run build
#git --work-tree dist add --all
#git --work-tree dist commit -m 'Deploy'
#git push origin HEAD:gh-pages --force
#rm -r dist
#git checkout -f master
#git branch -D gh-pages
