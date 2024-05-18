#imagen base de httpd
FROM httpd:alpine

#copia el contenido de la carpeta del proyecto httpd
COPY . /usr/local/apache2/htdocs

#exponer el puerto 80 para la web
EXPOSE 80