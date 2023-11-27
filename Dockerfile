FROM node:20
WORKDIR /var/www/app
COPY package*.json ./
ENV HOST 0.0.0.0
EXPOSE 3000
ENTRYPOINT ["npm", "run", "dev"]