help:
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

extract_dependecies: extract node dependecies for vscode intellisence
	docker-compose cp api:/app/node_modules services/api/node_modules

start: ## Start project in bg
	docker-compose up -d

logs-api: ## show api logs
	docker-compose logs api -f

exec-api: ## Exec in api containder
	docker-compose exec -it api sh