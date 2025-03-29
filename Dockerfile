FROM node:18
WORKDIR /my_nodeapp
COPY package.json package-lock.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000
