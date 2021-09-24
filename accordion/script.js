
//catch the element//
var head = document.getElementsByClassName('accordion');
 

//  make forloop  and make event//
var i;
 for (i=0 ; i<head.length ; i++){
     head[i].addEventListener('click', function (){
         var desc =this.nextElementSibling;

        // toggle => to disappear and appear  /
           this.classList.toggle('active');
         if (desc.style.maxHeight){
             desc.style.maxHeight= null ;
         } else {
             desc.style.maxHeight = desc.scrollHeight + "px";
    
         }
       });

 };
