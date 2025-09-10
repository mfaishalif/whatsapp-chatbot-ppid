# Use an official Node.js runtime as a parent image
FROM node:lts-slim

# Set the working directory in the container
WORKDIR /my-app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application's source code
COPY . .

# The Vite server will run on this port, so we expose it
EXPOSE 5173

# The command to start the Vite development server
CMD ["npm", "run", "dev"]