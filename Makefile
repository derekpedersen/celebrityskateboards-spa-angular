export GIT_COMMIT_SHA = $(shell git rev-parse HEAD)

run:
	ng serve --host 0.0.0.0 --disable-host-check

build:
	npm install
	ng build --prod --build-optimizer --aot

test:
	ng test --watch=false --browsers ChromeHeadless --code-coverage

coveralls:
	cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

docker: 
	docker build ./ -t celebrityskateboards-spa-angular

publish: 
	docker tag celebrityskateboards-spa-angular us.gcr.io/${GCLOUD_PROJECT_ID}/celebrityskateboards-spa-angular:${GIT_COMMIT_SHA}
	gcloud docker -- push us.gcr.io/${GCLOUD_PROJECT_ID}/celebrityskateboards-spa-angular:${GIT_COMMIT_SHA}

deploy:
	sed -e 's/%GCLOUD_PROJECT_ID%/${GCLOUD_PROJECT_ID}/g' -e 's/%GIT_COMMIT_SHA%/${GIT_COMMIT_SHA}/g' ./.k8s/deployment.yaml > deployment.sed.yaml
	kubectl apply -f ./deployment.sed.yaml
	kubectl apply -f ./.k8s/service.yaml

kubernetes: build docker publish deploy