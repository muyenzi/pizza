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
        var prix='$10';
        var pizzas=$('#pizza1').val(); + " "+ "price=$5"
        console.log(pizzas);
    }
    if($('#pizza2:checked').val()){
        var prix='$12';
        var pizzas=$('#pizza2').val(); + " "+ "price=$6"
        console.log(pizzas);
    }
    if($('#pizza3:checked').val()){
        var prix='$15';
        var pizzas=$('#pizza3').val(); + " "+ "price=$8"
        console.log(spizzas);
    }
    if($('#pizza4:checked').val()){
        var prix='$13';
        var size=$('#pizza4').val(); + " "+ "price=$6"
        console.log();
    }
    if($('#pizza5:checked').val()){
        var prix='$5';
        var pizzas=$('#pizza5').val(); + " "+ "price=$5"
        console.log(pizzas);
    }
    if($('#pizza6:checked').val()){
        var prix='$8';
        var pizzas=$('#pizza6').val(); + " "+ "price=$8"
        console.log(pizzas);
    }
        //pizza size
        if($('#small:checked').val()){
            var prix='$2';
            var size=$('#small').val(); + " "+ "price=$1"
            console.log(size);
        }
        if($('#medium:checked').val()){
            var prix='$2';
            var size=$('#medium').val(); + " "+ "price=$2"
            console.log(size);
        }
        if($('#large:checked').val()){
            var prix='$2';
            var size=$('#large').val(); + " "+ "price=$3"
            console.log(size);
        }
         //pizza toppings
       if($('#top1:checked').val()){
        var prix='$1';
        var topp=$('#top1').val(); + " "+ "price=$1"
        console.log(topp);
    }
    if($('#top2:checked').val()){
        var prix='$1';
        var topp=$('#top2').val(); + " "+ "price=$1"
        console.log(topp);
    }
    if($('#top3:checked').val()){
        var prix='$1';
        var topp=$('#top3').val(); + " "+ "price=$1"
        console.log(topp);
    }
    if($('#top4:checked').val()){
        var prix='$2';
        var topp=$('#top4').val(); + " "+ "price=$2"
        console.log(topp);
    }
    if($('#top5:checked').val()){
        var prix='$1';
        var topp=$('#top5').val(); + " "+ "price=$1"
        console.log(topp);
    }
    if($('#top6:checked').val()){
        var prix='$2';
        var topp =$('#top6').val(); + " "+ "price=$2"
        console.log(topp);
    }
     //pizza crust
     if($('#crust1:checked').val()){
        var prix='$1';
        var size=$('#crust1').val(); + " "+ "price=$1"
        console.log();
    }
    if($('#crust2:checked').val()){
        var prix='$2';
        var size=$('#crust2').val(); + " "+ "price=$2"
        console.log();
    }
    if($('#crust3:checked').val()){
        var prix='$1';
        var size=$('#crust3').val(); + " "+ "price=$1"
        console.log();
    }
    if($('#crust4:checked').val()){
        var prix='$3';
        var size=$('#crust4').val(); + " "+ "price=$3"
        console.log();
    }
    if($('#no:checked').val()){
        var prix='$0';
        var size=$('#no').val(); + " "+ "price=$0"
        console.log();
    }
    if($('#yes:checked').val()){
        var prix='$3';
        var size=$('#yes').val(); + " "+ "price=$3"
        console.log();
    }
});
   });





