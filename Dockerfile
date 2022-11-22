#stage 1
FROM node:16-alpine3.16 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:prod
#stage 2
FROM nginx:alpine
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/pwa-mvp /usr/share/nginx/html

EXPOSE 8000
