# Stage 1: Build Vue
FROM node:22 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
# FIX pour esbuild permissions
RUN chmod +x node_modules/@esbuild/linux-x64/bin/esbuild || true

RUN npm run build

# Stage 2: Serve avec nginx
FROM nginx:stable
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
