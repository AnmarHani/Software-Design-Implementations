FROM python

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip  

RUN pip install -r ./requirements.txt

COPY . .

WORKDIR /app/core

RUN python manage.py makemigrations && \
    python manage.py migrate

CMD python manage.py runserver 0.0.0.0:8000