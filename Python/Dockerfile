FROM python:3.10-alpine
WORKDIR /app
LABEL authors="admin"

COPY requirements/deps.txt .

RUN python -m venv /venv
ENV PATH="/venv/bin:$PATH"

RUN pip install -r deps.txt

COPY . .

EXPOSE 8080

CMD [".venv/bin/uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]