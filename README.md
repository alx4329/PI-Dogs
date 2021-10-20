<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Dogs

<p align="left">
  <img height="200" src="./dog.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.


## Descripcion

Henry Dogs en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar perros
  - Filtrarlos / Ordenarlos
  - Agregar nuevos perros


#### Tecnologías utilizadas:
- [✔️] React
- [✔️] Redux
- [✔️] Express
- [✔️] Sequelize - Postgres

#### Frontend

Compuesto por:

__Pagina inicial__: 
- [✔️] Alguna imagen de fondo representativa al proyecto
- [✔️] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: 
- [✔️] Input de búsqueda para encontrar razas de perros por nombre
- [✔️] Área donde se verá el listado de razas de perros. Deberá mostrar su:
  - Imagen
  - Nombre
  - Temperamento
- [✔️] Botones/Opciones para filtrar por por temperamento y por raza existente o agregada por nosotros
- [✔️] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por orden alfabético y por peso
- [✔️] Paginado para ir buscando y mostrando las siguientes razas

__Ruta de detalle de raza de perro__: 
- [✔️] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
- [✔️] Altura
- [✔️] Peso
- [✔️] Años de vida

__Ruta de creación de raza de perro__: 
- [✔️] Un formulario __controlado__ con los siguientes campos
  - Nombre
  - Altura (Diferenciar entre altura mínima y máxima)
  - Peso (Diferenciar entre peso mínimo y máximo)
  - Años de vida
- [✔️] Posibilidad de seleccionar/agregar uno o más temperamentos
- [✔️] Botón/Opción para crear una nueva raza de perro

#### Base de datos

Compuesto por las siguientes entidades:
- [✔️] Raza con las siguientes propiedades:
  - ID *
  - Nombre *
  - Altura *
  - Peso *
  - Años de vida
- [✔️] Temperamento con las siguientes propiedades:
  - ID
  - Nombre


#### Backend

Servidor en Node/Express con las siguientes rutas:

- [✔️] __GET /dogs__:  
- [✔️] __GET /dogs?name="..."__:  
- [✔️] __GET /dogs/{idRaza}__:  
- [✔️] __GET /temperament__:  
- [✔️] __POST /dog__:
  

#### Testing
- [✔️] Al menos tener un componente del frontend con sus tests respectivos
- [✔️] Al menos tener una ruta del backend con sus tests respectivos
- [✔️] Al menos tener un modelo de la base de datos con sus tests respectivos
