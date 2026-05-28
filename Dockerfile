FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/client /usr/share/nginx/html

RUN cat > /etc/nginx/conf.d/default.conf <<'EOF_NGINX'
server {
  listen 80;
  server_name _;

  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
EOF_NGINX

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
