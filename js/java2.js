var imag = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg','img/im6.jpg'],
  cont=0;

  function carrousel(carru){
      contenedor.addEventListener('click', e => {
          let atras = carru.querySelector ('.atras'),
               adelante = carru.querySelector('.adelante'),
                img =carru.querySelector('img'),
                 tgt = e.target;

               if(tgt == atras){
               	   if(cont > 0){
                       img.src = imag[cont - 1];
                       cont--;
               	   }else{
               	   	   img.src = imag [imag.length - 1];
               	   	   cont = imag.length - 1;
               	   }
                }else if(tgt == adelante){
                       if(cont < imag.length -1){
                           img.src = imag [cont + 1];
                           cont++;
               	   }else{
               	   	     img.src = imag [0];
               	   	     cont = 0;

               	   }
               }

      });
  }
  document.addEventListener("DOMContentLoaded", () => {
       let contenedor = document.querySelector('.carru');
       
       carrousel(contenedor);
  });