FROM golang:1.16-alpine as build-stage
ENV GO111MODULE=auto
WORKDIR /go/src/example
COPY main.go .
RUN go build -v -o main

FROM scratch
COPY --from=build-stage /go/src/example/main /
CMD ["/main"]