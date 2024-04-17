# Notes 

## **DOCKER** 

### *Concepto de Docker:*
Docker ofrece una solución eficaz para la creación, implementación y ejecución de aplicaciones en contenedores.
Los contenedores Docker permiten la encapsulación de aplicaciones junto con sus dependencias, facilitando su portabilidad y consistencia en diferentes entornos.

*Creación de contenedores:*
Utilizando el comando 'docker run', he aprendido a crear y ejecutar contenedores Docker para instanciar aplicaciones.

*Volúmenes en Docker:*
Los volúmenes en Docker actúan como repositorios de datos persistentes, independientes del ciclo de vida del contenedor.
La creación de volúmenes se realiza mediante el comando docker volume create.
Se puede borrar el contenedor y el volumen persiste disponible para otros contenedores , pero si borras el volumen puede afectar la persistencia de cualquier contenedor que dependa de ese volumen.

*Descarga de imágenes desde Docker Hub:*
Utilicé el comando 'docker pull' para descargar imágenes preexistentes desde Docker Hub.
Docker Compose simplifica la gestión de aplicaciones multi-contenedor al definir toda la configuración en un solo archivo YAML.
Usé Docker Compose para agrupar imágenes preexistentes como phpMyAdmin, bases de datos y WordPress desde [Docker Hub](https://hub.docker.com/) en un solo archivo, facilitando el despliegue de mis aplicaciones con un simple comando 'docker-compose up'.

*Instalación de Docker:*
[Para descargar Docker, seguí las instrucciones proporcionadas en el sitio web siguiente](https://docs.docker.com/get-started/02_our_app/)
 
*Docker Desktop y Docker Compose:*
Docker Desktop proporciona una interfaz gráfica intuitiva para gestionar contenedores Docker en mi sistema operativo local.
Además, he descubierto la eficacia de Docker Compose, una herramienta que simplifica la definición y el despliegue de aplicaciones complejas mediante la configuración en un único archivo.

*Curso encontrado gratuito Udemy*
[Udemy: Imagenes y contenedores](https://www.udemy.com/course/fundamentos-docker/)

*Ejemplo de contenedores creados y de imagenes*
![image](https://github.com/Ainara222/Notes/assets/161636797/32eeed94-9875-4c55-84c2-a6c340e1ca2f)
![image](https://github.com/Ainara222/Notes/assets/161636797/8c98a852-f23b-4ee1-9392-91b8fd8f2736)

# TIL
:memo: Today I Learned

We at Stakater constantly learn new things. This is a repo to share those learnings. TILs are short Markdown documents (a few sentences + example code) explaining concepts, bits of syntax, commands, or tips we've recently learned.

For new TILs, watch this repo

# About

We stole this idea from [jbranchaud/til](https://github.com/jbranchaud/til). Previously we had been gathering our learnings in a single gist but we hit the limit of comments on a gist; and we couldn't open our gist anymore!

