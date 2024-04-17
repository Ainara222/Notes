
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

### *Concepto de Postman:*

Postman es una herramienta popular para probar y documentar APIs. Puedes usar Postman para hacer peticiones HTTP a tu API de Strapi y probar su funcionamiento.
Te permite enviar diferentes tipos de solicitudes (GET, POST, PUT, DELETE, etc.), adjuntar datos de formulario o JSON en el cuerpo de la solicitud, y ver las respuestas recibidas.
Es una herramienta útil para el desarrollo y la depuración de APIs.

[*Para descargar POSTMAN:*](https://www.postman.com/downloads/)

⚠️ **¡Advertencia!**

Yo en LINUX al descargar postman se crasheaba despues de iniciar sesion y para solucionarlo encontré lo siguiente
[*desde github*](https://github.com/postmanlabs/postman-app-support/issues/12330):

Instalé Postman manualmente y el mismo problema comenzó a ocurrir después de iniciar sesión. Luego hice lo mismo manualmente, creé el directorio

```
'~/.var/app/com.getpostman.Postman/config/Postman/proxy'
```
y ejecuté el mismo comando que todos dicen que use.

```
'openssl req -subj '/C=US/CN=Postman Proxy' -new -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -keyout postman-proxy-ca.key -out postman-proxy-ca.crt'
```

### *API tokens desde Strapi*

Para crear una API token desde Strapi es muy sencillo, simplemente con navegar hasta la configuracion de strapi en el menu lateral y en la pestaña de 'API tokens' añadir una nueva.
La interfaz es muy intuitiva para crear una API token. Esto te devuelve una clave alfanumérica única que puedes utilizar para autenticar las solicitudes a tu API.

Despues desde postman en este caso deberas añadir el token (Barer) al header de la peticion sino sin una autenticación adecuada, Strapi no podrá verificar la identidad del cliente que realiza la solicitud y no permitirá el acceso a los recursos protegidos por la API. En este caso, es probable que Strapi responda con un código de estado de error, como 401 Unauthorized, indicando que la solicitud no está autorizada.

### [*añadir API token desde Postman:*](../Postman/README.md#api-tokens) 


### *Concepto de Nest.js:*

*¿Qué es NestJS?*

- Basado en Express: NestJS utiliza Express.js como su base, lo que significa que puedes aprovechar la potencia de Express junto con las capacidades de NestJS.

- Arquitectura modular: NestJS utiliza una arquitectura modular y proporciona una estructura organizada para tus aplicaciones.
  Utiliza módulos, controladores y servicios para organizar y gestionar el código de manera eficiente.

- Inyección de dependencias: NestJS utiliza el patrón de inyección de dependencias para gestionar las dependencias entre diferentes partes de la aplicación de forma limpia y desacoplada.

- Soporte para TypeScript: NestJS está completamente escrito en TypeScript y proporciona soporte nativo para TypeScript, lo que te permite aprovechar las características del lenguaje,    como el tipado estático y la verificación de tipos en tiempo de compilación.

- Node.js en NestJS: Node.js es la plataforma subyacente sobre la cual se ejecuta NestJS.
  NestJS utiliza Node.js para ejecutar tu aplicación en el servidor, aprovechando su capacidad para manejar solicitudes HTTP y ejecutar código JavaScript en el servidor.

**Instalación de NestJS CLI utilizando npm:**

```
npm install -g @nestjs/cli
```

**Crear una aplicación de Nest**

```
nest new nombre-de-tu-app-nest
```

[*Documentacion de NEST.JS*](https://docs.nestjs.com/)
