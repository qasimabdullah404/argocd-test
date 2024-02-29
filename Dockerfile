FROM node:21.6.2-alpine
WORKDIR /app
COPY package.json yarn.lock index.js /app/
RUN yarn install
EXPOSE 8081
CMD [ "npm", "start" ]