# Use a lightweight Node.js image
FROM node:20.12.2

# Set the working directory
WORKDIR /src

# Copy only package.json and package-lock.json first for caching
COPY package*.json ./

# Install all dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Default command (can be overridden)
CMD ["npm", "start"]
