# OpenAI Text Interaction Web Application

## Setup

1. Install the requirements: `pip install -r requirements.txt`
2. Create a `.env` file in the root directory and add your API_KEY and API_SECRET.
3. Run the app: `uvicorn app.main:app --reload`
4. Build the Docker image: `docker-compose build`
5. Run the Docker container: `docker-compose up`
