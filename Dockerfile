FROM launcher.gcr.io/google/nodejs

WORKDIR /usr/app
EXPOSE 3000

COPY package.json .
RUN npm install --quiet

COPY . .

RUN npm run build