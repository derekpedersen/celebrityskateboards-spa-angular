export GIT_COMMIT_SHA = $(shell git rev-parse HEAD)

test:
	ng test --watch=false --browsers ChromeHeadless --code-coverage
	
run:
	ng serve --host 0.0.0.0 --disable-host-check --proxy-config ./proxy.config.json

skatepark-api:
	cd .test && docker-compose down
	cd .test && docker-compose up -d --remove-orphans

develop: build skatepark-api run

build:
	rm -rf dist
	npm install
	ng build --prod --build-optimizer --aot

coveralls:
	cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

docker: 
	docker build ./ -t celebrityskateboards-spa-angular --no-cache

publish: 
	docker tag celebrityskateboards-spa-angular us.gcr.io/${GCLOUD_PROJECT_ID}/celebrityskateboards-spa-angular:${GIT_COMMIT_SHA}
	gcloud docker -- push us.gcr.io/${GCLOUD_PROJECT_ID}/celebrityskateboards-spa-angular:${GIT_COMMIT_SHA}

deploy:
	helm upgrade celebrityskateboards .helm

kubernetes: build docker publish deploy