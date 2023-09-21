FROM node:18-alpine as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package*.json /usr/src/app
RUN npm install
COPY ./ /usr/src/app
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/src/app/dist/ng-pokemon-app /usr/share/nginx/html
EXPOSE 80
