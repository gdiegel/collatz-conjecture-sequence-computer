#!/bin/sh -ex

REGISTRY=collatz.azurecr.io
IMAGE=collatz-sequence-computer-service
TAG=develop
docker build -t $REGISTRY/$IMAGE:$TAG .
docker push $REGISTRY/$IMAGE:$TAG
