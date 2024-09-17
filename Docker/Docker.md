
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
<br>
<br>
![image](https://github.com/Ainara222/Notes/assets/161636797/8c98a852-f23b-4ee1-9392-91b8fd8f2736)


para listar todas las imágenes Docker de tu sistema:

*sudo docker images*

Para obtener más información sobre las imágenes Docker existentes, utiliza el siguiente comando:

*sudo docker images --help*

Utiliza la opción -q a través del símbolo del sistema para listar los ID numéricos de las imágenes disponibles en tu sistema:

*sudo docker images -q*

Para listar todas las imágenes que no están etiquetadas ni referenciadas por un nuevo contenedor, utiliza este comando:

*sudo docker images -f dangling=false*

 Para eliminar una imagen

 *docker rmi imagen_id*
