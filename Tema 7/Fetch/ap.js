// Acceder a la API y descargar la información de los álbumes
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => {
    // Buscar el álbum con el título "quos omnis officia"
    const album = albums.find((album) => album.title === "quos omnis officia");

    // Mostrar la información de todos los álbumes y del que tiene el título "quos omnis officia"
    console.log(albums);
    console.log(album);

    // Obtener el valor del campo userId del álbum encontrado
    const userId = album.userId;
    console.log(`userId=${userId}`);

    // Acceder a la API y descargar la información de los usuarios
    return fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((usersAll) => {
        // Buscar el usuario con el mismo id que el campo userId del álbum encontrado
        const users = usersAll.users;
        const user = users.find((user) => user.id === userId);

        // Mostrar el usuario encontrado

        // Obtener el valor del campo age del usuario encontrado
        const age = user.age;
        console.log(`age=${age}`);

        // Acceder a la API y descargar la información de las fotos
        return fetch("https://jsonplaceholder.typicode.com/photos")
          .then((response) => response.json())
          .then((photos) => {
            // Buscar la foto con el mismo id que el campo age del usuario encontrado
            const photo = photos.find((photo) => photo.id === age);

            // Mostrar la foto encontrada
            console.log(photo);

            // Obtener el valor del campo url de la foto encontrada
            const url = photo.url;
            console.log(url);
            // Mostrar la imagen en el elemento con el identificador "imagen"
            const imagen = document.getElementById("imagen");
            imagen.src = url;
          });
      });
  })
  .catch((error) => console.error(error))
  .finally(() => console.log("Finalizado"));
