# Use an official Node.js runtime as a parent image
FROM node:18

# Install Yarn globally
# RUN npm install -g yarn

# Set the working directory
WORKDIR /app

# Copy package.json and other necessary files
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY schema.graphql ./
COPY .env .env
COPY .gitignore .gitignore

# Install dependencies
RUN yarn install

# Copy only the static 'utils' folder and other necessary files
COPY ./src/utils ./src/utils

# Copy the src/main.ts file
COPY ./src/main.ts ./src/main.ts

# Run the necessary pre-start commands to generate files and compile TypeScript
RUN yarn gen-abi        
RUN yarn gen            
RUN yarn compile        

# Install pm2 globally
RUN yarn global add pm2

# Copy the pm2 configuration file
COPY ecosystem.config.js ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application using pm2
CMD ["pm2-runtime", "ecosystem.config.js"]
