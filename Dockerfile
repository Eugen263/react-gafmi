FROM node:18

WORKDIR /app/nfn_staging_front

COPY . .

RUN npm install

RUN npm run build
CMD ["npm", "run", "serv"]