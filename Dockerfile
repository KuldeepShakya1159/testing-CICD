FROM node:20-slim

WORKDIR /code/app/testing_node
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 5000
CMD [ "node" , "index.js" ]
