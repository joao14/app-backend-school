FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY --chown=node:node . .
USER node
CMD ["npm", "start"] 