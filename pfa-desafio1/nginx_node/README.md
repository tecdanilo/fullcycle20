Desafio 1 - PFA

Crie um programa utilizando sua linguagem de programação favorita que faça uma listagem simples do nome de alguns módulos do curso Full Cycle os trazendo de um banco de dados MySQL. Gere a imagem desse container e a publique no DockerHub.

Gere uma imagem do nginx que seja capaz que receber as solicitações http e encaminhá-las para o container.

Crie um repositório no github com todo o fonte do programa e das imagens geradas.

Crie um arquivo README.md especificando quais comandos precisamos executar para que a aplicação funcione recebendo as solicitações na porta 8080 de nosso computador. Lembrando que NÃO utilizaremos Docker-compose nesse desafio.

```
# Crie a rede
docker network create pfa_tecdanilo

# sobe o mysql - alterar o arquivo .env_db se necessário
docker run --network=pfa_tecdanilo --network-alias=mysql_db  --name mysql_db --rm --env-file .env_db -p 3306:3306 -d mysql:5.7.10

# sobe a api nest onde as migração vão criar e popular o banco de dados com as informações do curso
# Alterar o arquivo .env_nest se necessário
docker run --network=pfa_tecdanilo --network-alias=nest_api  --name nest_api --env-file .env_nest --rm -d tecdanilo/nest-typeorm-mysql-pfa:latest

# Sobe o proxy para o nest
docker run --network=pfa_tecdanilo --name nginx --rm -p 80:80 -d tecdanilo/nginx-proxy-pfa
```