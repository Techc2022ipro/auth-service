FROM node:14
WORKDIR /app
COPY ./app .
# COPY ./app/tsconfig.json .
COPY ./scripts /scripts
RUN chmod +x /scripts/*
EXPOSE 1000

ENTRYPOINT ["/scripts/entrypoint.sh"]