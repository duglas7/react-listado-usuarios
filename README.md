# Proyecto de Entrevista 

Puede abrir este proyecto por Github Pages aqui [Listado de Usuarios](https://duglas7.github.io/react-listado-usuarios/).


## Como comenzar
1. Clona este repositorio:
    ```git clone https://github.com/duglas7/react-listado-usuarios``` 
2. Instala todas las dependencias:
    ```npm install```
3. Empienza la aplicación:
    ```npm start```
4. Abre en tu navegador la siguiente url [http://localhost:3000/](http://localhost:3000/)

## Descripción del Desarrollo del proyecto?
Para el Desarrollo de este proyecto se debieron considerar la utilizacion de ReactJS en su ultima versión la cual fue generada por el comando npx create-react-app el cual crea un ambiente comodo para construir una nueva aplicación de página única usando React, donde se trabajo con los Hooks useState que permite añadir el estado de React a un componente de función y useEffect que nos permite acceder al ciclo de vide de un componente funcional, por medio de Axios que es un cliente HTTP basado en Promesas para Javascript se realiza la petición a la API de https://randomuser.me donde el endpoint que fue entregado es el siguiente: https://randomuser.me/api/?results=15 el cual nos regresa multiples datos de usuarios, 15 para ser expecifico, estos datos fueron almacenados con el metodo del Hook useStete el cual nos permite modificar el valor de una variable en React, una vez almacenados los datos, los mismos fueron mostrados por el metodo .map() de JavaScript que nos permite mapear todos los elementos de un Array, el proyecto cuenta con un buscador de usuarios por nombres donde la funcionalidad que se implementado para ello fue por medio del metodo .filter() el cual mediante un metodo condicional comparamos el valor ingresado por un input con los nombres de los usuarios ya listados y si este coincidia se mostraba unicamente el usuario buscado, de la misma manera se crea la funcionalidad que permite por medio de un botón la eliminación de la lista de un Usuario en particular donde de manera similar se filtra por el identificador unico al usuario y este es retirado de la lista de usuarios.

El proyecto no cuenta con librerias de css como Bootstrap, Material UI, foundation, materialize, entre otras, todo el Css fue escrito de manera nativa.

El desarrollo del proyecto fue elaborado en un componente funcional de nombre Usuarios.js para mantener el mismo de la manera mas sencilla posible.

## Estructura del Proyecto
La estructura del proyecto se verá así:
```
la-carpeta-de-esta-aplicación/
  node_modules/
  public/
      index.html
      favicon.ico
      manifest.json
  src/
    components/
        components/
            Usuarios.js
    App.js
    App.css
    index.js
    .gitignore
  package-lock.json
  package.json
  README.md  
