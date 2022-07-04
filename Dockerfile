FROM node:18.2
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
COPY examples.env ./
COPY tsconfig.json ./
COPY . .
RUN yarn install
RUN npx prisma generate
CMD ["yarn", "start"]
