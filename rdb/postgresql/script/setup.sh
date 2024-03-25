#!/bin/sh

psql -U rdb -h rdb -p 5432 -d rdb -f /script/sql/trancate_all.sql