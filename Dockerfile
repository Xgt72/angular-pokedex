FROM node:latest as build
WORKDIR /usr/loacl/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/local/app/dist/ng-pokemon-app /usr/share/nginx/html
EXPOSE 80
