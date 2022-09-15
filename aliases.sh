alias down="docker-compose down"
alias up="touch app/.env;
	  git submodule update --init;
	  docker-compose build;
	  docker-compose up -d && docker-compose logs -f"
alias bash="docker exec -it loginserver /bin/bash"
alias log="docker logs -n until=10s loginserver"
alias build="docker-compose build"
alias db-bash="docker-compose exec postgresql psql --user root --db logindb --pass"
alias db-push="docker-compose exec loginserver npx prisma db push"
alias db-studio="docker-compose exec loginserver npx prisma studio"
alias db-migrate="docker-compose exec loginserver npx prisma migrate dev --name date +'%y%m%d'"
alias db-reset="docker-compose exec loginserver npx prisma migrate reset"
