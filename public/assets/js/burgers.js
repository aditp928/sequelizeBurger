
$(document).ready(function(){
  
    //Add Burger
    $("#addButton").on("click", function(event){
      var name = $("#burgerName").val().trim();
  
      $.ajax("/api/burger", {
        type: "POST",
        data: {burgerName: name}
      }).then(function(){
        location.reload();
      });
    });
  
    // Devour Burger
    $(".devour-burger").on("click", function(event){
      var id = $(this).data("id");
  
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: {devoured: true}
      }).then(function(){
        location.reload();
      });
    });
  
    // Remove Burger
    $(".remove-burger").on("click", function(event){
      var id = $(this).data("id");
  
      $.ajax("/api/burger/" + id, {
        type: "DELETE",
      }).then(function(){
        location.reload();
      });
    });
  
  });