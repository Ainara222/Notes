
## **STRAPI** 

### *Concepto de Strapi:*

Strapi es un CMS (Sistema de Gestión de Contenidos) de código abierto y sin cabeza (headless) que permite a los desarrolladores crear fácilmente APIs RESTful o GraphQL personalizadas para sus aplicaciones web o móviles. Con Strapi, puedes definir tus propios modelos de datos, configurar relaciones entre ellos y exponer estos datos a través de una API personalizada.

Este es el curso de Udemy que me hice para aprender lo basico sobre Strapi y peticiones HTTP con postman..
[*Curso de Udemy:*](https://www.udemy.com/course/strapi-v4-curso-introductorio-gratuito-desde-cero/) 


*Requisitos:*
Para utilizar Strapi, necesitas tener instalado Node.js en tu sistema. Además, Nest.js es un framework de backend para Node.js, por lo que también necesitarías tenerlo instalado si decides utilizarlo en conjunto con Strapi.

*Descarga:*
Para descargar Strapi desde su sitio web oficial (https://strapi.io/). Una vez descargado, puedes instalarlo fácilmente utilizando npm, el gestor de paquetes de Node.js,
con el siguiente comando:
'npm install strapi@latest -g'
Esto instalará la última versión de Strapi **de forma global** en tu sistema.

[*Documentación de Strapi:* ](https://docs.strapi.io/)


*Interfaz de Usuario:*
La interfaz de usuario de Strapi es intuitiva y fácil de usar.
Proporciona un panel de administración donde puedes definir tus modelos de datos, configurar tus API, gestionar usuarios y roles, y realizar otras tareas relacionadas con la gestión de contenido.

*Postman:*

Postman es una herramienta popular para probar y documentar APIs. Puedes usar Postman para hacer peticiones HTTP a tu API de Strapi y probar su funcionamiento.
Te permite enviar diferentes tipos de solicitudes (GET, POST, PUT, DELETE, etc.), adjuntar datos de formulario o JSON en el cuerpo de la solicitud, y ver las respuestas recibidas.
Es una herramienta útil para el desarrollo y la depuración de APIs.

[*Para descargar POSTMAN:*](https://www.postman.com/downloads/)

⚠️ **¡Advertencia!**

Yo en LINUX al descargar postman se crasheaba despues de iniciar sesion y para solucionarlo encontré lo siguiente: 

*Instalé Postman manualmente y el mismo problema comenzó a ocurrir después de iniciar sesión. Luego hice lo mismo manualmente, creé el directorio*

'~/.var/app/com.getpostman.Postman/config/Postman/proxy'

*y ejecuté el mismo comando que todos dicen que use.*

'openssl req -subj '/C=US/CN=Postman Proxy' -new -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -keyout postman-proxy-ca.key -out postman-proxy-ca.crt'

