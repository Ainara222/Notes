
## **POSTMAN** 

### [*Concepto de Postman:*](../Strapi/README.md#concepto-de-postman) 

### *hacer peticiones HTTP*

*Tipo de Petición HTTP:*
Postman te permite realizar varios tipos de peticiones HTTPy HTTPS, como GET, POST, PUT, DELETE, etc. Estas peticiones corresponden a las acciones que deseas realizar en el servidor al que estás enviando la solicitud.En las versiones más recientes, Postman también ha comenzado a ofrecer soporte experimental para gRPC (Protocolo de control remoto de Google).

```
Ejemplo sencillo de diferencia entre HTTP Y GRPC
------------------------------------------------

HTTP: Si usas HTTP, cada vez que un usuario envía un mensaje, la aplicación debe abrir un nuevo sobre (una solicitud HTTP) y colocar el mensaje dentro.
Luego, la aplicación envía este sobre al servidor, que lo entrega al destinatario.
Luego, repite este proceso para cada mensaje que se envíe.
Es como enviar cartas por correo regular: una carta a la vez.

GRPC: Si usas gRPC, la aplicación puede colocar múltiples mensajes dentro de un solo sobre (una llamada gRPC).
Luego, envía este sobre al servidor, que puede abrirlo y leer todos los mensajes al mismo tiempo.
Esto es más rápido y eficiente que HTTP, ya que puedes enviar y recibir múltiples mensajes en una sola operación.
Es como enviar múltiples cartas en un solo sobre.

```

*URL y Puerto:*
Cuando haces una petición HTTP, necesitas especificar la URL del servidor al que deseas enviar la solicitud. Esto incluye el nombre del dominio o la dirección IP del servidor, así como la ruta específica a la que deseas acceder. Además, puedes especificar un puerto si el servidor utiliza un puerto diferente al puerto predeterminado (por ejemplo, 80 para HTTP y 443 para HTTPS).

*Colecciones y Request:*
En Postman, puedes organizar tus solicitudes en colecciones. Una colección es simplemente un grupo de solicitudes relacionadas. Por ejemplo, podrías tener una colección para las solicitudes relacionadas con la autenticación, otra para las solicitudes relacionadas con la gestión de usuarios, etc.
Dentro de una colección, cada solicitud se denomina "request". Un request en Postman representa una única solicitud HTTP que puedes enviar al servidor. Puedes configurar el tipo de solicitud (GET, POST, etc.), la URL, los parámetros, las cabeceras y el cuerpo de la solicitud según sea necesario para tu caso de uso.

### *API TOKENS*

### [*Crear una API token desde Strapi:*](../Strapi/README.md#api-tokens-desde-strapi) 

Para añadir un API token a la peticion desde POSTMAN se hace de la siguiente manera:

1. En la sección de encabezados, haz clic en el botón "Add Header" (Añadir Encabezado).
2. En el campo "Key" (Clave), escribe "Authorization".
3. En el campo "Value" (Valor), escribe "Bearer {tu-token}" donde {tu-token} es el token de tu API.
4. Haz clic en "Save" (Guardar) para añadir el encabezado a la solicitud.

**Una vez añadido, este encabezado de autorización enviará el token de API junto con tu solicitud.**



