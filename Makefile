export GIT_COMMIT_SHA = $(shell git rev-parse HEAD)

build:
	npm install
	npm rebuild node-sass
	ng build

run: local-build
	ng serve --host 0.0.0.0 --disable-host-check

docker: build
	docker build ./ -t skatepark-api-go

publish: docker
	docker tag skatepark-api-go us.gcr.io/${GCLOUD_PROJECT_ID}/skatepark-api-go:${GIT_COMMIT_SHA}
	gcloud docker -- push us.gcr.io/${GCLOUD_PROJECT_ID}/skatepark-api-go:${GIT_COMMIT_SHA}

deploy: publish
	sed -e 's/%GCLOUD_PROJECT_ID%/${GCLOUD_PROJECT_ID}/g' -e 's/%GIT_COMMIT_SHA%/${GIT_COMMIT_SHA}/g' ./kubernetes-deployment.yaml > deployment.sed.yaml
	kubectl apply -f ./deployment.sed.yaml
	kubectl apply -f ./kubernetes-service.yaml

kubernetes: docker publish deploy