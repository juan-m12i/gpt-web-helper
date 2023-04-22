# Build the Docker image
docker build -t text-analysis-web-app .

# Run the Docker image
docker run -p 8000:8000 text-analysis-web-app