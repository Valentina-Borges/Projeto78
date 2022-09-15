var images = [ "https://storage.googleapis.com/pod_public/1300/93631.jpg","https://static.vecteezy.com/system/resources/previews/002/124/893/large_2x/one-single-line-drawing-of-young-happy-mom-holding-her-daughter-a-mother-playing-together-with-her-child-at-home-isolated-on-white-background-family-parenthood-concept-illustration-vector.jpg" , "https://img.freepik.com/vetores-premium/desenho-de-linha-continua-crianca-pensando-enquanto-le-o-vetor_500861-193.jpg?w=2000",
             "https://img.freepik.com/free-vector/continuous-line-drawing-happy-father-piggybacking-cute-little-daughter-playing-with-dad-vector_500861-737.jpg?w=740"];
           
var names = ["","Mãe ", "Eu", "Pai"];
          
var i = 1;
function update()
{
     i++;
     
     if(i > 3 )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}