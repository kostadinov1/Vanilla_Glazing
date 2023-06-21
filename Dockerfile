FROM node:current-buster-slim as build-stage
WORKDIR /frontend
COPY ./package.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:latest as production-stage
EXPOSE 3000
RUN mkdir /frontend
COPY --from=build-stage /frontend/build /frontend
COPY /nginx/nginx.conf /etc/nginx/nginx.conf
