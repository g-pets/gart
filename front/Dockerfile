# Dockerfile
FROM node:15.11.0-alpine3.13
LABEL maintainer="hello@gololobov.dev"

# create destination directory
RUN mkdir -p /home/app
WORKDIR /home/app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

COPY package*.json ./
RUN yarn