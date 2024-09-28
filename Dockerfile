FROM node:20.17.0-alpine

WORKDIR /app

COPY ./dist ./dist

CMD ["node", "dist/main.js"]