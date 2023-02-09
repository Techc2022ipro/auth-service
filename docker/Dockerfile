FROM node:14
WORKDIR /app
COPY ../app .
COPY ./app/tsconfig.json .
COPY ./scripts /scripts
RUN chmod +x /scripts/*
RUN apt-get update && apt-get install -y netcat

ENTRYPOINT ["/scripts/entrypoint.sh"]
