#!/bin/sh -ex

REGISTRY=us-east1-docker.pkg.dev/example-1615678616955/collatz
IMAGE=collatz-sequence-computer-service
TAG=develop
docker build -t $REGISTRY/$IMAGE:$TAG .
docker push $REGISTRY/$IMAGE:$TAG
