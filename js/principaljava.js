var imagenes = ['img/libro1.jpg','img/libro2.jpg', 'img/libro3.jpg', 'img/libro4.jpg', 'img/libro5.jpg','img/libro6.jpg'],
      cont = 0;


function carrousel(slider){
    slider.addEventListener('click', e => {
        let atras = slider.querySelector('.atras'),
              adelante = slider.querySelector('.adelante'),
                 img = slider.querySelector('img'),
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
      let contenedor = document.querySelector('.slider');

      carrousel(contenedor);

});

