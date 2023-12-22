FROM alpine

RUN apk add curl

COPY smoke-test.sh smoke-test.sh

CMD ["sh", "smoke-test.sh", "http://app:3000"]


FROM node:18-buster as installer
FROM node:17-buster as installer
