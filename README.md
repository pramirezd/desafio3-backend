# Desafío 3 de Backend con Node y Express

## Instrucciones:
- Crear base de datos 'likeme' con el siguiente comando: \
`CREATE DATABASE likeme;`

- Crear la tabla 'posts' con el siguiente comando: \
`CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),descripcion VARCHAR(255), likes INT);`

- Ejecutar comando `npm install` en el directorio **/backend** y también en el directorio **/frontend** para instalar las dependencias.

- Crear un archivo **.env** en el directorio **/backend** para configurar las variables de entorno, que son las siguientes:
    - PORT= Corresponde al puerto del backend
    - PGHOST= Corresponde al host de la DB
    - PGUSER= Corresponde al user de la DB
    - PGPASSWORD= Corresponde a la contraseña del user de la DB
    - PGDATABASE= Corresponde a la DB a la que nos conectaremos
    - PGPORT= Corresponde al puerto habilitado para conectarse a la DB

- Finalmente para ejecutar el proyecto completo, se debe usar el comando `npm run dev` en el directorio **/backend** y también en el directorio **/frontend**, para levantar ambos servidores y luego ingresar en la URL del servidor de frontend.

### Pablo Ramírez &copy;