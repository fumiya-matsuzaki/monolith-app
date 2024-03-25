FROM postgres:12.13-alpine

ENV TZ Asia/Tokyo
ENV LANG js_JP.UTF-8
ENV POSTGRES_DB rdb
ENV POSTGRES_USER rdb
ENV POSTGRES_PASSWORD rdb
ENV POSTGRES_PORT 5432

ADD ./rdb/postgresql/script/*.sh /script/
ADD ./rdb/postgresql/script/sql/* /script/sql/
RUN chmod +x /script/*.sh