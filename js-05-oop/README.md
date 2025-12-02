# JS-05: Programación Orientada a Objetos (OOP) 

Este repositorio contiene una implementación práctica de **Programación Orientada a Objetos (POO)** utilizando JavaScript moderno (Vanilla JS ES6+).

El proyecto está estructurado siguiendo las mejores prácticas de arquitectura de software para el desarrollo frontend sin dependencias externas (No NPM, No Frameworks).

## 📋 Tabla de Contenidos

- [JS-05: Programación Orientada a Objetos (OOP)](#js-05-programación-orientada-a-objetos-oop)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [📖 Descripción](#-descripción)
  - [📂 Estructura del Proyecto](#-estructura-del-proyecto)

## 📖 Descripción

El objetivo principal es demostrar cómo modularizar una aplicación web separando la lógica de negocio (Modelos) de la manipulación del DOM (Controladores), utilizando la sintaxis de Clases y Módulos de ES6.

Se simula un flujo de registro de usuarios utilizando clases para instanciar objetos y almacenar información.

## 📂 Estructura del Proyecto

La arquitectura separa los recursos estáticos (`assets`) del código fuente (`src`), y organiza las vistas secundarias en `pages`.

```text
JS-05-OOP/
│
├── 📂 assets/              # Recursos estáticos
│   ├── 📂 img/             # Imágenes (cat.jpg, dino.jpg)
│   └── 📂 json/            # Mock data (lego-chef.json, productos.json)
│
├── 📂 src/                 # Código fuente lógico
│   ├── 📂 css/             # Estilos y diseño global
│   │   └── style.css
│   │
│   ├── 📂 js/              # Controladores y Lógica de Interfaz
│   │   └── main.js         # Punto de entrada (DOM Manipulation)
│   │
│   └── 📂 models/          # Modelos de Datos (OOP)
│       └── User.js         # Definición de Clases
│
├── 📂 pages/               # Vistas HTML adicionales
│   └── about-us.html
│
├── index.html              # Landing Page (Punto de entrada)
└── README.md               # Documentación
```