# Stage 0 - Build frontend assets 
FROM node:lts-alpine as build

WORKDIR /home/application

COPY package*.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Stage 1 - Serve frontend assets

FROM nginx:stable

WORKDIR /etc/nginx

ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /home/application/build /home/nginx/html

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
