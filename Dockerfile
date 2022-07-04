FROM node:18.2
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
COPY . .
RUN yarn install
RUN npx prisma generate
EXPOSE 3000
CMD ["yarn", "start"]
