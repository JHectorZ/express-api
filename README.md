<p align="center"><a href="" rel="noopener"><img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a></p>

<h3 align="center">project_express_api</h3>

<div align="center">
  
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">API de ejemplo que se conecta a una base de datos utilizando TypeORM para realizar operaciones CRUD.</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [Running the Tests](#tests)
- [Usage](#usage)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgements](#acknowledgement)

## 🧐 About <a name="about"></a>

Este proyecto es una API de ejemplo que se conecta a una base de datos utilizando TypeORM. Proporciona funcionalidades para realizar operaciones CRUD en la base de datos.

## 🏁 Getting Started <a name="getting_started"></a>

Estas instrucciones te ayudarán a obtener una copia del proyecto en tu máquina local para propósitos de desarrollo y pruebas. Consulta [Deployment](#deployment) para obtener notas sobre cómo implementar el proyecto en un sistema en vivo.

### Prerequisites <a name="prerequisites"></a>

Antes de comenzar, asegúrate de tener instalado lo siguiente:
- Node.js
- npm

### Installing <a name="installing"></a>

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local:

1. Clona el repositorio:

```
git clone https://github.com/tu_usuario/tu_repositorio.git
```


2. Ve al directorio del proyecto:


```
cd tu_repositorio
```


5. Crea un archivo `.env` en la raíz del proyecto y proporciona las siguientes credenciales para tu base de datos:

```
DB_HOST=host
DB_PORT=port
DB_USERNAME=username
DB_PASSWORD=password
DB_DATABASE=database
```

## 🔧 Running the Tests <a name="tests"></a>

Para ejecutar desde TypeScript

```
npm run dev
```

Para pasarlo a JavaScript

```
npm run build
```

Agrega notas adicionales sobre cómo implementar esto en un sistema en vivo.

## ⛏️ Built Using <a name="built_using"></a>

- [TypeORM](https://typeorm.io/) - ORM (Object-Relational Mapping) para la base de datos
- [Express](https://expressjs.com/) - Framework de servidor
- [MySQL](https://www.mysql.com/) - Base de datos relacional
- [cors](https://www.npmjs.com/package/cors) - Middleware para habilitar CORS en Express
- [dotenv](https://www.npmjs.com/package/dotenv) - Carga las variables de entorno desde un archivo .env
- [morgan](https://www.npmjs.com/package/morgan) - Logger HTTP para Express
- [mysql2](https://www.npmjs.com/package/mysql2) - Cliente MySQL para Node.js
- [nodemon](https://www.npmjs.com/package/nodemon) - Herramienta para reiniciar automáticamente el servidor durante el desarrollo
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) - Biblioteca para habilitar la reflexión de metadatos en TypeScript

## 🎈 Usage <a name="usage"></a>

Todas las peticiones se hacen desde el /user