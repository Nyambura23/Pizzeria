$(document).ready(function(){
  let elements=[1,2,3]

  elements.forEach((index)=>{
    $('.content'+index).hover(function(){
      $('.hidden-content'+index).toggle();
      $('.content'+index).toggle()
    });

    $('.hidden-content'+index).hover(function(){
      $('.content'+index).toggle();
      $('.hidden-content'+index).toggle()
    });
  });


  $("table").hide();
  $(".additional-buttons").hide();
  $(".additional-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".additional-info h4").hide();

  $('.btn.order').click(function() {
    var crustOfPizza = $(".crust option:selected").val();
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    var order = 1;
    var grandTotal = 0;
})
