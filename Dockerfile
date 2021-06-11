# Step 1
FROM node:10-alpine as build-step
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]