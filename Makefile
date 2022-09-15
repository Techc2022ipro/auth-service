down:
	docker-compose down
up:
	git submodule update --init;
	docker-compose build;
	docker-compose up -d && docker-compose logs -f
bash:
	docker exec -it loginserver /bin/bash
log:
	docker logs -n until=10s loginserver
build:
	docker-compose build