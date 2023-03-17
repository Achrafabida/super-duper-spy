###
## Adding stage to npm audit and cve scan
## Unless you have a very basic CI/automation system, I don't recommend this
## Most automation platforms do this better from outside the docker build
###

FROM node:18.15.0-alpine3.17 as base
ENV NODE_ENV=production
EXPOSE 3000
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package*.json yarn*.lock ./
RUN yarn install --production --frozen-lockfile && yarn autoclean

FROM base as dev
ENV NODE_ENV=development
ENV PATH=/app/node_modules/.bin:$PATH
VOLUME [ "/app" ]
EXPOSE 3000
EXPOSE 9229
WORKDIR /cache
COPY --from=base --chown=node:node /app ./
COPY --chown=node:node /prisma ./
RUN prisma generate
RUN yarn install
WORKDIR /app
ENTRYPOINT [ "./docker/docker-entrypoint.sh" ]
CMD ["yarn","dev"]

FROM base as source
COPY --chown=node:node . .

FROM source as test
ENV NODE_ENV=development
ENV PATH=/app/node_modules/.bin:$PATH
COPY --from=dev /app/node_modules /app/node_modules
RUN npx eslint .
RUN npm test
CMD ["npm", "run", "test"]

FROM source as prod
ENTRYPOINT ["/usr/local/bin/tini", "--"]
CMD ["node", "./bin/www"]