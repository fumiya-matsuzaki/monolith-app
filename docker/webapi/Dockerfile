FROM python:3.9.16-buster

ENV PYTHONUNBUFFERED 1
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

WORKDIR /webapi
COPY ./webapi/requirements.txt .
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

COPY ./webapi .

CMD ["bash", "-c", "uvicorn main:app --reload --host 0.0.0.0 --port 8000"]