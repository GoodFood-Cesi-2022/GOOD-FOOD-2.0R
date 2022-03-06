FROM node:14-buster-slim

RUN mkdir -p /workspace
RUN chown node:node /workspace
RUN chmod 775 /workspace

RUN npm install -g npm@latest
RUN npm install -g eslint typescript expo-cli @expo/ngrok@^4.1.0

USER node

# Work Dir
WORKDIR /workspace
COPY  package*.json ./
RUN npm install

ENTRYPOINT /bin/bash -c "expo start --tunnel"