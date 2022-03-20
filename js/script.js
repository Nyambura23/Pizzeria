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
    var crust = $(".crust option:selected").val();
    var size = $(".size option:selected").val();
    var toppings = $(".toppings option:selected").val();
    var total = parseInt(crust) + parseInt(size) + parseInt(toppings);
    var order = 1;
    var grandTotal = 0;

    $("table").show();
    $(".additional-buttons").show();
    $(".btn.order").hide();

    $("#crust").html($(".crust option:selected").text() + " - " + crust);
    $("#size").html($(".size option:selected").text() + " - " + size);
    $("#toppings").html($(".toppings option:selected").text() + " - " + toppings);
    $("#total").html(total);

    function Pizza(size, toppings, crust, total, orderNo) {
      this.crust = crust;
      this.size = size;
      this.toppings = toppings;
      this.total = total;
      this.orderNo = orderNo;
    }

    $('.btn.add-pizza').click(function() {
      var crust = $(".crust option:selected").val();
      var size = $(".size option:selected").val();
      var toppings = $(".toppings option:selected").val();
      var total = + parseInt(crust) + parseInt(size) + parseInt(toppings);
      order = order + 1;
      grandTotal = grandTotal + total;

      var newPizza = new Pizza(crust, size, toppings, total, order);

})
