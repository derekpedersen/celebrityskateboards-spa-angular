.PHONY: build
build:
	docker build ./ -t celebrityskateboards-spa-angular

publish:
	docker tag celebrityskateboards-spa-angular us.gcr.io/derekpedersen-195304/celebrityskateboards-spa-angular:latest
	gcloud docker -- push us.gcr.io/derekpedersen-195304/celebrityskateboards-spa-angular:latest

deploy:
	kubectl delete deployment celebrityskateboards-spa-angular-deployment
	kubectl apply -f ./kubernetes/deployment.yaml
	kubectl apply -f ./kubernetes/service.yaml