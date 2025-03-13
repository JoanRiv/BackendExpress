# Backend con Node.js, Express.js y MongoDB

Este proyecto es un backend para gestionar usuarios y productos con Node.js, Express.js y MongoDB. 
Permite realizar operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar) y lleva un registro de operaciones realizadas.  

---

## Tecnologías Usadas

- **Node.js** - Entorno de ejecución de JavaScript.
- **Express.js** - Framework para manejar rutas y las peticiones HTTP.
- **MongoDB + Mongoose** - Base de datos NoSQL y ODM para interactuar con MongoDB.
- **Cors** - Middleware para habilitar CORS.
- **Dotenv** - Para manejar variables de entorno.

---

## Requisitos Previos

Antes de ejecutar el proyecto, tiene que tener instalado:

- **[Node.js](https://nodejs.org/)** (use la versión 14)
- **[MongoDB](https://www.mongodb.com/try/download/community)**
- **Postman**

---

## Instalación y Configuración

1️⃣ **Clona este repositorio**  
   ```sh
   git clone https://github.com/JoanRiv/BackendExpress.git
   cd BackendExpress

2️⃣ **Instala las dependencias**
    ```sh
    npm install

3️⃣ Configura las variables de entorno

    Crea un archivo .env en la raíz del proyecto con este contenido:
    ```env
    MONGO_URI=mongodb://127.0.0.1:27017/sample

4️⃣ Inicia el servidor

    ```sh
    node server.js

    Deberías ver en la terminal:
    ✅ Conectado a MongoDB
    ✅ Servidor corriendo en http://localhost:5000

--

## Endpoints de la API
🟢 Usuarios /usuarios
Método	        Ruta	        Descripción
GET	            /usuarios	    Obtener todos los usuarios
POST	        /usuarios	    Crear un usuario
PUT	            /usuarios/:id	Actualizar un usuario por ID
DELETE	        /usuarios/:id	Eliminar un usuario por ID

🔵 Productos /productos
Método	        Ruta	        Descripción
GET	            /productos	    Obtener todos los productos
POST	        /productos	    Crear un producto
PUT	            /productos/:id	Actualizar un producto por ID
DELETE	        /productos/:id	Eliminar un producto por ID

📊 Contadores /contadores y /operaciones
Método	        Ruta	        Descripción
GET	            /contadores	    Devuelve la cantidad de usuarios y productos
GET	            /operaciones	Devuelve el número total de operaciones hechas en el backend

--
##  Pruebas en Postman
1️⃣ Abrir Postman y crear una nueva petición.
2️⃣ Probar los endpoints usando los siguientes ejemplos:

    Crear un usuario (POST http://localhost:5000/usuarios)
    {
    "nombre": "Chelo",
    "edad": 19,
    "ocupacion": "Ingeniero"
    }
Obtener todos los usuarios (GET http://localhost:5000/usuarios)
Actualizar un usuario (PUT http://localhost:5000/usuarios/{ID})
    {
        "nombre": "Chelo",
        "edad": 19
    }

Eliminar un usuario (DELETE http://localhost:5000/usuarios/{ID})
