FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN rm -rf .wrangler
RUN npm run build

EXPOSE 8787

CMD ["npx","wrangler","dev","dist/server/index.js","--config","dist/server/wrangler.json","--ip","0.0.0.0","--port","8787","--local"]
