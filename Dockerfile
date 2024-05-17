#imagen base de nginx
FROM nginx:alpine

#copia el ccontenido de la carpeta del proyeccto en nginx
COPY . /usr/share/nginx/html

#exponer el puerto 80 para la web
EXPOSE 80

