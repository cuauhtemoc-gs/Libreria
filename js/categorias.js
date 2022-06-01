 var imagenes = ['img/libro5.jpg','img/libro1.jpg', 'img/libro2.jpg', 'img/libro3.jpg', 'img/libro4.jpg'],
      cont = 0;


function carrousel(carrusel){
    carrusel.addEventListener('click', e => {
        let atras = carrusel.querySelector('.atras'),
              adelante = carrusel.querySelector('.adelante'),
                 img = carrusel.querySelector('img'),
                  tgt = e.target;


                if(tgt == atras){
                     if(cont > 0){
                       img.src = imagenes[cont -1];
                        cont--;
                     }  else{
                     img.src = imagenes[imagenes.length -1 ];
                     cont = imagenes.length - 1; 
                     }

                  }    else if(tgt == adelante){
                         if(cont < imagenes.length - 1){
                           img.src = imagenes[cont + 1];
                            cont++;
                          } else{
                     img.src = imagenes[0];
                     cont = 0;
                     }
                }

             });
      }

document.addEventListener("DOMContentLoaded", () =>{
      let contenedor = document.querySelector('.carrusel');

      carrousel(contenedor);

});

