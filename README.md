# Gestión de Posts con React y JSON Server

## Descripción del Proyecto
Este proyecto implementa un sistema básico de gestión de contenido (CRUD) utilizando **React** para el frontend y **JSON Server** para simular una API REST. La aplicación permite visualizar un listado de publicaciones con paginación y crear nuevas entradas que se persisten en la base de datos local.

## Explicación Técnica (¿Por qué se hizo así?)

Para desarrollar esta solución, se tomaron las siguientes decisiones de diseño:

1.  **Hooks de React:**
    * Se utilizó `useState` para manejar el almacenamiento local de los datos (la lista de posts y los datos del formulario) y controlar la paginación.
    * Se empleó `useEffect` en la lista de posts. Esto es fundamental para asegurar que la petición a la API (`fetch`) se ejecute cada vez que el usuario cambia de página, manteniendo la interfaz sincronizada con los datos externos.

2.  **Manejo de Asincronía:**
    * Se optó por utilizar `async/await` en lugar de las cadenas de promesas tradicionales (`.then`). Esto hace que el código sea más legible y fácil de mantener, asemejándose a una ejecución síncrona, lo cual facilita la lectura lógica del flujo de datos.

3.  **Navegación:**
    * Se implementó `react-router-dom` mediante el hook `useNavigate`. Esto permite una experiencia de usuario fluida (Single Page Application), redirigiendo al usuario entre la lista y el formulario sin recargar la página completa.

4.  **Estado Unificado (Formularios):**
    * En el componente de creación, se agrupó el estado de los inputs en un solo objeto. Esto simplifica la lógica de actualización del formulario y hace el código más escalable si se decidieran agregar más campos en el futuro.

## Reflexión Personal

El desarrollo de esta práctica me permitió consolidar conceptos clave sobre cómo interactúa el frontend con el backend. Me di cuenta de la importancia de la **paginación**; cargar todos los datos de golpe no es eficiente, y aprender a pedirle al servidor solo "trozos" de información (usando `_page` y `_limit`) mejora mucho el rendimiento.

También aprendí que la **experiencia de usuario (UX)** depende mucho de la validación. Al principio, si enviaba un formulario vacío daba error, pero al agregar validaciones simples y alertas antes de hacer la petición POST, la aplicación se siente mucho más robusta. En conclusión, conectar React con una API externa (aunque sea simulada) es el paso más importante para crear aplicaciones web reales y dinámicas.
