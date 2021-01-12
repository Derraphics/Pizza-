$(document).ready(function(){
    $("#order").click(function(){
      $("#form1").toggle();
    });
  });
  function Results (type,size,crust,toppings) {
    this.type = type;
    this.size= size;
    this.crust= crust;
    this.toppings=toppings;
  };
  Results.prototype.order = function() {
    return "You have made an order of " + this.type + " pizza  with " + this.toppings + " as toppings and " + this.crust + " for crust ."
  };
  function TotalPrice (price, quantity, delivery,toppings,crust) {
    this.price= price;
    this.quantity=quantity;
    this.delivery=delivery;
    this.toppings=toppings;
    this.crust=crust;
  };
  TotalPrice.prototype.finalTotal = function () {
    return ( this.price + this.delivery + this.toppings + this.crust )* this.quantity ;
  };
  let sizePrices = [1200, 800, 600]
  let priceToppings = [100,120,80,150,200]
  let toppingsName= ["Pepperoni" , "mushroom" , "salad" ,"sausage", " salami"]
  let crustNames= ["Crispy", "Stuffed", "Glutton-free"]
  let crustPrices = [100,120,200]
  let deliveryPrices = [0, 200];
  $(document).ready(function(){
    $('form#form1').submit(function (event) {
        event.preventDefault();
    let pizzaType = $('#type').val();
    let pizzaSize = parseInt($('#size').val());
    let pizzaToppings=parseInt($('#toppings').val());
    let priceCrust =parseInt($('#crust').val());
    let pizzaTop = $('#toppings').val();
    let pizzaQty = parseInt($('#quantity').val());
    let pizzaPick = parseInt($('#delivery').val());
    let price = sizePrices[pizzaSize - 1];
    let DeliveryCost = deliveryPrices[pizzaPick - 1];
    let ToppingsCost = priceToppings[pizzaToppings-1];
    let crustCost = crustPrices[priceCrust-1]
    let topNames = toppingsName[pizzaTop-1]
    let crustName = crustNames[priceCrust-1] 
    newOrder = new Results(pizzaType,pizzaSize, crustName,topNames,crustName);
    newTotal = new TotalPrice(price, pizzaQty, DeliveryCost,ToppingsCost,crustCost);
    if (pizzaPick===1){
        alert( newOrder.order());
        alert("Your bill is: " + newTotal.finalTotal());
        alert("Thank you for shopping with us! " )
        }else{
            if(pizzaPick===2){
               let location= prompt(" Where would your like your Pizza to be Delivered? ");
               alert("Your pizza will be delivered at " + location + " in a few minutes from now and you will be charged $20 for delivery");
               alert(newOrder.order());
               alert("Your bill is: " + newTotal.finalTotal());
               alert("Thank you for shopping with us!")
               alert("You are much welcomed again and again")
               alert("Remember to leave us a feedback on what you liked and what you did not like")
               alert("Have a nice time dear one")
            }
        }
  })
  });
  function validateForm() {
    let name = document.getElementById("name").value;
    alert( name + " we have received your message thank you for your feedback");
  }
  