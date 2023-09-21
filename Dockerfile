FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

FROM nginx:latest
COPY --from=build /usr/local/app/dist/ng-pokemon-app /usr/share/nginx/html
EXPOSE 80
