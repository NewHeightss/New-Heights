FROM node:latest
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install --force
EXPOSE 3000
EXPOSE 8080
ENTRYPOINT ["npm", "start"]