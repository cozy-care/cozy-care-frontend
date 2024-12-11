FROM node:18.17.1-alpine
WORKDIR /app
COPY package*.json ./
RUN npm update
RUN npm i --force
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]