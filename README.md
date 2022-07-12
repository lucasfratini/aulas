


se debe crear la carpeta frontend y luego ejecutar el siguiente comando:

docker run --rm -v "/home/fratinilucas/Escritorio/uni/aulas/frontend:/aulas" -w "/aulas" -it node:17.8.0-alpine3.14 sh -c "npm install -g @vue/cli && vue create ."

luego crear carpeta backend y ejecutar los scripts de la carpeta bin en el orden mencionado


create-project
first_start

luego se lebanta el docker-compose.yml

se ejecutan las migraciones 

/yii.sh migrate


data/posgres/*
.env
backend/composer/*

DATABASE_NAME=aulas
DATABASE_USER=aulasuser
DATABASE_PASS=1234
USER_UNIX_ID=1000
PRODUCCION= 0

