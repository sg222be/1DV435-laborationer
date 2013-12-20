

   


    var images_array = new Array();
    images_array[0] = "http://homepage.lnu.se/student/sg222be/kurs/1me402/TopGame.png";
    images_array[1] = "http://homepage.lnu.se/student/sg222be/kurs/1me402/PopArt.png";
    images_array[2] = "http://homepage.lnu.se/student/sg222be/kurs/1me402/GraphicsStore.png";
    images_array[3] = "http://homepage.lnu.se/student/sg222be/kurs/1me402/MeAndMyself.png";
   
    setInterval(function() { changeImage() }, 3000); 
   var counter = 0; 
   function changeImage(){

        var image = document.querySelector("#HelloImage");
        image.setAttribute("src", images_array[counter]);
        counter++;
        if(counter > 3){
            counter = 0;
        }
   }
   
  

    
