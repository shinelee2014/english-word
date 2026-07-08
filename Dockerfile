# Use ultra-lightweight Node alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package requirements first for faster caching
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy application files
COPY server.js ./
COPY index.html ./
COPY words_data.js ./
COPY preload.js ./
COPY main.js ./

# Create default directories
RUN mkdir -p /app/data && mkdir -p /app/译林版小学英语【电子课本】

# Expose port (default Express backend port is 3000)
EXPOSE 3000

# Set environment variable to run in production mode
ENV NODE_ENV=production
ENV PORT=3000

# Execute server
CMD ["node", "server.js"]
