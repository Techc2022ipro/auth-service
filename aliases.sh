alias down="docker-compose down"
alias up="touch app/.env;
	  git submodule update --init;
	  docker-compose build;
	  docker-compose up -d && docker-compose logs -f"
alias bash="docker exec -it authserver /bin/bash"
alias log="docker logs -n until=10s authdb"
alias build="docker-compose build"
alias db-bash="docker-compose exec postgresql psql --user root --db authdb --pass"
alias db-push="docker-compose exec authserver npx prisma db push"
alias db-studio="docker-compose exec authserver npx prisma studio"
alias db-migrate="docker-compose exec authserver npx prisma migrate dev --name date +'%y%m%d'"
alias db-reset="docker-compose exec authserver npx prisma migrate reset"
