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

    $("button#").click(function() {
  