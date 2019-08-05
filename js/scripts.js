

function Order(pizzas,size,topp,crust,quantity,deliver) {
    this.pizzaName= pizzas;
    this.pizzaToppings= topp;
    this.pizzaSize = size;
    this.pizzaCrust=crust;
    this.pizzaQuantity=quantity;
    this.pizzaDeliver= deliver;
  }

  Order.prototype.fullOrder = function() {
    return this.pizzaName + ", " + this.pizzaToppings + ", " + this.pizzaSize +" ," +this.pizzaCrust + ", " + this.pizzaQuantity + ", " + this.pizzaDeliver;
  }

   // user interface logic
   $(document).ready(function() 
   {
    var pizzaTopps=[];
    $('button#orderNow').click(function(event) {
       
        event.preventDefault();
       //pizza name










       
    if($('#pizza1:checked').val())
    {
        var order1='$5';
        var pizzas=$('#pizza1').val(); + " "+ "price=$5"
        console.log(pizzas);
    }
    else if($('#pizza2:checked').val())
    {
        var order1='$6';
        var pizzas=$('#pizza2').val(); + " "+ "price=$6"
        console.log(pizzas);
    }
    else if($('#pizza3:checked').val())
    {
        var order1='$8';
        var pizzas=$('#pizza3').val(); + " "+ "price=$8"
        console.log(pizzas);
    }
    else if($('#pizza4:checked').val())
    {
        var order1='$6';
        var size=$('#pizza4').val(); + " "+ "price=$6"
        console.log();
    }
    else if($('#pizza5:checked').val())
    {
        var order1='$5';
        var pizzas=$('#pizza5').val(); + " "+ "price=$5"
        console.log(pizzas);
    }
    else if($('#pizza6:checked').val()){
        var order1='$8';
        var pizzas=$('#pizza6').val(); + " "+ "price=$8"
        console.log(pizzas);
    }
    else
    {
      console.log("invalid input");
    }
        //pizza size
    if($('#small:checked').val()){
            var order2='$2';
            var size=$('#small').val(); + " "+ "price=$2"
            console.log(size);
    }
    else if($('#medium:checked').val()){
            var order2='$3';
            var size=$('#medium').val(); + " "+ "price=$3"
            console.log(size);
        }
       else if($('#large:checked').val()){
            var order2='$4';
            var size=$('#large').val(); + " "+ "price=$"
            console.log(size);
        }
        else {
            console.log("invalid input");
        }
         //pizza toppings
         console.log(pizzaTopps);
         var order3=0;
    for(var i=0; i<pizzaTopps.length ;i++) 
    {
      if(pizzaTopps[i]=="Spinach")
      {
         order3 +='$1';
    }
    if(pizzaTopps[i]=="Mushrooms")
    {
       order3 +='$2';
    }
    if(pizzaTopps[i]=="Onions")
      {
         order3 +='$1';
    }
    if(pizzaTopps[i]=="Sausage")
      {
         order3 +='$3';
    }
    if(pizzaTopps[i]=="Cheese")
      {
         order3 +='$3';
    }
    if(pizzaTopps[i]=="Pineaple")
      {
         order3 +='$2';
    }
    else {
        console.log("invalid input");
    }
    console.log(order3);
    }
     //pizza crust
     if($('#crust1:checked').val()){
        var order4='$1';
        var crust=$('#crust1').val(); + " "+ "price=$1"
        console.log(crust );
    }
    else if($('#crust2:checked').val()){
        var order4='$2';
        var crust=$('#crust2').val(); + " "+ "price=$2"
        console.log(crust);
    }
    else if($('#crust3:checked').val()){
        var order4='$1';
        var crust=$('#crust3').val(); + " "+ "price=$1"
        console.log(crust);
    }
    else if($('#crust4:checked').val()){
        var order4='$3';
        var crust=$('#crust4').val(); + " "+ "price=$3"
        console.log(crust);
    }
    else {
        console.log("invalid input");
    }
      // pizza delivery
    if($('#no:checked').val()){
        var order5='$0';
        var delivery=$('#no').val(); + " "+ "price=$0"
        console.log(delivery);
    }
    else if($('#yes:checked').val()){
        var order5='$3';
        var delivery=$('#yes').val(); + " "+ "price=$3"
        console.log(delivery);
        var address=prompt("Enter your location");
    }
    else {
        console.log("invalid input");
    }
    var quantity=$('select#pizzaquantity').val();
    console.log(quantity)
    var sum=parseInt(order1)+parseInt(order2)+parseInt(order3)+parseInt(order4)+parseInt(order5);
    console.log(sum);
    var newOrder=new Order(pizzas +order1,size + order2,pizzaTopps + order3,crust +order4,quantity,delivery + order5);
    console.log(newOrder);
    $("ul#show-all").append("<li><span >" + newOrder.fullOrder() + "</span></li>");

    // $(".").last().click(function() {
    //   $("#show-checkout").show();
    //   $("#show-checkout h2").text(newOrder.fullOrder());
    //   $(".").text(newOrder.pizzaName);
    //   $(".last-name").text(newContact.);
    //   $("ul#addresses").text("");
    //   newContact.addresses.forEach(function(address) {
    //     $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.county + "</li>");
    //   });
    // });

//     $("select#").val("");
//     $("select#new-last-name").val("");
//     $("input#new-street").val("");
//     $("select.new-city").val("");
//     $("input.new-county").val("");

//   });
});
    });







