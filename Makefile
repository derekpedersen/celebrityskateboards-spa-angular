local-build:
	npm install
	npm rebuild node-sass
	ng build

local-run: local-build
	ng serve --host 0.0.0.0 --disable-host-check

docker-test:
	docker build ./ -t celebrityskateboards-spa-angular
	gcloud docker -- pull ${GCR}/skatepark-api-go:latest
	cd test_utils/ && docker-compose up -d

docker-run:
	gcloud docker -- pull ${GCR}/skatepark-api-go:latest
	cd /test_utils && docker-compose up -d

.PHONY: build
build:
	docker build ./ -t celebrityskateboards-spa-angular

publish:
	docker tag celebrityskateboards-spa-angular ${GCR}/celebrityskateboards-spa-angular:latest
	gcloud docker -- push ${GCR}/celebrityskateboards-spa-angular:latest

deploy:
	kubectl delete deployment celebrityskateboards-spa-angular-deployment
	kubectl apply -f ./kubernetes/deployment.yaml
	kubectl apply -f ./kubernetes/service.yaml

kubernetes: build publish deploy