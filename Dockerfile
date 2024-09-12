FROM node:18.17.1-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]