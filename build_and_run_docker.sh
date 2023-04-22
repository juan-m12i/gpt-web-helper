#!/bin/bash

# build_and_run_docker.sh

container_name="gpt-web-helper"

# Stop and remove the container if it already exists
docker rm -f ${container_name} 2>/dev/null

# Build the Docker image
docker build -t ${container_name} .

# Run the Docker container
docker run --name ${container_name} -p 8000:8000 -d ${container_name}
