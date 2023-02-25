FROM node:18.14.2-alpine3.17

# This is the working directory for any next commands
WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm install

CMD ["pnpm", "start"]
