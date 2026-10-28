# wetfish.net
The new corporate website for Wetfish

# Running this project
Run `docker compose up --build`, then open http://localhost:31337/.

`docker-compose.override.yml` publishes that port for local development; server deploys leave it out. For live reloading while working on the site, run `npm install` and then `npm run dev` in `ui/`.

# Deploying
The site is deployed by [wetfish/server](https://github.com/wetfish/server): staging servers deploy the `main` branch and production servers deploy `release`, within seconds of each push. The server builds the image itself from `docker-compose.yml`, so there is no image registry or GitHub Actions workflow.

[Preparing a Project](https://github.com/wetfish/server/blob/main/docs/how-it-works.md#preparing-a-project) covers what the server expects from `docker-compose.yml`, and [Projects](https://github.com/wetfish/server/blob/main/docs/how-it-works.md#projects) covers adding the site to a server.

Base images in the `Dockerfile` are pinned to exact versions, since servers never pull newer ones; update them in a commit.
