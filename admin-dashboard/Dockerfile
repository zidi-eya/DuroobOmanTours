# Stage 1: Build frontend
FROM node:22 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

# FIX PERMISSIONS ESBUILD
RUN chmod +x node_modules/@esbuild/linux-x64/bin/esbuild || true

COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:stable
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
