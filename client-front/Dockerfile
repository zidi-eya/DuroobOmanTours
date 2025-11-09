# Stage 1: Build frontend
FROM node:22 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# FIX PERMISSIONS ESBUILD (à cet endroit)
RUN chmod +x node_modules/@esbuild/linux-x64/bin/esbuild || true

RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:stable
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
