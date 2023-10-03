FROM docker.io/node:20 as builder

COPY ./ui /ui
WORKDIR /ui
RUN npm install
RUN npm run build

FROM docker.io/nginx:1.25.2-alpine

COPY --from=builder /ui/public_html /usr/share/nginx/html
