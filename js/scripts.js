

function Order(pizzas,size,pizzaToppings,crust,quantity,deliver) {
    this.pizzaName= pizzas;
    this.pizzaTopps= pizzaToppings;
    this.pizzaSize = size;
    this.pizzaCrust=crust;
    this.pizzaQuantity=quantity;
    this.pizzaDeliver= deliver;
  }

  Order.prototype.fullOrder = function() {
    return " <br> pizza name : "+this.pizzaName + " <br> toppings : " + this.pizzaToppings + "  <br> size : " + this.pizzaSize + " <br> crust :" + this.pizzaCrust + "  <br> number of pizza : " + this.pizzaQuantity + " <br> To be Delivered  : " + this.pizzaDeliver + " <br> ";
  }

   // user interface logic
   $(document).ready(function(){
   
    $('button#orderNow').click(function() {
       
        event.preventDefault();
        var pizzaToppings=[];
       //pizza name
       
    if($('#pizza1:checked').val())
    {
        var order1=5000;
        var pizzas=$('#pizza1').val() + " "+ "price=5000";
        console.log(pizzas);
    }
    else if($('#pizza2:checked').val())
    {
        var order1=6000;
        var pizzas=$('#pizza2').val() + " "+ "price=6000";
        console.log(pizzas);
    }
    else if($('#pizza3:checked').val())
    {
        var order1=8000;
        var pizzas=$('#pizza3').val() + " "+ "price=8000";
        console.log(pizzas);
    }
    else if($('#pizza4:checked').val())
    {
        var order1=6000;
        var pizzas=$('#pizza4').val() + " "+ "price=6000";
        console.log(pizzas);
    }
    else if($('#pizza5:checked').val())
    {
        var order1=5000;
        var pizzas=$('#pizza5').val() + " "+ "price=5000";
        console.log(pizzas);
    }
    else if($('#pizza6:checked').val()){
        var order1=8000;
        var pizzas=$('#pizza6').val() + " "+ "price=8000";
        console.log(pizzas);
    }
    else
    {
      console.log("invalid input");
    }
        //pizza size
    if($('#small:checked').val()){
            var order2=200;
            var size=$('#small').val() + " "+ "price=200";
            console.log(size);
    }
    else if($('#medium:checked').val()){
            var order2=300;
            var size=$('#medium').val() + " "+ "price=300";
            console.log(size);
        }
       else if($('#large:checked').val()){
            var order2=400;
            var size=$('#large').val() + " "+ "price=400";
            console.log(size);
        }
        else {
            console.log("invalid input");
        }
         //pizza toppings
        //  console.log(pizzaTopps);
        $.each($('input[type=checkbox]:checked'),function(){
         pizzaToppings.push($(this).val())
        });
console.log(pizzaToppings)
         var order3=0;
         function myFunction(pizzaToppings){
    for(var i=0; i<pizzaToppings.length ;i++) 
    {
      if(pizzaToppings[i]=="Spinach")
      {
         order3 +=100;
         console.log(order3);
    }
    else if(pizzaToppings[i]=="Mushrooms")
    {
       order3 +=200;
       console.log(order3);
    }
    else if(pizzaToppings[i]=="Onions")
      {
         order3 +=100;
         console.log(order3);
    }
    else if(pizzaToppings[i]=="Sausage")
      {
         order3 +=300;
         console.log(order3);
    }
    else if(pizzaToppings[i]=="Cheese")
      {
         order3 +=300;
         console.log(order3);
    }
    else if(pizzaToppings[i]=="Pineaple")
      {
         order3 +=200;
         console.log(order3);
    }
    else {
        console.log("invalid input");
    }
    
    }
    console.log(order3);
    console.log(pizzaToppings);
}
myFunction(pizzaToppings);
console.log(myFunction(pizzaToppings))
     //pizza crust
     if($('#crust1:checked').val()){
        var order4=100;
        var crust=$('#crust1').val() + " "+ "price=100";
        console.log(crust );
    }
    else if($('#crust2:checked').val()){
        var order4=200;
        var crust=$('#crust2').val() + " "+ "price=200";
        console.log(crust);
    }
    else if($('#crust3:checked').val()){
        var order4=100;
        var crust=$('#crust3').val() + " "+ "price=100";
        console.log(crust);
    }
    else if($('#crust4:checked').val()){
        var order4=300;
        var crust=$('#crust4').val() + " "+ "price=300";
        console.log(crust);
    }
    else {
        console.log("invalid input");
    }
      // pizza delivery
    if($('#no:checked').val()){
        var order5=0;
        var delivery=$('#no').val() ;
    }
    else if($('#yes:checked').val()){
        var order5=3000;
        var delivery=$('#yes').val() + " "+ "price=3000";
        console.log(delivery);
        var address=prompt("Enter your location");
        if(address !==" ")
        {
        alert("Thank you for choosing us! your pizza will be delivered at " + address );
        }
        else {
            alert("Please input your address ");
        }
    }
    else {
        console.log("invalid input");
    }
    var quantity=$('select#pizzaquantity').val();
    console.log('number '+ quantity);
    var sum=(parseInt(order1)+parseInt(order2)+parseInt(order4)+parseInt(order5))*quantity;
    console.log(sum);
    var newOrder=new Order(pizzas ,size ,pizzaToppings ,crust ,quantity,delivery );
    console.log(newOrder);
    $("ul#show-all").append(" total " + "= <br>" + sum + " <br> <li><span >" + newOrder.fullOrder() + " </span></li> " + ' '+ " " + );
    $("p#total").append("" + sum + "");
    $('#orderNow').click(function(event){
        event.preventDefault();
    })
});
    });







