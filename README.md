

# 💸 PaydApp

<!-- ![Bitnovo Banner](./src/assets/banner.png) -->

Bienvenido al repositorio de la aplicación de pagos de PaydApp. Este proyecto está desarrollado en **React Native** y sigue una arquitectura modular para garantizar la escalabilidad, mantenibilidad y claridad en el código.
A continuacion, te dejo los pasos para ejecutar el proyecto de manera local y ademas, un resumen de como esta estructurado el mismo.

### Pasos para ejecutar el proyecto 📋

### Paso 1: Clonar el repositorio

Clona el repositorio en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/Leancba/PaydApp.git
```

### Paso 2: Instalar dependencias

Navegar hasta la raiz del proyecto y ejecutar el siguiente comando

```bash
npm install
```

### Paso 3: Setear variables de entorno

En la raiz del repositorio, encontraras un .env.example para configurar correctamente el .env 


### Paso 4: Ejecutar el metro 

Este comando compilará y ejecutará la aplicación en un emulador o dispositivo Android conectado.

```bash
npm run android
```


## 📁 Estructura del Proyecto

Este proyecto utiliza una arquitectura modular y escalable para facilitar el mantenimiento, la organización del código y la colaboración entre equipos. A continuación se detalla el propósito de cada carpeta dentro del directorio `src`.


| Carpeta      | Descripción                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `assets`     | Archivos estáticos como imágenes o fuentes                                 |
| `components` | Botones, inputs, modales u otros elementos reutilizables                   |
| `constants`  | Paleta de colores, nombres de rutas, configuración                         |
| `helpers`    | Lógica repetitiva como validaciones o formateo                             |
| `hooks`      | Hooks personalizados como `useAuth`, `useFetch`                            |
| `icons`      | Íconos propios o SVG convertidos a componentes                             |
| `interfaces` | Tipos e interfaces de datos (`User`, `Product`, etc.)                      |
| `navigation` | Navegación principal de la app                                              |
| `redux`      | Estado global (store, reducers, actions)                                   |
| `screens`    | Cada pantalla con su lógica, subcomponentes y estilos                     |
| `services`   | Peticiones HTTP o lógica para consumir APIs                                |
| `types`      | Declaraciones de tipos para archivos externos (`.png`, `.jpg`, etc.)       |




