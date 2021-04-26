docker network create pfa

docker run --network=pfa --network-alias=mysql_db  --name mysql_db --rm --env-file .env_db -p 3306:3306 -d mysql:5.7.10


docker run --network=pfa --network-alias=nest_api  --name nest_api --env-file .env_nest --rm -p 3000:3000 -d tecdanilo/nest-typeorm-mysql-pfa:latest

