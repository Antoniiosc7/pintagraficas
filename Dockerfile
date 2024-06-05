# Etapa de construcción
FROM node:16.10.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@13.3.11
COPY . .
RUN ng build

# Etapa de producción
FROM nginx:1.25.5-alpine AS prod
COPY --from=build /app/dist/pinta-graficas /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8082
EXPOSE 445
CMD ["nginx", "-g", "daemon off;"]
