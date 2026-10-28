# Base images are pinned to exact versions: servers build with Docker's cache
# and never pull newer images, so an upgrade is a reviewed commit.

# Builds the SvelteKit site into static files
FROM docker.io/node:24.22.1-alpine3.24 AS builder

WORKDIR /ui

# Install dependencies first, so they stay cached until the lockfile changes
COPY ui/package.json ui/package-lock.json ui/.npmrc ./
RUN npm ci

COPY ui/ ./
RUN npm run build

# Serves the built site
FROM docker.io/nginx:1.30.6-alpine3.24

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /ui/public_html /usr/share/nginx/html

# Deploys wait for a new container to pass this before the site switches to it
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --start-interval=1s --retries=3 \
    CMD wget -q --spider http://127.0.0.1/ || exit 1
