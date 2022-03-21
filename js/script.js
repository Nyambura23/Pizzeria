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


  // let toppingsPrice ={
  //   "Vegan-friendly": 250,
  //   "Meat-lover": 500,
  //   "Mega-bonanza": 1000,
  //   Bacon:200,
  //   Mushroom: 150,
  //   Pepperoni:250,
  //   Cheese:300,

  // }

  $("table").hide();
  $(".additional-buttons").hide();
  $(".additional-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".additional-info h6").hide();

  $('.btn.order').click(function() {
    var crust = $(".crust option:selected").val();
    var size = $(".size option:selected").val();
    var toppings = []
    $.each($("input[name='toppings']:checked"),function(){
    toppings.push(parseInt($(this).val()))
    })
   
    console.log(toppings)

    var toppingsSum = toppingsTotal(toppings)
    console.log(toppingsSum);
    var total = parseInt(crust) + parseInt(size) + toppingsSum;
    var order = 1;
    var grandTotal = 0;


    $("table").show();
    $(".additional-buttons").show();
    $(".btn.order").hide();


    $("#crust").html($(".crust option:selected").text() + " - " + crust);
    $("#size").html($(".size option:selected").text() + " - " + size);
    $("#toppings").html($(".toppings option:checked").text() + " - " + toppings);
    $("#total").html(total);



    function Pizza(size, toppings, crust, total, orderNo) {
      this.crust = crust;
      this.size = size;
      this.toppings = toppings;
      this.total = total;
      this.orderNo = orderNo;
     
    }

    function toppingsTotal(arr){
      let total=0;
      total+=arr.reduce((x,y)=> x + y)
      return total
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


      
      // var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".crust option:selected").text() + " - " + newPizza.crust + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' +  '</td><td id="total">' + newPizza.total + '</td></tr>'

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
