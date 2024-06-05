# PintaGraficas

Este proyecto es un ejemplo de cómo visualizar gráficas a partir de los datos de un TPA (Team Practice Management). Los datos de ejemplo se encuentran en un archivo JSON y se utilizan las bibliotecas Highcharts y Chart.js para la visualización de las gráficas.

## Highcharts y Chart.js

Highcharts es una biblioteca de gráficos escrita en JavaScript pura, que ofrece una forma fácil de agregar gráficos interactivos a tus sitios web o aplicaciones web.

Chart.js es una biblioteca de gráficos de código abierto que proporciona gráficos flexibles y personalizables para diseñadores y desarrolladores. Puedes usarlo para crear gráficos de líneas, barras, radiales, de burbujas y otros en tus aplicaciones web.

## Requisitos

- Node.js v16.10.0
- Angular CLI v13.3.11
- Docker (opcional)

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install
```

## Ejecución en modo desarrollo

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm run start
```

El servidor se iniciará en `http://localhost:4500/`.

## Ejecución con Docker

Si prefieres usar Docker, puedes construir y ejecutar el proyecto con los siguientes comandos:

```bash
sudo docker build -t front .
sudo docker run -d -p 8082:8082 -p 443:443 front
```

Esto construirá una imagen Docker del proyecto y la ejecutará en un contenedor. La aplicación estará disponible en `http://localhost:8082/`.

