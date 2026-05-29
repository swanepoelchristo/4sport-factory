FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 8787

CMD ["npx","wrangler","dev","dist/server/index.js","--ip","0.0.0.0","--port","8787","--local"]
