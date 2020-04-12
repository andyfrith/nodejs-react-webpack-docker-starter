# Setup and build the client

FROM mhart/alpine-node:latest as client
WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install -qy
COPY client/ ./
RUN npm run build

# Setup the server

FROM mhart/alpine-node:latest
WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/
WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./
ENV PORT 8000
EXPOSE 8000
CMD ["npm", "start"]