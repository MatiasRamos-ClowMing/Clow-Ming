$('#myModal').on('shown.bs.modal', function () {
   $('#myInput').trigger('focus')
})


$(document).ready(function(){
   $('.toast').toast('show'); 

   $("#btnToasts").click(function(){
   $("#toast2").toast('show'); 
});    

   $("#btnOcultar").click(function(){
   $("#toast2").toast('hide'); 
});      
});