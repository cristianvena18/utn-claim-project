# Proyecto Metodología de Sistemas I 💻

## Pasos para levantar el proyecto localmente 🚀
1. Clonar localmente el proyecto con `https://github.com/leandrofiore3/PROYECTO-PRINCIPAL-Metodologia-de-Sistemas-I.git`

2. Entrar a la carpeta del proyecto con `cd PROYECTO-PRINCIPAL-Metodologia-de-Sistemas-I/` 

3. Instalar las dependencias con el comando `npm i`

4. Una vez instaladas las dependencias, ejecutar el comando `npm run dev` para levantar el puerto `3000`

Listo, ya podes disfrutar del proyecto. Una vez que lo tengas levantado localmente, podes probar los endpoints con [colección de Postman](https://documenter.getpostman.com/view/21179839/2s9YRCXrYh)

### Docker 🐳

Instalar [docker](https://docs.docker.com/engine/install/)

1. Moverse a la carpeta docker con un `cd docker`

2. Luego construir la imagen con un `docker compose up --build -d` 

3. En caso de mostrar algun error consultar 

NOTA: tener en cuenta que el docker corre en modo production, es decir que cada cambio que hagan deben rebuildear la imagen y no va a funcionar en modo _hot-reload_

