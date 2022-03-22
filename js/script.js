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
 $(".additional-info h6").hide();

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

      var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="total">' + newPizza.total + '</td></tr>'


      $("#pizza").append(newRow);
    });

    $(".btn.check-out").click(function() {
      $(".btn.add-pizza").hide();
      $(".btn.check-out").hide();
      $(".additional-info").show();
      $(".btn.yes").show();
      $(".btn.no").show();
      $(".additional-info .location").hide();
      $(".additional-info p").hide();
      grandTotal = grandTotal + total;

      $(".additional-info h span").html(grandTotal);
    });

    $(".btn.yes").click(function() {
      $(".additional-info h4").hide();
      $(".btn.yes").hide();
      $(".btn.no").hide();
      $(".additional-info .location").show();
      $(".additional-info h span").html(grandTotal + 200);
    });

    $(".btn.no").click(function() {
      $(".additional-info h4").hide();
      $(".btn.yes").hide();
      $(".btn.no").hide();
      $(".additional-info .location").hide();
      $(".additional-info p").show();
    });

    $(".btn.complete").click(function() {
      var location = $(".additional-info .location input").val();
      $(".additional-info h6").show();
      $(".additional-info .location").hide();
      $(".additional-info h6 span").html(location);
    });

  });

})
