FROM node:10.19.0
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 8010
CMD ["node", "index.js"]