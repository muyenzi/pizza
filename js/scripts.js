function Order(pizzas,size,topp,crust,quantity,deliver) {
    this.pizzaName= pizzas;
    this.pizzaToppings= topp;
    this.pizzaSize = size;
    this.pizzaCrust=crust;
    this.pizzaQuantity=quantity;
    this.pizzaDeliver= deliver;
  }
  // Next, we'll add our new Address constructor:
  
//   function Address(street, city, county) {
//     this.street = street;
//     this.city = city;
//     this.county = county;
//   }
  

  Address.prototype.fullOrder = function() {
    return this.pizzaName + ", " + this.pizzaToppings + ", " + this.pizzaSize +" ," +this.pizzaCrust + ", " + this.pizzaQuantity + ", " + this.pizzaDeliver;
  }

   // user interface logic
   $(document).ready(function() {

    $("button#orderNow").click(function() {
       //pizza name
       if($('#pizza1:checked').val()){
        var prix='10';
        var size=$('#pizza2').val(); + " "+ "price=$2"
        console.log();
    }
    if($('#pizza2:checked').val()){
        var prix='$12';
        var size=$('#pizza2').val(); + " "+ "price=$2"
        console.log();
    }
    if($('#pizza3:checked').val()){
        var prix='$15';
        var size=$('#pizza3').val(); + " "+ "price=$2"
        console.log();
    }
    if($('#pizza4:checked').val()){
        var prix='$13';
        var size=$('#pizza4').val(); + " "+ "price=$2"
        console.log();
    }
    if($('#pizza3:checked').val()){
        var prix='$15';
        var size=$('#pizza5').val(); + " "+ "price=$2"
        console.log();
    }
    if($('#pizza3:checked').val()){
        var prix='$10';
        var size=$('#pizza6').val(); + " "+ "price=$2"
        console.log();
    }
       
       
       
       
       
        //pizza size
        if($('#small:checked').val()){
            var prix='$2';
            var size=$('#small').val(); + " "+ "price=$2"
            console.log();
        }
        if($('#medium:checked').val()){
            var prix='$2';
            var size=$('#medium').val(); + " "+ "price=$2"
            console.log();
        }
        if($('#large:checked').val()){
            var prix='$2';
            var size=$('#large').val(); + " "+ "price=$2"
            console.log();
        }


