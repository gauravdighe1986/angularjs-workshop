/*
 <div id="app2">
   <h3>App 2 Dynamic</h3>
   {{title}}
 </div>
 */
 

document.addEventListener("DOMContentLoaded", function(){
   
   var divElement = document.getElementById("app2");

   angular.bootstrap(angular.element(divElement), ['app2']);
});

//OR

angular.element(document).ready(function() {
      
     //angular.bootstrap(document);

    var divElement = document.getElementById("app2");

     angular.bootstrap(angular.element(divElement), ['app2']);


   });
 